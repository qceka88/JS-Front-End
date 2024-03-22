function extractText() {
    let list = document.getElementById('items');
    let textArea = document.getElementById('result');

    textArea.textContent = list.innerText;
}