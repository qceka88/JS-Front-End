function solve() {
    const baseURL = 'http://localhost:3030/jsonstore/bus/schedule';

    const departBtnElement = document.getElementById('depart');
    const arriveBtnElement = document.getElementById('arrive');
    const infoElement = document.querySelector('.info');

    let busId = 'depot';
    let busName = 'Depot'

    function depart() {
        const targetURL = `${baseURL}/${busId}`;
        departBtnElement.disabled = true;
        arriveBtnElement.disabled = false;
        fetch(targetURL)
            .then(response => response.json())
            .then(data => {
                busId = data['next'];
                busName = data['name']
                const message = `Next stop ${busName}`;
                infoElement.textContent = message;
                console.log(data);
            })
            .catch(error => {
                departBtnElement.disabled = true;
                arriveBtnElement.disabled = true;
                console.log('ERROR:', error);
            });
    }

    async function arrive() {
        departBtnElement.disabled = false;
        arriveBtnElement.disabled = true;

        const message = `Arriving at ${busName}`;

        infoElement.textContent = message;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();