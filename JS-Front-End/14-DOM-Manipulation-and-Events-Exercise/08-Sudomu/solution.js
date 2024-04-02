function solve() {
    const tableElement = document.querySelector('#exercise table');
    const tBodyElements = document.querySelectorAll('tbody > tr');
    const checkBtnElement = document.querySelector('#exercise tfoot button:first-of-type');
    const clearBtnElement = document.querySelector('#exercise tfoot button:last-of-type');
    const messageElement = document.querySelector('#check p');

    const tBodyAsMatrix = Array.from(tBodyElements)
        .map(row => Array.from(row.querySelectorAll('td input[type=number]')));

    checkBtnElement.addEventListener('click', (e) => {
        const matrixLength = tBodyAsMatrix.length
        let isResolved = true;

        for (let i = 0; i < matrixLength; i++) {
            let [row, col] = [[], []];
            for (let j = 0; j < matrixLength; j++) {
                const cellX = Number(tBodyAsMatrix[i][j].value);
                const cellY = Number(tBodyAsMatrix[j][i].value);

                if (col.includes(cellY) || row.includes(cellX)) {
                    isResolved = false;
                    break;
                }
                col.push(cellY);
                row.push(cellX);
            }
            if (!isResolved) {
                break;
            }
            [row, col] = [[], []];

        }

        if (isResolved) {
            tableElement.style.border = '2px solid green';
            messageElement.textContent = 'You solve it! Congratulations!';
            messageElement.style.color = 'green';
        } else {
            tableElement.style.border = '2px solid red';
            messageElement.textContent = 'NOP! You are not done yet...';
            messageElement.style.color = 'red';
        }
    });

    clearBtnElement.addEventListener('click', (e) => {
        for (const tRow of tBodyAsMatrix) {
            tRow.forEach(e => e.value = '');
        }
        tableElement.style.border = 'none';
        messageElement.textContent = '';
    });
}