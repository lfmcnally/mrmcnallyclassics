<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mr McNally's Classics</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.5;
            color: #333;
            background-color: #f8f9fa;
        }

        .header {
            background: white;
            border-bottom: 1px solid #e9ecef;
            padding: 1rem 0;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .header-content {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: #495057;
        }

        .nav {
            display: flex;
            gap: 2rem;
        }

        .nav-item {
            padding: 0.5rem 1rem;
            background: none;
            border: none;
            cursor: pointer;
            font-size: 1rem;
            color: #6c757d;
            border-radius: 4px;
            transition: all 0.2s;
        }

        .nav-item:hover,
        .nav-item.active {
            background: #e9ecef;
            color: #495057;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem 20px;
        }

        .main-content {
            display: grid;
            grid-template-columns: 1fr 300px;
            gap: 2rem;
            margin-top: 1rem;
        }

        .content-area {
            background: white;
            border-radius: 8px;
            border: 1px solid #e9ecef;
            overflow: hidden;
        }

        .content-header {
            background: #f8f9fa;
            border-bottom: 1px solid #e9ecef;
            padding: 1rem 1.5rem;
        }

        .content-header h2 {
            font-size: 1.25rem;
            color: #495057;
            margin: 0;
        }

        .content-body {
            padding: 1.5rem;
        }

        .sidebar {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .sidebar-section {
            background: white;
            border: 1px solid #e9ecef;
            border-radius: 8px;
            overflow: hidden;
        }

        .sidebar-header {
            background: #f8f9fa;
            border-bottom: 1px solid #e9ecef;
            padding: 0.75rem 1rem;
            font-weight: 600;
            color: #495057;
            font-size: 0.9rem;
        }

        .sidebar-content {
            padding: 1rem;
        }

        .btn {
            background: #007bff;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.9rem;
            transition: background 0.2s;
            display: inline-block;
            text-decoration: none;
            text-align: center;
        }

        .btn:hover {
            background: #0056b3;
        }

        .btn-secondary {
            background: #6c757d;
        }

        .btn-secondary:hover {
            background: #545b62;
        }

        .btn-warning {
            background: #ffc107;
            color: #212529;
        }

        .btn-warning:hover {
            background: #e0a800;
        }

        .btn-small {
            padding: 0.25rem 0.5rem;
            font-size: 0.8rem;
        }

        .form-control {
            width: 100%;
            padding: 0.5rem;
            border: 1px solid #ced4da;
            border-radius: 4px;
            font-size: 1rem;
        }

        .checkbox-group {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .checkbox-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .progress-bar {
            width: 100%;
            height: 8px;
            background: #e9ecef;
            border-radius: 4px;
            overflow: hidden;
            margin: 1rem 0;
        }

        .progress-fill {
            height: 100%;
            background: #28a745;
            width: 0%;
            transition: width 0.3s ease;
        }

        .test-container {
            max-width: 600px;
            margin: 0 auto;
        }

        .test-question {
            background: #f8f9fa;
            border: 2px solid #e9ecef;
            border-radius: 8px;
            padding: 2rem;
            text-align: center;
            margin-bottom: 1.5rem;
        }

        .test-word {
            font-size: 2.5rem;
            font-weight: bold;
            color: #495057;
            margin-bottom: 0.5rem;
        }

        .test-info {
            color: #6c757d;
            font-size: 0.9rem;
        }

        .test-input-container {
            text-align: center;
            margin-bottom: 1.5rem;
        }

        .button-group {
            display: flex;
            gap: 0.5rem;
            justify-content: center;
            flex-wrap: wrap;
        }

        .answer-feedback {
            min-height: 60px;
            text-align: center;
            padding: 1rem;
            border-radius: 4px;
            margin-top: 1rem;
        }

        .feedback-correct {
            background: #d4edda;
            border: 1px solid #c3e6cb;
            color: #155724;
        }

        .feedback-incorrect {
            background: #f8d7da;
            border: 1px solid #f5c6cb;
            color: #721c24;
        }

        .feedback-revealed {
            background: #fff3cd;
            border: 1px solid #ffeaa7;
            color: #856404;
        }

        .test-stats {
            text-align: center;
            color: #6c757d;
            font-size: 0.9rem;
            border-top: 1px solid #e9ecef;
            padding-top: 1rem;
        }

        .mode-selector .btn {
            margin: 0 0.25rem;
        }

        .hidden {
            display: none !important;
        }

        .text-center {
            text-align: center;
        }

        @media (max-width: 768px) {
            .main-content {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <div class="header-content">
            <div class="logo">Mr McNally's Classics</div>
            <nav class="nav">
                <button class="nav-item active" onclick="showSection('vocabulary')">Vocabulary</button>
                <button class="nav-item" onclick="showSection('grammar')">Grammar</button>
                <button class="nav-item" onclick="showSection('translation')">Translation</button>
                <button class="nav-item" onclick="showSection('videos')">Videos</button>
                <button class="nav-item" onclick="showSection('practice')">Practice</button>
            </nav>
        </div>
    </header>

    <div class="container">
        <div class="main-content">
            <!-- Main Content Area -->
            <div class="content-area">
                <!-- Vocabulary Section -->
                <div id="vocabulary-section">
                    <div class="content-header">
                        <h2>OCR GCSE Vocabulary Practice</h2>
                    </div>
                    <div class="content-body">
                        <!-- Mode Selection -->
                        <div class="mode-selector" style="margin-bottom: 1.5rem; text-align: center;">
                            <button class="btn btn-secondary" id="flashcard-mode-btn" onclick="switchMode('flashcard')">📚 Flashcards</button>
                            <button class="btn" id="test-mode-btn" onclick="switchMode('test')">✏️ Vocabulary Test</button>
                        </div>

                        <!-- Flashcard Mode -->
                        <div id="flashcard-mode" class="hidden">
                            <div style="background: white; border: 2px solid #e9ecef; border-radius: 8px; padding: 2rem; text-align: center; min-height: 200px; display: flex; flex-direction: column; justify-content: center; cursor: pointer; transition: all 0.2s; margin-bottom: 1rem;" onclick="flipCard()">
                                <div id="flashcard-front" class="active">
                                    <div style="font-size: 2rem; font-weight: bold; color: #495057; margin-bottom: 0.5rem;" id="latin-word">aqua</div>
                                    <div style="color: #6c757d; font-size: 0.9rem;">Click to reveal meaning</div>
                                </div>
                                <div id="flashcard-back">
                                    <div style="font-size: 2rem; font-weight: bold; color: #495057; margin-bottom: 0.5rem;" id="english-word">water</div>
                                    <div style="color: #6c757d; font-size: 0.9rem;" id="word-info">aquae, f - noun 1</div>
                                </div>
                            </div>
                            
                            <div class="text-center">
                                <button class="btn btn-secondary" onclick="previousCard()">Previous</button>
                                <button class="btn" onclick="nextCard()">Next</button>
                                <button class="btn btn-warning btn-small" onclick="starCard()" id="starBtn">☆ Star</button>
                            </div>
                        </div>

                        <!-- Test Mode -->
                        <div id="test-mode">
                            <div class="test-container">
                                <div class="test-question" id="test-question">
                                    <div class="test-word" id="test-latin-word">aqua</div>
                                    <div class="test-info" id="test-word-info">aquae, f - noun 1</div>
                                </div>
                                
                                <div class="test-input-container">
                                    <input type="text" class="form-control" id="answer-input" placeholder="Enter the English meaning..." autocomplete="off">
                                    <div class="button-group" style="margin-top: 1rem;">
                                        <button class="btn" onclick="checkAnswer()" id="check-btn">Check Answer</button>
                                        <button class="btn btn-secondary hidden" onclick="nextTestQuestion()" id="next-test-btn">Next Word</button>
                                        <button class="btn btn-warning btn-small" onclick="revealAnswer()" id="reveal-btn">Reveal Answer</button>
                                    </div>
                                </div>
                                
                                <div id="answer-feedback" class="answer-feedback"></div>
                            </div>
                            
                            <!-- Test Stats -->
                            <div class="test-stats">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem;">
                                    <div>Score: <span id="test-score">0</span>/<span id="test-total">0</span> (<span id="test-percentage">0</span>%)</div>
                                    <div>Current Question: <span id="current-q">1</span></div>
                                </div>
                                <div id="test-complete-message" class="hidden" style="margin-top: 1rem; padding: 1rem; background: #d4edda; border: 1px solid #c3e6cb; border-radius: 4px; color: #155724;">
                                    <strong>Test Complete!</strong><br>
                                    <span id="final-score-message"></span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="progress-bar">
                            <div class="progress-fill" id="vocab-progress"></div>
                        </div>
                        <div class="text-center">
                            <span id="flashcard-counter" class="hidden">Card <span id="card-counter">1</span> of <span id="total-cards">50</span></span>
                            <span id="test-counter">Question <span id="test-question-counter">1</span> of <span id="test-total-counter">10</span></span>
                        </div>
                    </div>
                </div>

                <!-- Other Sections -->
                <div id="grammar-section" class="hidden">
                    <div class="content-header">
                        <h2>Grammar Practice</h2>
                    </div>
                    <div class="content-body">
                        <h3>Coming Soon</h3>
                        <p>Grammar exercises will be added here.</p>
                    </div>
                </div>

                <div id="translation-section" class="hidden">
                    <div class="content-header">
                        <h2>Translation Practice</h2>
                    </div>
                    <div class="content-body">
                        <h3>Coming Soon</h3>
                        <p>Translation exercises will be added here.</p>
                    </div>
                </div>

                <div id="videos-section" class="hidden">
                    <div class="content-header">
                        <h2>Video Tutorials</h2>
                    </div>
                    <div class="content-body">
                        <h3>Video Library</h3>
                        <p>Your Latin tutorial videos will be embedded here.</p>
                    </div>
                </div>

                <div id="practice-section" class="hidden">
                    <div class="content-header">
                        <h2>Practice Quiz</h2>
                    </div>
                    <div class="content-body">
                        <h3>Coming Soon</h3>
                        <p>Mixed practice quiz will be added here.</p>
                    </div>
                </div>
            </div>

            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Settings -->
                <div class="sidebar-section">
                    <div class="sidebar-header">Practice Settings</div>
                    <div class="sidebar-content">
                        <div class="checkbox-group">
                            <div class="checkbox-item">
                                <input type="checkbox" id="shuffle-cards" checked>
                                <label for="shuffle-cards">Shuffle flashcards</label>
                            </div>
                            <div class="checkbox-item">
                                <input type="checkbox" id="latin-first" checked>
                                <label for="latin-first">Show Latin first</label>
                            </div>
                        </div>
                        
                        <div style="margin-top: 1rem;">
                            <label style="font-weight: 500; margin-bottom: 0.5rem; display: block;">Test length:</label>
                            <div class="checkbox-group">
                                <div class="checkbox-item">
                                    <input type="radio" name="test-length" value="10" id="test-10" checked>
                                    <label for="test-10">10 questions</label>
                                </div>
                                <div class="checkbox-item">
                                    <input type="radio" name="test-length" value="25" id="test-25">
                                    <label for="test-25">25 questions</label>
                                </div>
                                <div class="checkbox-item">
                                    <input type="radio" name="test-length" value="50" id="test-50">
                                    <label for="test-50">50 questions</label>
                                </div>
                                <div class="checkbox-item">
                                    <input type="radio" name="test-length" value="all" id="test-all">
                                    <label for="test-all">Whole set</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Progress -->
                <div class="sidebar-section">
                    <div class="sidebar-header">Your Progress</div>
                    <div class="sidebar-content">
                        <div style="margin-bottom: 0.5rem;">
                            <strong>Vocabulary:</strong> <span id="progress-count">0</span>/50 words
                        </div>
                        <div class="progress-bar">
                            <div class="progress-fill" id="overall-progress" style="width: 0%;"></div>
                        </div>
                    </div>
                </div>

                <!-- Focus Words -->
                <div class="sidebar-section">
                    <div class="sidebar-header">Starred Words</div>
                    <div class="sidebar-content">
                        <div style="color: #6c757d; font-size: 0.9rem;" id="focus-words">
                            None starred yet
                        </div>
                        <button class="btn btn-warning btn-small" onclick="practiceStarredWords()" style="margin-top: 0.5rem;">Practice Starred</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        // OCR GCSE Latin Vocabulary (first 50 words from the official list)
        const vocabularyData = [
            {latin: "a, ab", english: "from, away from, by", info: "preposition + ablative"},
            {latin: "absum", english: "be absent, be away", info: "abesse, afui - irregular verb"},
            {latin: "ac, atque", english: "and", info: "conjunction"},
            {latin: "accido", english: "happen", info: "accidere, accidi - verb 3"},
            {latin: "accipio", english: "accept, take in, receive", info: "accipere, accepi, acceptus - verb 3"},
            {latin: "ad", english: "to, towards, at", info: "preposition + accusative"},
            {latin: "adeo", english: "so much, so greatly", info: "adverb"},
            {latin: "adsum", english: "be here, be present", info: "adesse, adfui - irregular verb"},
            {latin: "advenio", english: "arrive", info: "advenire, adveni - verb 4"},
            {latin: "aedifico", english: "build", info: "aedificare, aedificavi - verb 1"},
            {latin: "ager", english: "field", info: "agri, m - noun 2"},
            {latin: "ago", english: "do, act, drive", info: "agere, egi, actus - verb 3"},
            {latin: "alius", english: "other, another", info: "alia, aliud - pronoun"},
            {latin: "alter", english: "the other, another", info: "altera, alterum - pronoun"},
            {latin: "altus", english: "high, deep", info: "alta, altum - adjective"},
            {latin: "ambulo", english: "walk", info: "ambulare, ambulavi - verb 1"},
            {latin: "amicus", english: "friend", info: "amici, m - noun 2"},
            {latin: "amo", english: "love, like", info: "amare, amavi, amatus - verb 1"},
            {latin: "amor", english: "love", info: "amoris, m - noun 3"},
            {latin: "ancilla", english: "slave-girl", info: "ancillae, f - noun 1"},
            {latin: "animus", english: "spirit, soul, mind", info: "animi, m - noun 2"},
            {latin: "annus", english: "year", info: "anni, m - noun 2"},
            {latin: "antea", english: "before", info: "adverb"},
            {latin: "aqua", english: "water", info: "aquae, f - noun 1"},
            {latin: "arma", english: "arms, weapons", info: "armorum, n plural - noun 2"},
            {latin: "ars", english: "art, skill", info: "artis, f - noun 3"},
            {latin: "audax", english: "bold, daring", info: "audacis - adjective"},
            {latin: "audeo", english: "dare", info: "audere, ausus sum - verb 2"},
            {latin: "audio", english: "hear, listen to", info: "audire, audivi - verb 4"},
            {latin: "auxilium", english: "help", info: "auxilii, n - noun 2"},
            {latin: "bellum", english: "war", info: "belli, n - noun 2"},
            {latin: "bene", english: "well", info: "adverb"},
            {latin: "bibo", english: "drink", info: "bibere, bibi - verb 3"},
            {latin: "bonus", english: "good", info: "bona, bonum - adjective"},
            {latin: "brevis", english: "short, brief", info: "breve - adjective"},
            {latin: "cado", english: "fall", info: "cadere, cecidi - verb 3"},
            {latin: "caelum", english: "sky, heaven", info: "caeli, n - noun 2"},
            {latin: "capio", english: "take, catch, capture", info: "capere, cepi, captus - verb 3"},
            {latin: "caput", english: "head", info: "capitis, n - noun 3"},
            {latin: "castra", english: "camp", info: "castrorum, n plural - noun 2"},
            {latin: "celer", english: "quick, fast", info: "celeris, celere - adjective"},
            {latin: "cena", english: "dinner, meal", info: "cenae, f - noun 1"},
            {latin: "cibus", english: "food", info: "cibi, m - noun 2"},
            {latin: "civis", english: "citizen", info: "civis, m/f - noun 3"},
            {latin: "clamo", english: "shout", info: "clamare, clamavi - verb 1"},
            {latin: "clarus", english: "famous, clear", info: "clara, clarum - adjective"},
            {latin: "cogito", english: "think, consider", info: "cogitare, cogitavi - verb 1"},
            {latin: "consilium", english: "plan, idea, advice", info: "consilii, n - noun 2"},
            {latin: "contra", english: "against", info: "preposition + accusative"},
            {latin: "cum", english: "with", info: "preposition + ablative"}
        ];

        // Global variables
        let currentCardIndex = 0;
        let isCardFlipped = false;
        let starredCards = [];
        let currentMode = 'test';
        let shuffledCardOrder = [];
        let currentShuffleIndex = 0;

        // VOCAB TESTER VARIABLES
        let currentTestWords = [];
        let currentQuestionIndex = 0;
        let testLength = 10;
        let testScore = 0;
        let questionsAnswered = 0;

        // Navigation
        function showSection(sectionName) {
            const sections = ['vocabulary', 'grammar', 'translation', 'videos', 'practice'];
            sections.forEach(section => {
                document.getElementById(section + '-section').classList.add('hidden');
            });
            
            document.getElementById(sectionName + '-section').classList.remove('hidden');
            
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
            event.target.classList.add('active');
        }

        function switchMode(mode) {
            currentMode = mode;
            
            if (mode === 'flashcard') {
                document.getElementById('flashcard-mode').classList.remove('hidden');
                document.getElementById('test-mode').classList.add('hidden');
                document.getElementById('flashcard-counter').classList.remove('hidden');
                document.getElementById('test-counter').classList.add('hidden');
                document.getElementById('flashcard-mode-btn').classList.remove('btn-secondary');
                document.getElementById('test-mode-btn').classList.add('btn-secondary');
                loadCard();
            } else {
                document.getElementById('flashcard-mode').classList.add('hidden');
                document.getElementById('test-mode').classList.remove('hidden');
                document.getElementById('flashcard-counter').classList.add('hidden');
                document.getElementById('test-counter').classList.remove('hidden');
                document.getElementById('flashcard-mode-btn').classList.add('btn-secondary');
                document.getElementById('test-mode-btn').classList.remove('btn-secondary');
                createNewVocabTest();
            }
        }

        // Get test length from radio buttons
        function getSelectedTestLength() {
            const selected = document.querySelector('input[name="test-length"]:checked');
            if (selected) {
                return selected.value === 'all' ? vocabularyData.length : parseInt(selected.value);
            }
            return 10;
        }

        // Create a new randomized test
        function createNewVocabTest() {
            testLength = getSelectedTestLength();
            
            // Create a shuffled copy of all vocabulary
            const shuffled = [...vocabularyData];
            for (let i = shuffled.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
            }
            
            // Take only the number we need for this test
            currentTestWords = shuffled.slice(0, testLength);
            
            // Reset test state
            currentQuestionIndex = 0;
            testScore = 0;
            questionsAnswered = 0;
            
            // Update UI
            updateTestCounter();
            loadCurrentQuestion();
        }

        // Load the current question
        function loadCurrentQuestion() {
            if (currentQuestionIndex >= currentTestWords.length) {
                showTestComplete();
                return;
            }
            
            const currentWord = currentTestWords[currentQuestionIndex];
            
            // Display the Latin word
            document.getElementById('test-latin-word').textContent = currentWord.latin;
            document.getElementById('test-word-info').textContent = currentWord.info;
            
            // Clear input and feedback
            document.getElementById('answer-input').value = '';
            document.getElementById('answer-feedback').innerHTML = '';
            document.getElementById('answer-feedback').className = 'answer-feedback';
            
            // Reset buttons
            document.getElementById('check-btn').classList.remove('hidden');
            document.getElementById('next-test-btn').classList.add('hidden');
            document.getElementById('reveal-btn').classList.remove('hidden');
            
            // Update question counter
            document.getElementById('test-question-counter').textContent = currentQuestionIndex + 1;
            document.getElementById('current-q').textContent = currentQuestionIndex + 1;
            
            // Update progress bar
            const progress = ((currentQuestionIndex + 1) / currentTestWords.length) * 100;
            document.getElementById('vocab-progress').style.width = progress + '%';
            
            // Focus on input
            document.getElementById('answer-input').focus();
        }

        // Check the user's answer
        function checkAnswer() {
            const userAnswer = document.getElementById('answer-input').value.trim();
            
            if (!userAnswer) {
                alert('Please enter an answer first!');
                return;
            }
            
            const currentWord = currentTestWords[currentQuestionIndex];
            const correctAnswer = currentWord.english;
            const isCorrect = isAnswerCorrect(userAnswer, correctAnswer);
            
            questionsAnswered++;
            if (isCorrect) {
                testScore++;
            }
            
            // Show feedback
            const feedbackEl = document.getElementById('answer-feedback');
            if (isCorrect) {
                feedbackEl.innerHTML = `<strong>Correct!</strong> ✓<br><small>"${currentWord.latin}" = "${correctAnswer}"</small>`;
                feedbackEl.className = 'answer-feedback feedback-correct';
            } else {
                feedbackEl.innerHTML = `<strong>Incorrect</strong> ✗<br>You wrote: "<em>${userAnswer}</em>"<br>Correct: "<strong>${correctAnswer}</strong>"`;
                feedbackEl.className = 'answer-feedback feedback-incorrect';
            }
            
            // Update score display
            updateScoreDisplay();
            
            // Show next button, hide check button
            document.getElementById('check-btn').classList.add('hidden');
            document.getElementById('next-test-btn').classList.remove('hidden');
            document.getElementById('reveal-btn').classList.add('hidden');
        }

        // Reveal the answer
        function revealAnswer() {
            const currentWord = currentTestWords[currentQuestionIndex];
            
            const feedbackEl = document.getElementById('answer-feedback');
            feedbackEl.innerHTML = `<strong>Answer revealed:</strong><br>"<strong>${currentWord.english}</strong>"`;
            feedbackEl.className = 'answer-feedback feedback-revealed';
            
            // Show next button, hide other buttons
            document.getElementById('check-btn').classList.add('hidden');
            document.getElementById('next-test-btn').classList.remove('hidden');
            document.getElementById('reveal-btn').classList.add('hidden');
        }

        // Go to next question
        function nextTestQuestion() {
            currentQuestionIndex++;
            loadCurrentQuestion();
        }

        // Check if answer is correct (with lenient matching)
        function isAnswerCorrect(userAnswer, correctAnswer) {
            const user = userAnswer.toLowerCase().trim();
            const correct = correctAnswer.toLowerCase().trim();
            
            // Direct match
            if (user === correct) return true;
            
            // Split by commas and check each part
            const correctParts = correct.split(',').map(p => p.trim());
            const userParts = user.split(',').map(p => p.trim());
            
            // Check if user answer matches any part of the correct answer
            for (const userPart of userParts) {
                for (const correctPart of correctParts) {
                    if (userPart === correctPart) return true;
                    
                    // Remove common verb prefixes/suffixes
                    const userClean = userPart.replace(/^(i |to |he |she |it |they |we |you )/, '').replace(/ (i|he|she|it|they|we|you)$/, '');
                    const correctClean = correctPart.replace(/^(i |to |he |she |it |they |we |you )/, '').replace(/ (i|he|she|it|they|we|you)$/, '');
                    
                    if (userClean === correctClean) return true;
                }
            }
            
            return false;
        }

        // Update the test counter display
        function updateTestCounter() {
            document.getElementById('test-total-counter').textContent = testLength;
            document.getElementById('test-question-counter').textContent = '1';
        }

        // Update score display
        function updateScoreDisplay() {
            document.getElementById('test-score').textContent = testScore;
            document.getElementById('test-total').textContent = questionsAnswered;
            const percentage = questionsAnswered > 0 ? Math.round((testScore / questionsAnswered) * 100) : 0;
            document.getElementById('test-percentage').textContent = percentage;
        }

        // Show test completion
        function showTestComplete() {
            const percentage = Math.round((testScore / testLength) * 100);
            let message = "";
            
            if (percentage >= 90) {
                message = "Outstanding! Excellent work! 🌟";
            } else if (percentage >= 80) {
                message = "Great job! Well done! 👏";
            } else if (percentage >= 70) {
                message = "Good effort! Keep practicing! 📚";
            } else {
                message = "Keep studying! Practice makes perfect! 💪";
            }
            
            document.getElementById('final-score-message').innerHTML = 
                `Final Score: ${testScore}/${testLength} (${percentage}%)<br>${message}`;
            document.getElementById('test-complete-message').classList.remove('hidden');
            
            // Hide test controls
            document.getElementById('check-btn').classList.add('hidden');
            document.getElementById('next-test-btn').classList.add('hidden');
            document.getElementById('reveal-btn').classList.add('hidden');
        }

        // Flashcard functions (simplified)
        function initializeShuffledOrder() {
            shuffledCardOrder = [...Array(vocabularyData.length).keys()];
            for (let i = shuffledCardOrder.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledCardOrder[i], shuffledCardOrder[j]] = [shuffledCardOrder[j], shuffledCardOrder[i]];
            }
            currentShuffleIndex = 0;
        }

        function flipCard() {
            const front = document.getElementById('flashcard-front');
            const back = document.getElementById('flashcard-back');
            
            if (!isCardFlipped) {
                front.classList.remove('active');
                back.classList.add('active');
                isCardFlipped = true;
            } else {
                back.classList.remove('active');
                front.classList.add('active');
                isCardFlipped = false;
            }
        }

        function nextCard() {
            const isShuffled = document.getElementById('shuffle-cards').checked;
            
            if (isShuffled) {
                currentShuffleIndex = (currentShuffleIndex + 1) % shuffledCardOrder.length;
                currentCardIndex = shuffledCardOrder[currentShuffleIndex];
            } else {
                currentCardIndex = (currentCardIndex + 1) % vocabularyData.length;
            }
            loadCard();
        }

        function previousCard() {
            const isShuffled = document.getElementById('shuffle-cards').checked;
            
            if (isShuffled) {
                currentShuffleIndex = currentShuffleIndex === 0 ? shuffledCardOrder.length - 1 : currentShuffleIndex - 1;
                currentCardIndex = shuffledCardOrder[currentShuffleIndex];
            } else {
                currentCardIndex = currentCardIndex === 0 ? vocabularyData.length - 1 : currentCardIndex - 1;
            }
            loadCard();
        }

        function loadCard() {
            const card = vocabularyData[currentCardIndex];
            const latinFirst = document.getElementById('latin-first').checked;
            const isShuffled = document.getElementById('shuffle-cards').checked;
            
            // Reset card to front
            document.getElementById('flashcard-front').classList.add('active');
            document.getElementById('flashcard-back').classList.remove('active');
            isCardFlipped = false;
            
            if (latinFirst) {
                document.getElementById('latin-word').textContent = card.latin;
                document.getElementById('english-word').textContent = card.english;
            } else {
                document.getElementById('latin-word').textContent = card.english;
                document.getElementById('english-word').textContent = card.latin;
            }
            
            document.getElementById('word-info').textContent = card.info;
            
            // Update counter and progress
            if (isShuffled) {
                document.getElementById('card-counter').textContent = currentShuffleIndex + 1;
            } else {
                document.getElementById('card-counter').textContent = currentCardIndex + 1;
            }
            document.getElementById('total-cards').textContent = vocabularyData.length;
            
            // Update star button
            const starBtn = document.getElementById('starBtn');
            if (starredCards.includes(currentCardIndex)) {
                starBtn.textContent = '★ Starred';
                starBtn.classList.add('btn-warning');
            } else {
                starBtn.textContent = '☆ Star';
                starBtn.classList.remove('btn-warning');
            }
        }

        function starCard() {
            const index = starredCards.indexOf(currentCardIndex);
            if (index > -1) {
                starredCards.splice(index, 1);
            } else {
                starredCards.push(currentCardIndex);
            }
            
            loadCard();
            updateFocusWords();
        }

        function updateFocusWords() {
            const focusWordsEl = document.getElementById('focus-words');
            if (starredCards.length === 0) {
                focusWordsEl.textContent = 'None starred yet';
            } else {
                const words = starredCards.map(index => vocabularyData[index].latin).slice(0, 5).join(', ');
                focusWordsEl.textContent = words + (starredCards.length > 5 ? '...' : '');
            }
        }

        function practiceStarredWords() {
            if (starredCards.length === 0) {
                alert('No starred words to practice!');
                return;
            }
            
            currentCardIndex = starredCards[0];
            loadCard();
            switchMode('flashcard');
        }

        // Event listeners
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize
            initializeShuffledOrder();
            currentMode = 'test';
            
            // Start with a new vocab test
            createNewVocabTest();
            
            // Add event listeners for test length radio buttons
            document.querySelectorAll('input[name="test-length"]').forEach(function(radio) {
                radio.addEventListener('change', function() {
                    if (currentMode === 'test') {
                        createNewVocabTest();
                    }
                });
            });
            
            // Enter key support
            document.getElementById('answer-input').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    const checkBtn = document.getElementById('check-btn');
                    const nextBtn = document.getElementById('next-test-btn');
                    
                    if (!checkBtn.classList.contains('hidden')) {
                        checkAnswer();
                    } else if (!nextBtn.classList.contains('hidden')) {
                        nextTestQuestion();
                    }
                }
            });
            
            // Other event listeners
            document.getElementById('latin-first').addEventListener('change', function() {
                if (currentMode === 'flashcard') {
                    loadCard();
                } else {
                    loadCurrentQuestion();
                }
            });
            
            document.getElementById('shuffle-cards').addEventListener('change', function() {
                if (this.checked) {
                    initializeShuffledOrder();
                    currentShuffleIndex = 0;
                    currentCardIndex = shuffledCardOrder[currentShuffleIndex];
                } else {
                    currentShuffleIndex = 0;
                }
                
                if (currentMode === 'flashcard') {
                    loadCard();
                }
            });
        });
    </script>
</body>
</html>
