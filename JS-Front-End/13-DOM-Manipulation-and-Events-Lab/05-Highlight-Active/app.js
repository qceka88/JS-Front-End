function focused() {
    const inputElements = document.querySelectorAll('body > div > div > input');


    for (const element of inputElements) {
        element.addEventListener('focus', (e) => {
            const parent = element.parentElement;
            parent.classList.add('focused');
        });
        element.addEventListener('blur', (e) => {
            const parent = element.parentElement;
            parent.classList.remove('focused');
        });
    }
}