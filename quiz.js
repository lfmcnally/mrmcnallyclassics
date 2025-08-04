// Global quiz variables
let currentTestWords = [];
let currentQuestionIndex = 0;
let testLength = 10;
let score = 0;
let questionsAnswered = 0;
let selectedChapter = 'all';

// Chapter information
const chapterInfo = {
    1: "Chapter 1 vocabulary from your textbook.",
    2: "Chapter 2 vocabulary from your textbook.",
    3: "Chapter 3 vocabulary from your textbook.",
    4: "Chapter 4 vocabulary from your textbook.",
    5: "Chapter 5 vocabulary from your textbook.",
    6: "Chapter 6 vocabulary from your textbook.",
    7: "Chapter 7 vocabulary from your textbook.",
    8: "Chapter 8 vocabulary from your textbook.",
    9: "Chapter 9 vocabulary from your textbook.",
    10: "Chapter 10 vocabulary from your textbook."
};

// Update test options when chapter changes
function updateTestOptions() {
    selectedChapter = document.getElementById('chapter-select').value;
    
    // Get words for selected chapter
    const availableWords = getWordsForChapter(selectedChapter);
    const maxWords = availableWords.length;
    
    // Update test length options
    updateTestLengthOptions(maxWords);
    
    // Show chapter info
    showChapterInfo(selectedChapter);
    
    // Create new test with updated settings
    createNewTest();
}

// Get words for specific chapter
function getWordsForChapter(chapter) {
    if (chapter === 'all') {
        return vocabularyData;
    }
    return vocabularyData.filter(word => word.chapter == chapter);
}

// Update test length options based on available words
function updateTestLengthOptions(maxWords) {
    const options = [
        { value: '10', label: '10 questions', element: 'test-10' },
        { value: '25', label: '25 questions', element: 'test-25' },
        { value: '50', label: '50 questions', element: 'test-50' },
        { value: 'all', label: 'All available words', element: 'test-all' }
    ];
    
    options.forEach(option => {
        const element = document.getElementById(option.element);
        const label = element.nextElementSibling;
        
        if (parseInt(option.value) > maxWords && option.value !== 'all') {
            element.disabled = true;
            label.style.opacity = '0.5';
            label.style.color = '#6c757d';
            if (element.checked) {
                // If current selection is disabled, select a valid option
                document.getElementById('test-10').checked = true;
            }
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
            
            const userClean = userPart
                .replace(/^(i |to |he |she |it |they |we |you |i am |you are |he is |she is |it is |they are |we are )/, '')
                .replace(/ (i|he|she|it|they|we|you)$/, '')
                .replace(/^(am |is |are |was |were |be |being |been )/, '');
            
            const correctClean = correctPart
                .replace(/^(i |to |he |she |it |they |we |you |i am |you are |he is |she is |it is |they are |we are )/, '')
                .replace(/ (i|he|she|it|they|we|you)$/, '')
                .replace(/^(am |is |are |was |were |be |being |been )/, '');
            
            if (userClean === correctClean) return true;
            
            if (userClean.includes(correctClean) || correctClean.includes(userClean)) {
                if (Math.min(userClean.length, correctClean.length) >= 3) {
                    return true;
                }
            }
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
    
    const chapterText = selectedChapter === 'all' ? 'mixed chapters' : `Chapter ${selectedChapter}`;
    
    document.getElementById('final-message').innerHTML = `Final Score: ${score}/${testLength} (${percentage}%)<br>${message}<br><small>Test: ${chapterText}</small>`;
    document.getElementById('completion-message').classList.remove('hidden');
    
    document.getElementById('check-btn').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('reveal-btn').classList.add('hidden');
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize chapter selection
    updateTestOptions();
    
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
            element.disabled = false;
            label.style.opacity = '1';
            label.style.color = '';
        }
    });
    
    // Update "All available words" label
    const allLabel = document.querySelector('label[for="test-all"]');
    if (selectedChapter === 'all') {
        allLabel.textContent = `All words (${maxWords})`;
    } else {
        allLabel.textContent = `All chapter words (${maxWords})`;
    }
}

// Show chapter information
function showChapterInfo(chapter) {
    const infoDiv = document.getElementById('chapter-info');
    const detailsDiv = document.getElementById('chapter-details');
    
    if (chapter === 'all') {
        infoDiv.classList.add('hidden');
    } else {
        const wordCount = getWordsForChapter(chapter).length;
        detailsDiv.innerHTML = `
            <strong>Chapter ${chapter}</strong><br>
            ${wordCount} words<br><br>
            ${chapterInfo[chapter] || 'Chapter information not available.'}
        `;
        infoDiv.classList.remove('hidden');
    }
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
