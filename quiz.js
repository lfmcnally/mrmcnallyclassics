// Quiz variables
let currentTestWords = [];
let currentQuestionIndex = 0;
let score = 0;
let questionsAnswered = 0;

function createNewTest() {
    // Use your existing vocabularyData
    const shuffled = [...vocabularyData];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    currentTestWords = shuffled.slice(0, 10);
    currentQuestionIndex = 0;
    score = 0;
    questionsAnswered = 0;
    
    loadQuestion();
}

function loadQuestion() {
    const word = currentTestWords[currentQuestionIndex];
    document.getElementById('latin-word').textContent = word.latin;
    document.getElementById('word-info').textContent = word.info;
    document.getElementById('answer-input').value = '';
    
    // Clear feedback and reset to default styling
    const feedback = document.getElementById('feedback');
    feedback.innerHTML = '';
    feedback.className = 'feedback'; // Reset to default class
    
    // Reset buttons
    document.getElementById('check-btn').classList.remove('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('reveal-btn').classList.remove('hidden');
    
    // Update progress display
    updateDisplay();
    
    // Focus on input
    document.getElementById('answer-input').focus();
}

function updateDisplay() {
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = currentTestWords.length;
    document.getElementById('score').textContent = score;
    document.getElementById('answered').textContent = questionsAnswered;
    
    const percentage = questionsAnswered > 0 ? Math.round((score / questionsAnswered) * 100) : 0;
    document.getElementById('percentage').textContent = percentage;
    
    const progress = ((currentQuestionIndex + 1) / currentTestWords.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
}

function checkAnswer() {
    const userAnswer = document.getElementById('answer-input').value.trim().toLowerCase();
    const word = currentTestWords[currentQuestionIndex];
    const correctAnswer = word.english.toLowerCase();
    
    const feedback = document.getElementById('feedback');
    
    if (userAnswer === correctAnswer || correctAnswer.includes(userAnswer)) {
        feedback.innerHTML = `<strong>Correct!</strong> ✓<br><small>"${word.latin}" = "${word.english}"</small>`;
        feedback.className = 'feedback feedback-correct';
        score++;
    } else {
        feedback.innerHTML = `<strong>Incorrect</strong> ✗<br>You wrote: "<em>${userAnswer}</em>"<br>Correct: "<strong>${word.english}</strong>"`;
        feedback.className = 'feedback feedback-incorrect';
    }
    
    questionsAnswered++;
    updateDisplay();
    
    document.getElementById('check-btn').classList.add('hidden');
    document.getElementById('next-btn').classList.remove('hidden');
    document.getElementById('reveal-btn').classList.add('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentTestWords.length) {
        loadQuestion();
    } else {
        // Test complete
        showCompletion();
    }
}

function showCompletion() {
    const percentage = Math.round((score / currentTestWords.length) * 100);
    let message = "";
    
    if (percentage >= 90) {
        message = "Outstanding! Excellent work! 🌟";
    } else if (percentage >= 80) {
        message = "Great job! Well done! 👏";
    } else if (percentage >= 70) {
        message = "Good effort! Keep practising! 📚";
    } else {
        message = "Keep studying! Practice makes perfect! 💪";
    }
    
    document.getElementById('final-message').innerHTML = `Final Score: ${score}/${currentTestWords.length} (${percentage}%)<br>${message}`;
    document.getElementById('completion-message').classList.remove('hidden');
    
    document.getElementById('check-btn').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('reveal-btn').classList.add('hidden');
}

function revealAnswer() {
    const word = currentTestWords[currentQuestionIndex];
    const feedback = document.getElementById('feedback');
    feedback.innerHTML = `<strong>Answer:</strong> "${word.english}"`;
    feedback.className = 'feedback feedback-revealed';
    
    document.getElementById('check-btn').classList.add('hidden');
    document.getElementById('next-btn').classList.remove('hidden');
    document.getElementById('reveal-btn').classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
    createNewTest();
    
    // Add Enter key support
    document.getElementById('answer-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const checkBtn = document.getElementById('check-btn');
            const nextBtn = document.getElementById('next-btn');
            
            if (!checkBtn.classList.contains('hidden')) {
                checkAnswer();
            } else if (!nextBtn.classList.contains('hidden')) {
                nextQuestion();
            }
        }
    });
});
