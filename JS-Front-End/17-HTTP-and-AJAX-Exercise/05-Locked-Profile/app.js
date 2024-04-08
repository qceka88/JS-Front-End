function lockedProfile() {
    const baseURL = 'http://localhost:3030/jsonstore/advanced/profiles';

    const mainElement = document.getElementById('main');

    fetch(baseURL)
        .then(response => response.json())
        .then(data => {
            const usersData = Object.values(data)
            for (const record of usersData) {
                const recordIndex = usersData.indexOf(record);
                const userCard = document.createElement('div');
                userCard.classList.add('profile');

                console.log(record.age)
                userCard.innerHTML = `<img src="./iconProfile2.png" class="userIcon" />
                                    <label>Lock</label>
                                    <input type="radio" name="user1Locked" value="lock" checked>
                                    <label>Unlock</label>
                                    <input type="radio" name="user1Locked" value="unlock"><br>
                                    <hr>
                                    <label>Username</label>
                                    <input type="text" name="user1Username" value="${record.username}" disabled readonly />
                                    <div class="user1Username" style="display: none">
                                        <hr>
                                        <label>Email:</label>
                                        <input type="email" name="user1Email" value="${record.email}" disabled readonly />
                                        <label>Age:</label>
                                        <input type="email" name="user1Age" value="${record.age}" disabled readonly />
                                    </div>
                                    <button>Show more</button>
                                    `;
                mainElement.appendChild(userCard);

                lockUnlock(userCard);

            }
        })

    function lockUnlock(card) {
        const buttonElement = card.querySelector('button');
        const radioElements = card.querySelectorAll('input[type=radio]');
        const extraDataElement = card.querySelector('div');

        buttonElement.addEventListener('click', (e) => {
            const choice = Array.from(radioElements).find(e => e.checked);
            if (choice.value === 'unlock') {
                if (buttonElement.textContent === 'Show more') {
                    extraDataElement.style.display = 'block';
                    buttonElement.textContent = 'Hide it'
                } else {
                    extraDataElement.style.display = 'none';
                    buttonElement.textContent = 'Show more';
                }
            }

        });
    }
}