function addItem() {
    const selectElement = document.querySelector('select');

    const textElement = document.getElementById('newItemText');
    const valueElement = document.getElementById('newItemValue');
    const buttonElement = document.querySelector('article input[type=text][value=Add]');


    const newOptionElement = document.createElement('option');
    newOptionElement.textContent = textElement.value;
    newOptionElement.value = valueElement.value;

    selectElement.appendChild(newOptionElement);

    textElement.value = '';
    valueElement.value = '';
}