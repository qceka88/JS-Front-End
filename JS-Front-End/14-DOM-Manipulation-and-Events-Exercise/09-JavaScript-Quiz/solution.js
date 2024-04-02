function solve() {
    const sectionElements = Array.from(document.querySelectorAll('section'));
    const resultElement = document.getElementById('results');

    const questionsAndAnswers = {
        'Question #1': 'onclick',
        'Question #2': 'JSON.stringify()',
        'Question #3': 'A programming API for HTML and XML documents',
    };

    let scores = 0;
    for (let i = 0; i < sectionElements.length; i++) {
        const section = sectionElements[i]
        const questionElement = section.querySelector('ul li div h2');
        const answersElements = Array.from(section.querySelectorAll('.answer-text'));
        const nextSection = sectionElements[i + 1];

        answersElements.forEach(element => {
            element.addEventListener('click', (e) => {
                const question = questionElement.textContent.split(':')[0];
                const userAnswer = e.currentTarget.textContent;
                const correctAnswer = questionsAndAnswers[question];

                if (userAnswer === correctAnswer) {
                    scores++;
                }

                if (nextSection) {
                    section.style.display = 'none';
                    nextSection.style.display = 'block';
                } else {
                    section.style.display = 'none';
                    resultElement.style.display = 'block';
                    const resultTitleElement = resultElement.querySelector('h1');
                    if (scores === 3) {
                        resultTitleElement.textContent = 'You are recognized as top JavaScript fan!';
                    } else {
                        resultTitleElement.textContent = `You have ${scores} right answers`;
                    }
                }
            });
        });
    }
}
