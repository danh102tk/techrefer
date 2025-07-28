let questions = [];
let selectedQuestions = [];

fetch('questions.json')
    .then(response => response.json())
    .then(data => {
        questions = data.map((q, index) => {
            const correctAnswer = q.answers.find(a => a.correct);
            if (!correctAnswer) {
                console.warn(`Question ${index + 1} has no correct answer`);
            }
            return {
                id: index + 1,
                text: q.question,
                options: q.answers.map(a => a.text),
                answer: correctAnswer ? correctAnswer.text : null
            };
        }).filter(q => q.answer !== null);
    })
    .catch(error => console.error('Error loading questions:', error));

function loadQuestions() {
    const start = parseInt(document.getElementById('startQuestion').value) - 1;
    const end = parseInt(document.getElementById('endQuestion').value);
    const num = parseInt(document.getElementById('numQuestions').value);
    const totalQuestions = questions.length;

    if (start >= end || end > totalQuestions || num > (end - start)) {
        alert('Please check the range of questions.');
        return;
    }

    const sliced = questions.slice(start, end);
    selectedQuestions = questions.slice(start, end).slice(0, num);

    if (!document.getElementById('fixedMode').checked) {
      
        selectedQuestions.sort(() => Math.random() - 0.5);      
       
        selectedQuestions = selectedQuestions.map(q => {
            const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
            return {
                ...q,
                options: shuffledOptions
            };
        });
    }

    const questionIndicators = document.getElementById('questionIndicators');
    questionIndicators.innerHTML = '';
    for (let i = 0; i < selectedQuestions.length; i++) {
        const span = document.createElement('span');
        span.textContent = i + 1;
        span.id = `indicator-${i + 1}`;
        span.onclick = () => scrollToQuestion(i);
        questionIndicators.appendChild(span);
    }

    const questionContent = document.getElementById('questionContent');
    questionContent.innerHTML = '';
    selectedQuestions.forEach((q, index) => {
        const div = document.createElement('div');
        div.id = `question-${index + 1}`;
        div.innerHTML = `<p><strong>Question</strong> ${index + 1}: <strong>${q.text}</strong></p>`;
        q.options.forEach(opt => {
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `q${index + 1}`;
            input.value = opt;
            input.addEventListener('change', () => {
                updateIndicators();
            });
            const label = document.createElement('label');
            label.appendChild(input);
            label.appendChild(document.createTextNode(` ${opt}`));
            div.appendChild(label);
            div.appendChild(document.createElement('br'));
        });
        questionContent.appendChild(div);
        if (index < num - 1) {
            questionContent.appendChild(document.createElement('hr'));
        }
    });

    updateIndicators();
}

function updateIndicators() {
    selectedQuestions.forEach((_, i) => {
        const indicator = document.getElementById(`indicator-${i + 1}`);
        const selected = document.querySelector(`input[name="q${i + 1}"]:checked`);
        indicator.classList.remove('selected');
        if (selected) {
            indicator.classList.add('selected');
        }
    });
}

function submitQuiz() {
    const questionDivs = document.getElementById('questionContent').children;
    let correct = 0;

    selectedQuestions.forEach((q, index) => {
        const div = document.getElementById(`question-${index + 1}`);
        const inputs = div.querySelectorAll(`input[name="q${index + 1}"]`);
        const indicator = document.getElementById(`indicator-${index + 1}`);
        let selectedValue = null;

        inputs.forEach(input => {
            input.disabled = true;
            if (input.checked) selectedValue = input.value;
        });

        const labels = div.getElementsByTagName('label');
        for (let label of labels) {
            const input = label.querySelector('input');
            if (input.value === q.answer) {
                label.classList.add('correct-answer');
            }
            if (input.checked && input.value !== q.answer) {
                label.classList.add('wrong-answer');
            }
        }

        const mark = document.createElement('span');
        mark.className = selectedValue === q.answer ? 'checkmark' : 'cross';
        mark.textContent = selectedValue === q.answer ? '✓' : 'X';
        div.querySelector('p').appendChild(mark);

        if (selectedValue === q.answer) {
            correct++;
            indicator.classList.add('correct');
        } else {
            indicator.classList.add('incorrect');
        }
    });

    const total = selectedQuestions.length;
    const percentage = ((correct / total) * 100).toFixed(2);
    document.getElementById('result').innerHTML = `Correct: ${correct}/${total} (${percentage}%)`;

    document.getElementById('questions-sidebar').style.display = 'block';
}

function scrollToQuestion(index) {
    const questionDiv = document.getElementById(`question-${index + 1}`);
    if (questionDiv) {
        questionDiv.scrollIntoView({ behavior: 'smooth' });
    }
}

function toggleReviewSidebar() {
    const sidebar = document.getElementById('questions-sidebar');
    sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
}

function loadAllQuestions() {
    document.getElementById('startQuestion').value = 1;
    document.getElementById('endQuestion').value = questions.length;
    document.getElementById('numQuestions').value = questions.length;
    loadQuestions();
}

function goHome() {
    window.location.href = '/';
}

document.getElementById('fixedMode').addEventListener('change', loadQuestions);
document.getElementById('startQuestion').addEventListener('change', loadQuestions);
document.getElementById('endQuestion').addEventListener('change', loadQuestions);
document.getElementById('numQuestions').addEventListener('change', loadQuestions);
