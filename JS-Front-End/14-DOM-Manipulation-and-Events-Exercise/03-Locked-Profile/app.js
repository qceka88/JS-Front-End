function lockedProfile() {
    const profileElements = document.querySelectorAll('.profile');
    for (const profile of profileElements) {
        const buttonElement = profile.querySelector('button');

        buttonElement.addEventListener("click", (e) => {
            const hiddenElement = profile.querySelector('div');
            const optionsElement = profile.querySelectorAll('input[type=radio]');
            const [selected] = Array.from(optionsElement).filter(a => a.checked);

            if (selected.value === 'unlock') {
                if (buttonElement.textContent === 'Show more') {
                    hiddenElement.style.display = 'block';
                    buttonElement.textContent = 'Hide it'
                } else {
                    hiddenElement.style.display = 'none';
                    buttonElement.textContent = 'Show more';
                }
            }
        });


    }
}