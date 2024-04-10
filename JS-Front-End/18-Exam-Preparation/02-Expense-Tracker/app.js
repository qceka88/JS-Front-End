window.addEventListener("load", solve);

function solve() {
    const addBtnElement = document.getElementById('add-btn');
    const expenseInputElement = document.getElementById('expense');
    const amountInputElement = document.getElementById('amount');
    const dateInputElement = document.getElementById('date');
    const previewListElement = document.getElementById('preview-list');
    const resultListElement = document.getElementById('expenses-list');
    const btnDeleteElement = document.querySelector('.btn.delete');


    addBtnElement.addEventListener('click', (e) => {
        const expense = expenseInputElement.value;
        const amount = amountInputElement.value;
        const date = dateInputElement.value;

        if (!expense || !amount || !date) {
            return;
        }
        const expenseListElement = createArticleElement(expense, amount, date);
        previewListElement.appendChild(expenseListElement);

        addBtnElement.disabled = true;

        expenseInputElement.value = '';
        amountInputElement.value = '';
        dateInputElement.value = '';

        const editBtnElement = expenseListElement.querySelector('.btn.edit');
        const okBtnElement = expenseListElement.querySelector('.btn.ok');

        editBtnElement.addEventListener('click', (e) => {
            expenseInputElement.value = expense;
            amountInputElement.value = amount;
            dateInputElement.value = date;

            expenseListElement.remove();

            addBtnElement.disabled = false;
        });

        okBtnElement.addEventListener('click', (e) => {
            const buttonsElement = e.target.parentNode;
            buttonsElement.remove();

            resultListElement.appendChild(expenseListElement)

            addBtnElement.disabled = false;
        });

    });

    btnDeleteElement.addEventListener('click', (e) => {
        resultListElement.innerHTML = '';
    });

    function createArticleElement(expense, amount, date) {
        const pTypeElement = document.createElement('p');
        pTypeElement.textContent = `Type: ${expense}`;
        const pAmountElement = document.createElement('p');
        pAmountElement.textContent = `Amount: ${amount}$`;
        const pDateElement = document.createElement('p');
        pDateElement.textContent = `Date: ${date}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(pTypeElement);
        articleElement.appendChild(pAmountElement);
        articleElement.appendChild(pDateElement);

        const editButtonElement = document.createElement('button');
        editButtonElement.classList.add('btn', 'edit');
        editButtonElement.textContent = 'edit';

        const okButtonElement = document.createElement('button');
        okButtonElement.classList.add('btn', 'ok');
        okButtonElement.textContent = 'ok';

        const buttonsDivElement = document.createElement('div');
        buttonsDivElement.classList.add('buttons');
        buttonsDivElement.appendChild(editButtonElement);
        buttonsDivElement.appendChild(okButtonElement);

        const liExpenseElement = document.createElement('li');
        liExpenseElement.classList.add('expense-item');
        liExpenseElement.appendChild(articleElement);
        liExpenseElement.appendChild(buttonsDivElement);

        return liExpenseElement;
    }


}