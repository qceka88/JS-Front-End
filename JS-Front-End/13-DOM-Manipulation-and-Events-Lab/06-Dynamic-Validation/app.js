function validate() {
    const inputElement = document.getElementById('email');

    inputElement.addEventListener('change', (e) => {
        const element = e.target;

        const check = /[a-zA-Z0-9]+@[a-zA-Z0-9]+[.][a-zA-Z0-9]+/g.test(element.value);
        if (!check) {
            element.classList.add('error');
        } else {

            element.classList.remove('error');
        }
    })
}