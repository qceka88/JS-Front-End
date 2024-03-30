function solve() {
    const outputElement = document.querySelector('textarea');
    const addBtnElements = Array.from(document.querySelectorAll('.product .add-product'));
    const checkoutBtnElement = document.querySelector('.shopping-cart > button');

    let cart = [];

    for (const button of addBtnElements) {
        button.addEventListener('click', (e) => {
            const productElement = e.target.parentElement.parentElement;

            const price = Number(productElement.querySelector('.product-line-price').textContent);
            const name = productElement.querySelector('.product-title').textContent;

            const purchasedProduct = {'name': name, 'price': price};

            cart.push(purchasedProduct)
            outputElement.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
        });
    }

    checkoutBtnElement.addEventListener('click', (e) => {
        const allProducts = cart.reduce((acc, p) => {
            const productName = p.name;
            if (!acc.includes(productName)) {
                acc.push(productName);
            }
            return acc;
        }, []).join(', ');
        const totalSum = cart.reduce((acc, v) => acc + v.price, 0).toFixed(2);

        outputElement.textContent += `You bought ${allProducts} for ${totalSum}.`;

        checkoutBtnElement.disabled = true;
        addBtnElements.forEach(a => a.disabled = true);
    });
}