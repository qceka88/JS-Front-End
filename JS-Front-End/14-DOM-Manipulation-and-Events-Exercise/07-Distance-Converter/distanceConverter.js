function attachEventsListeners() {
    const inputElement = document.getElementById('inputDistance');
    const inputUnitsElement = document.querySelector('#inputUnits');
    const outputElement = document.getElementById('outputDistance');
    const outputUnitsElement = document.querySelector('#outputUnits');
    const buttonElement = document.getElementById('convert');

    const convertor = {
        'km':  (x, op) => eval(`${x} ${op} 1000`),
        'm':  (x, op) => x,
        'cm':  (x, op) => eval(`${x} ${op} 0.01`),
        'mm':  (x, op) => eval(`${x} ${op} 0.001`),
        'mi':  (x, op) => eval(`${x} ${op} 1609.34`),
        'yrd':  (x, op) => eval(`${x} ${op} 0.9144`),
        'ft':  (x, op) => eval(`${x} ${op} 0.3048`),
        'in':  (x, op) => eval(`${x} ${op} 0.0254`),
    };

    buttonElement.addEventListener('click', (e) => {
        if (Number(inputElement.value)) {
            const resultInMM = convertor[inputUnitsElement.value](inputElement.value , '*');

            outputElement.value = convertor[outputUnitsElement.value](resultInMM, '/');
        }
    });

}