function attachGradientEvents() {
    const areaElement = document.querySelector('#gradient');
    const resultElement = document.getElementById('result');
    const a = 1
    areaElement.addEventListener('mousemove', (e) => {
            const maxWidth = e.target.clientWidth;
            let progress = Math.floor((e.offsetX / maxWidth) * 100);
            resultElement.textContent = `${progress}%`;
        }
    );
}