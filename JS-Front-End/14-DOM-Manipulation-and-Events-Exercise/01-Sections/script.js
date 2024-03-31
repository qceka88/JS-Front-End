function create(words) {
    const containerElement = document.getElementById('content');

    for (const word of words) {
        const divElement = document.createElement('div');

        const pElement = document.createElement('p');
        pElement.textContent = word;
        pElement.style.display = 'none';

        divElement.appendChild(pElement);
        divElement.addEventListener('click', (e) => {
            const currentElement = e.currentTarget.querySelector('p')

            if (currentElement.style.display === 'none') {
                currentElement.style.display = 'block';
            } else {
                currentElement.style.display = 'none';
            }
        });
        containerElement.appendChild(divElement);

    }
}