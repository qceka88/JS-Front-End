function solve() {
    const [nameInputElement,
        universityInputElement,
        scoreInputElement,
        nextBtnElement
    ] = document.querySelectorAll('#student, #university, #score, #next-btn');

    const previewListElement = document.querySelector('#right-container .container #preview-list');
    const candidatesListElement = document.querySelector('#candidates-container .container #candidates-list');

    nextBtnElement.addEventListener('click', (e) => {
        const inputData = getInputData();

        if (inputData) {
            createNewElement(...inputData);
            nextBtnElement.disabled = true;
            clearInputForm();
        }
    });

    function createNewElement(name, university, score) {
        previewListElement.innerHTML = `<li class="application">
                                            <article>
                                                <h4>${name}</h4>
                                                <p>University: ${university}</p>
                                                <p>Score: ${score}</p>
                                            </article>
                                            <button class="action-btn edit">edit</button>
                                            <button class="action-btn apply">apply</button>
                                         </li>
                                    `;
        const [editBtnElement, applyBtnElement] = document.querySelectorAll('.action-btn');
        editBtnElement.addEventListener('click', editFunction);
        applyBtnElement.addEventListener('click', applyFunction);
    }

    function editFunction(e) {
        const parenElement = e.target.parentNode;
        nameInputElement.value = parenElement.querySelector('h4').textContent;
        universityInputElement.value = parenElement.querySelector('p:first-of-type').textContent.split(' ')[1];
        scoreInputElement.value = parenElement.querySelector('p:last-of-type').textContent.split(' ')[1];

        nextBtnElement.disabled = false;
        previewListElement.innerHTML = '';
    }

    function applyFunction(e) {
        const newElement = e.target.parentElement;
        newElement.remove();
        Array.from(newElement.querySelectorAll('button')).forEach(el => el.remove());
        candidatesListElement.appendChild(newElement);
        nextBtnElement.disabled = true;
    }

    function getInputData() {
        const name = nameInputElement.value;
        const university = universityInputElement.value;
        const score = scoreInputElement.value;

        if (!name || !university || !score) {
            return false;
        }

        return [name, university, score];
    }

    function clearInputForm() {
        nameInputElement.value = '';
        universityInputElement.value = '';
        scoreInputElement.value = '';
    }
}


window.addEventListener("load", solve);