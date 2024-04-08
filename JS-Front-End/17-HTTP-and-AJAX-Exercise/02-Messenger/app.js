function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/messenger';

    const [nameInputElement, messageInputElement] = document.querySelectorAll('input[type=text]');
    const [sendBtnElement, refreshBtnElement] = document.querySelectorAll('input[type=button]');
    const textAreaElement = document.querySelector('#messages');

    sendBtnElement.addEventListener('click', (e) => {
        fetch(baseURL, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                author: nameInputElement.value,
                content: messageInputElement.value,
            })
        })
            .catch(err => console.log('POST ERROR:', err));
        nameInputElement.value = '';
        messageInputElement.value = '';
    });

    refreshBtnElement.addEventListener('click', (e) => {
        fetch(baseURL)
            .then(response => response.json())
            .then(data => {
                const allMessages = Object.values(data).map(m => `${m.author}: ${m.content}`);

                textAreaElement.textContent = allMessages.join('\n');
            })
            .catch(err => console.log('GET ERROR', err));
    });
}

attachEvents();