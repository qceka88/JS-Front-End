function attachEventsListeners() {
    const buttonsElements = document.querySelectorAll('main div input[type=button]');
    const inputElements = document.querySelectorAll('input[type=text]');

    const convertor = {
        'days': (x,o) => eval(`${x} ${o} 24 ${o} 60 ${o} 60`),
        'hours': (x,o)=> eval(`${x} ${o} 60 ${o} 60`),
        'minutes': (x,o)=> eval(`${x} ${o} 60`),
        'seconds': x => x,
    };

    for (const button of buttonsElements) {
        button.addEventListener('click', (e) => {
            const currentInput = e.target.previousElementSibling;
            const multiplyOperator = '*';
            const currentSeconds = convertor[currentInput.id](Number(currentInput.value), multiplyOperator);

            Array.from(inputElements).forEach(element => {
                const divideOperator = '/';
                element.value = convertor[element.id](currentSeconds, divideOperator);
            });
        });
    }
}