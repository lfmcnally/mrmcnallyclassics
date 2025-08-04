// Global quiz variables
let currentTestWords = [];
let currentQuestionIndex = 0;
let testLength = 10;
let score = 0;
let questionsAnswered = 0;
let selectedChapter = 'all';

// Get words for specific chapter
function getWordsForChapter(chapter) {
    if (chapter === 'all') {
        return vocabularyData;
    }
    return vocabularyData.filter(word => word.chapter == chapter);
}

// Get selected test length
function getTestLength() {
    const selected = document.querySelector('input[name="test-length"]:checked');
    const selectedValue = selected ? selected.value : '10';
    const availableWords = getWordsForChapter(selectedChapter);
    
    if (selectedValue === 'all') {
        return availableWords.length;
    }
    
    const requestedLength = parseInt(selectedValue);
    return Math.min(requestedLength, availableWords.length);
}

// Update when chapter changes
function updateTestOptions() {
    const selectedRadio = document.querySelector('input[name="chapter-select"]:checked');
    if (!selectedRadio) return;
    
    selectedChapter = selectedRadio.value;
    createNewTest();
}

// Create new test
function createNewTest() {
    const availableWords = getWordsForChapter(selectedChapter);
    testLength = getTestLength();
    
    if (availableWords.length === 0) {
        alert('No words available for the selected chapter.');
        return;
    }
    
    // Shuffle vocabulary
    const shuffled = [...availableWords];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    currentTestWords = shuffled.slice(0, testLength);
    currentQuestionIndex = 0;
    score = 0;
    questionsAnswered = 0;
    
    // Hide completion message
    document.getElementById('completion-message').classList.add('hidden');
    
    updateDisplay();
    loadQuestion();
}

// Load current question
function loadQuestion() {
    if (currentQuestionIndex >= currentTestWords.length) {
        showCompletion();
        return;
    }
    
    const word = currentTestWords[currentQuestionIndex];
    document.getElementById('latin-word').textContent = word.latin;
    document.getElementById('word-info').textContent = word.info;
    document.getElementById('answer-input').value = '';
    document.getElementById('feedback').innerHTML = '';
    document.getElementById('feedback').className = 'feedback';
    
    // Reset buttons
    document.getElementById('check-btn').classList.remove('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('reveal-btn').classList.remove('hidden');
    
    updateDisplay();
    document.getElementById('answer-input').focus();
}

// Update display
function updateDisplay() {
    document.getElementById('current-question').textContent = currentQuestionIndex + 1;
    document.getElementById('total-questions').textContent = testLength;
    document.getElementById('score').textContent = score;
    document.getElementById('answered').textContent = questionsAnswered;
    
    const percentage = questionsAnswered > 0 ? Math.round((score / questionsAnswered) * 100) : 0;
    document.getElementById('percentage').textContent = percentage;
    
    const progress = ((currentQuestionIndex + 1) / testLength) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
}

// Check answer
function checkAnswer() {
    const userAnswer = document.getElementById('answer-input').value.trim();
    if (!userAnswer) {
        alert('Please enter an answer first!');
        return;
    }
    
    const word = currentTestWords[currentQuestionIndex];
    const isCorrect = isAnswerCorrect(userAnswer, word.english);
    
    questionsAnswered++;
    if (isCorrect) score++;
    
    showFeedback(isCorrect, userAnswer, word);
    updateDisplay();
    
    document.getElementById('check-btn').classList.add('hidden');
    document.getElementById('next-btn').classList.remove('hidden');
    document.getElementById('reveal-btn').classList.add('hidden');
}

// Show feedback
function showFeedback(isCorrect, userAnswer, word) {
    const feedback = document.getElementById('feedback');
    
    if (isCorrect) {
        feedback.innerHTML = `<strong>Correct!</strong> ✓<br><small>"${word.latin}" = "${word.english}"</small>`;
        feedback.className = 'feedback feedback-correct';
    } else {
        feedback.innerHTML = `<strong>Incorrect</strong> ✗<br>You wrote: "<em>${userAnswer}</em>"<br>Correct: "<strong>${word.english}</strong>"`;
        feedback.className = 'feedback feedback-incorrect';
    }
}

// Reveal answer
function revealAnswer() {
    const word = currentTestWords[currentQuestionIndex];
    const feedback = document.getElementById('feedback');
    
    feedback.innerHTML = `<strong>Answer:</strong> "<strong>${word.english}</strong>"`;
    feedback.className = 'feedback feedback-revealed';
    
    document.getElementById('check-btn').classList.add('hidden');
    document.getElementById('next-btn').classList.remove('hidden');
    document.getElementById('reveal-btn').classList.add('hidden');
}

// Next question
function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

// Check if answer is correct
function isAnswerCorrect(userAnswer, correctAnswer) {
    const user = userAnswer.toLowerCase().trim();
    const correct = correctAnswer.toLowerCase().trim();
    
    if (user === correct) return true;
    
    const correctParts = correct.split(',').map(p => p.trim());
    const userParts = user.split(',').map(p => p.trim());
    
    for (const userPart of userParts) {
        for (const correctPart of correctParts) {
            if (userPart === correctPart) return true;
        }
    }
    
    return false;
}

// Show completion
function showCompletion() {
    const percentage = Math.round((score / testLength) * 100);
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
    
    document.getElementById('final-message').innerHTML = `Final Score: ${score}/${testLength} (${percentage}%)<br>${message}`;
    document.getElementById('completion-message').classList.remove('hidden');
    
    document.getElementById('check-btn').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('reveal-btn').classList.add('hidden');
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize
    createNewTest();
    
    // Chapter selection change
    document.querySelectorAll('input[name="chapter-select"]').forEach(radio => {
        radio.addEventListener('change', updateTestOptions);
    });
    
    // Test length change
    document.querySelectorAll('input[name="test-length"]').forEach(radio => {
        radio.addEventListener('change', createNewTest);
    });
    
    // Enter key support
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
