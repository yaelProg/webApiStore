// Function to update the total sum
const updateSum = (sum) => {
    const currentSum = parseFloat(document.getElementById('sum').textContent) || 0;
    console.log(currentSum);
    const newSum = currentSum + sum;
    document.getElementById('sum').textContent = newSum.toFixed(2);
    sessionStorage.setItem('pay', newSum);
}
//let globalPay = 0; // Declare a global variable
//let globalPay = parseFloat(sessionStorage.getItem('sumToPay')) || 0; // Initialize the global variable from sessionStorage
//const updateSum = (sum) => {
//    const currentSum = parseFloat(document.getElementById('sumToPay').textContent) || 0;
//    console.log(currentSum);
//    const newSum = currentSum + sum;
//    document.getElementById('sumToPay').textContent = newSum.toFixed(2);
//    globalPay = newSum; // Update the global variable
//    sessionStorage.setItem('sumToPay', globalPay); // Update the sessionStorage
//}
//document.addEventListener('DOMContentLoaded', () => {
//    // Initialize the globalPay variable from sessionStorage and update the displayed sum
//    let globalPay = parseFloat(sessionStorage.getItem('sumToPay')) || 0;
//    document.getElementById('sumToPay').textContent = globalPay.toFixed(2); // Update the displayed sum on page load

//    const updateSum = (sum) => {
//        const currentSum = parseFloat(document.getElementById('sumToPay').textContent) || 0;
//        console.log(currentSum);
//        const newSum = currentSum + sum;
//        document.getElementById('sumToPay').textContent = newSum.toFixed(2);
//        globalPay = newSum; // Update the global variable
//        sessionStorage.setItem('sumToPay', globalPay); // Update the sessionStorage
//    };

    // Function to draw products list
    const drawProducts = (products) => {
        const template = document.getElementById('temp-card');
        products.forEach(product => {
            const clone = template.content.cloneNode(true);

            clone.querySelector('img').src = `../Images/${product.description.trim()}.jpg`;
            clone.querySelector('h1').textContent = product.productName;
            clone.querySelector('.price').textContent = product.price;
            clone.querySelector('.description').textContent = product.description;

            clone.querySelector('button').addEventListener('click', () => {
                addToBasket(product);
                console.log('Product added to cart:', product.description);
            });

            document.getElementById('ProductList').appendChild(clone);
        });
    };

    // Function to fetch all products
    const getAllProduct = async () => {
        const responseGet = await fetch('api/Product');
        if (responseGet.ok) {
            const dataGet = await responseGet.json();
            console.log(dataGet);
            drawProducts(dataGet);
        }
    };

    // Function to draw basket items
    const drawBasket = () => {
        const productsArr = JSON.parse(sessionStorage.getItem('basketArray')) || [];
        const template = document.getElementById('temp-row');

        const basketList = document.getElementById('BasketList');
        basketList.innerHTML = ''; // Clear existing items

        productsArr.forEach(product => {
            const row = template.content.cloneNode(true);
            row.querySelector(".price").innerText = product.price;
            row.querySelector(".descriptionColumn").innerText = product.description;
            if (product.imageUrl) {
                row.querySelector("img").src = '../Images/' + product.imageUrl;
            }

            // Attach the remove event listener to the button
            row.querySelector('.removeButton').addEventListener('click', () => {
                removeFromBasket(product.productId);
                drawBasket();
            });

            basketList.appendChild(row);
        });
    };

    // Fetch and display all products initially
    getAllProduct();

    // Draw the basket initially
    drawBasket();
    updateCount(0); // Initialize the count
    updateSum(0);
}); // Initialize the sum

