function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/forecaster';

    const inputElement = document.getElementById('location');
    const btnElement = document.getElementById('submit');
    const resultElement = document.getElementById('forecast');


    const weatherCodes = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂'
    };

    btnElement.addEventListener('click', (e) => {
        const locationsURL = baseURL + '/locations';
        fetch(locationsURL)
            .then(response => response.json())
            .then(data => {

                const searchedCity = Object.values(data).filter(a => a.name === inputElement.value)[0];

                if (!searchedCity) {
                    throw new Error;
                }

                const currentCode = searchedCity['code'];
                const todayWeatherURL = `${baseURL}/today/${currentCode}`;
                const upcomingWeatherURL = `${baseURL}/upcoming/${currentCode}`;

                resultElement.style.display = 'block';

                fetch(todayWeatherURL)
                    .then(response => response.json())
                    .then(todayData => {
                        const todayElement = resultElement.querySelector('#current');
                        todayElement.innerHTML = '<div class="label">Current conditions</div>'

                        const todayResultElement = document.createElement('div');
                        todayResultElement.classList.add('forecasts')

                        const cityName = todayData['name'];
                        const condition = todayData['forecast']['condition'];
                        const highTemp = todayData['forecast']['high'];
                        const lowTemp = todayData['forecast']['low'];

                        todayResultElement.innerHTML = `
                                        <span class="condition symbol">${weatherCodes[condition]}</span>
                                        <span class="condition">
                                            <span class="forecast-data">${cityName}</span>
                                            <span class="forecast-data">${lowTemp}°/${highTemp}°</span>
                                            <span class="forecast-data">${condition}</span>
                                        </span>`

                        todayElement.appendChild(todayResultElement);
                    });

                fetch(upcomingWeatherURL)
                    .then(response => response.json())
                    .then(upcomingData => {
                        const upcomingContainerElement = resultElement.querySelector('#upcoming');
                        upcomingContainerElement.innerHTML = '<div class="label">Three-day forecast</div>'

                        const upcomingNewDivElement = document.createElement('div');
                        upcomingNewDivElement.classList.add('forecast-info')

                        for (const upcomingDay of upcomingData.forecast) {
                            const newSpan = document.createElement('span');
                            newSpan.classList.add('upcoming');

                            const condition = upcomingDay['condition'];
                            const highTemp = upcomingDay['high'];
                            const lowTemp = upcomingDay['low'];

                            newSpan.innerHTML = `
                                        <span class="symbol">${weatherCodes[condition]}</span>
                                        <span class="forecast-data">${lowTemp}°/${highTemp}°</span>
                                        <span class="forecast-data">${condition}</span>
                                        `
                            upcomingNewDivElement.appendChild(newSpan);
                        }
                        upcomingContainerElement.appendChild(upcomingNewDivElement);
                    });
            })
            .catch(err => {
                resultElement.textContent = err
                resultElement.style.display = 'block';
                console.log('ERROR:', err);
            });

    });
}

attachEvents();