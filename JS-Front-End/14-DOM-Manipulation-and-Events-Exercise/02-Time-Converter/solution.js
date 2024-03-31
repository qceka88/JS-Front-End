function attachEventsListeners() {
    const buttonsElements = document.querySelectorAll('main div input[type=button]');

    const convertor = {
        'days': (x,o) => eval(`${x} ${o} 24 ${o} 60 ${o} 60`),
        'hours': (x,o)=> eval(`${x} ${o} 60 ${o} 60`),
        'minutes': (x,o)=> eval(`${x} ${o} 60`),
        'seconds': x => x,
    };

    for (const button of buttonsElements) {
        button.addEventListener('click', (e) => {
            const elementInput = e.target.previousElementSibling;
            const multiplyOperator = '*';
            const currentSeconds = convertor[elementInput.id](Number(elementInput.value), multiplyOperator);

            Array.from(buttonsElements).forEach(element => {
                const inputElement = element.previousElementSibling;
                const divideOperator = '/';
                inputElement.value = convertor[inputElement.id](currentSeconds, divideOperator);
            });
        });
    }
}