function solve() {
    const inputElement = document.querySelector('#exercise textarea:first-of-type');
    const inputBtnElement = document.querySelector('#exercise button:first-of-type');
    const outputElement = document.querySelector('#exercise textarea:last-of-type');
    const outputBtnElement = document.querySelector('#exercise button:last-of-type');
    const tableElement = document.querySelector('.table tbody');

    const mapElements = {
        'img': a => {
            let el = document.createElement('img');
            el.src = a;
            return el;
        },
        'name': a => {
            let el = document.createElement('p');
            el.textContent = a;
            return el;
        },
        'price': a => {
            let el = document.createElement('p');
            el.textContent = a;
            return el;
        },
        'decFactor': a => {
            let el = document.createElement('p');
            el.textContent = a;
            return el;
        },
        'check': a => {
            let el = document.createElement('input');
            el.type = a;
            return el;
        }
    };

    inputBtnElement.addEventListener('click', (e) => {
        const records = JSON.parse(inputElement.value);

        for (const record of records) {
            const currentInputData = Object.entries(record);

            [currentInputData[0], currentInputData[1]] = [currentInputData[1], currentInputData[0]]
            currentInputData.push(['check', 'checkbox'])

            const newRow = document.createElement('tr');
            currentInputData.forEach(info => {
                const newTDElement = document.createElement('td');
                const newElement = mapElements[info[0]](info[1]);

                newTDElement.appendChild(newElement);
                newRow.appendChild(newTDElement);
            })
            tableElement.appendChild(newRow)

        }
    });
    outputBtnElement.addEventListener('click', (e) => {
        let totalSum = 0;
        let totalFactor = 0;
        let names = [];
        for (const row of tableElement.querySelectorAll('tr')) {
            const mark = row.querySelector('input[type=checkbox]');

            if (mark.checked) {
                const name = row.querySelector('td:nth-of-type(2) p');
                const price = row.querySelector('td:nth-of-type(3) p');
                const factor = row.querySelector('td:nth-of-type(4) p');

                totalSum += Number(price.textContent);
                totalFactor += Number(factor.textContent);
                names.push(name.textContent);
            }
        }

        outputElement.value = `Bought furniture: ${names.join(', ')}\n`
        outputElement.value += `Total price: ${totalSum.toFixed(2)}\n`
        outputElement.value += `Average decoration factor: ${totalFactor / names.length}`
    })
}

