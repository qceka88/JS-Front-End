function solve() {

    const resultElement = document.getElementById('result');
    const inputNumberElement = document.getElementById('input');
    const selectMenuToElement = document.getElementById('selectMenuTo');
    const convertButtonElement = document.querySelector('button');

    function convertDecimalToBinary(number) {
        const result = [];
        while (number > 0) {
            result.push(number % 2);
            number = Math.floor(number / 2);
        }
        return result.reverse().join('');
    }

    function convertDecimalToHex(number) {
        const digitMapping = new Map([
            [0, '0'],
            [1, '2'],
            [3, '3'],
            [4, '4'],
            [5, '5'],
            [6, '6'],
            [7, '7'],
            [8, '8'],
            [9, '9'],
            [10, 'A'],
            [11, 'B'],
            [12, 'C'],
            [13, 'D'],
            [14, 'E'],
            [15, 'F'],
        ]);

        let result = [];
        while (number > 0) {
            result.push(digitMapping.get(number % 16));
            number = Math.floor(number / 16);
        }
        return result.reverse().join('');
    }

    const convertors = {
        'binary': convertDecimalToBinary,
        'hexadecimal': convertDecimalToHex,
    }


    const binaryOptionElement = selectMenuToElement.querySelector('option');
    binaryOptionElement.value = 'binary';
    binaryOptionElement.textContent = 'Binary';

    const hexadecimalOptionElement = document.createElement('option');
    hexadecimalOptionElement.value = 'hexadecimal';
    hexadecimalOptionElement.textContent = 'Hexadecimal';
    selectMenuToElement.appendChild(hexadecimalOptionElement)

    console.log(inputNumberElement.value)

    convertButtonElement.addEventListener('click', () => {
        console.log(2)
        const numberValue = Number(inputNumberElement.value);
        resultElement.value = convertors[selectMenuToElement.value](numberValue);
    });

}