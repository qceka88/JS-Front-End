function getInfo() {
    const baseURL = 'http://localhost:3030/jsonstore/bus/businfo';

    const inputElement = document.getElementById('stopId');
    const stopNameElement = document.getElementById('stopName');
    const busListElement = document.getElementById('buses');

    const targetURL = `${baseURL}/${inputElement.value}`;
    inputElement.value = '';
    fetch(targetURL)
        .then(res => res.json())
        .then(data => {
            busListElement.innerHTML = '';
            stopNameElement.textContent = data['name'];

            Object.entries(data['buses'])
                .forEach(bus => {
                    const newLi = document.createElement('li');
                    newLi.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`

                    busListElement.appendChild(newLi);
                });
        })
        .catch(err => {
            busListElement.innerHTML = '';
            stopNameElement.textContent = 'Error';
            console.log('ERROR:', err);
        });

}