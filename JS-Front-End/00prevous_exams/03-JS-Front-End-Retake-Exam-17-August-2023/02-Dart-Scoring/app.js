function solve() {
    const [nameInputElement, scoreInputElement, roundInputElement] = document.querySelectorAll('.scoring-content > input');
    const addBtnElement = document.getElementById('add-btn');

    const sureListElement = document.getElementById('sure-list');

    const scoreboardListElement = document.getElementById('scoreboard-list');
    const clearBtnElement = document.querySelector('.btn.clear');


    addBtnElement.addEventListener('click', (e) => {
        const inputData = getInputData();
        if (inputData) {
            addBtnElement.disabled = true;

            const newLiElement = document.createElement('li');
            newLiElement.classList.add('dart-item');

            newLiElement.innerHTML = `
                                <article>
                                <p>${inputData.name}</p>
                                <p>Score: ${inputData.score}</p>
                                <p>Round: ${inputData.round}</p>
                                </article>
                                <button class="btn edit">edit</button>
                                <button class="btn ok">ok</button>
                                     `;

            const [editBtn, okBtn] = newLiElement.querySelectorAll('button');

            editBtn.addEventListener('click', (e) => {
                nameInputElement.value = inputData.name;
                scoreInputElement.value = inputData.score;
                roundInputElement.value = inputData.round;

                newLiElement.remove();
                addBtnElement.disabled = false;
            });

            okBtn.addEventListener('click', (e) => {
                editBtn.remove();
                okBtn.remove();

                scoreboardListElement.appendChild(newLiElement);
                addBtnElement.disabled = false;
            });

            sureListElement.appendChild(newLiElement);
        }
    });


    clearBtnElement.addEventListener('click', (e) => {
        scoreboardListElement.innerHTML = '';
    });

    function getInputData() {
        const name = nameInputElement.value;
        const score = scoreInputElement.value;
        const round = roundInputElement.value;

        if (!name || !score || !round) {
            return false;
        }

        clearInputForm();
        return {name, score, round};
    }

    function clearInputForm() {
        nameInputElement.value = '';
        scoreInputElement.value = '';
        roundInputElement.value = '';
    }
}


window.addEventListener("load", solve);