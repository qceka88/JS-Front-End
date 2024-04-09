function solution() {
    const baseURL = 'http://localhost:3030/jsonstore/advanced/articles';

    const sectionElement = document.getElementById('main');

    fetch(baseURL + '/list')
        .then(response => response.json())
        .then(data => {
            for (const record of Object.values(data)) {
                const newDiv = document.createElement('div');
                newDiv.classList.add('accordion');

                newDiv.innerHTML = `
                            <div class="head">
                                <span>${record.title}</span>
                                <button class="button" id="${record._id}">More</button>
                            </div>
                            <div class="extra">
                                <p></p>
                            </div>
                            `

                seeDetail(newDiv);
                sectionElement.appendChild(newDiv);
            }
        })

    function seeDetail(cardElement) {
        const btnElement = cardElement.querySelector(`button`);

        btnElement.addEventListener('click', (e) => {
            const articleDetailURL = `${baseURL}/details/${btnElement.id}`;

            fetch(articleDetailURL)
                .then(response => response.json())
                .then(data => {
                    const contentContainer = cardElement.querySelector('.extra');
                    const pElement = contentContainer.querySelector('p');

                    if (btnElement.textContent === 'More') {
                        contentContainer.style.display = 'block';
                        pElement.textContent = data.content;
                        btnElement.textContent = 'Less';

                    } else if (btnElement.textContent === 'Less') {
                        contentContainer.style.display = 'none';
                        pElement.textContent = '';
                        btnElement.textContent = 'more';

                    }
                })
                .catch(e => console.log('ERROR:', e))
        });
    }
}

solution();