function encodeAndDecodeMessages() {
    const sendAreaElement = document.querySelector('#main div:first-of-type textarea');
    const sendBtnElement = sendAreaElement.nextElementSibling;
    const receiveAreaElement = document.querySelector('#main div:last-of-type textarea');
    const decodeBtnElement = receiveAreaElement.nextElementSibling;
    const enigma = (m, o) => m.reduce((ac, ch) => ac + String.fromCharCode(eval(`${ch.charCodeAt(0)} ${o} ${1}`)), '');

    sendBtnElement.addEventListener('click', (e) => {
        const messageAsArray = Array.from(sendAreaElement.value);
        const encodeOperator = '+';

        const encodedMsg = enigma(messageAsArray, encodeOperator);
        receiveAreaElement.value = encodedMsg;

        sendAreaElement.value = '';
    });

    decodeBtnElement.addEventListener('click', (e) => {
        const messageAsArray = Array.from(receiveAreaElement.value);
        const decodeOperator = '-';

        const decodedMsg = enigma(messageAsArray, decodeOperator);
        receiveAreaElement.value = decodedMsg;
    });
}