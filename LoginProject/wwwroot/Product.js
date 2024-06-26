




//const addToBasket = (prod) => {

//    console.log("addToBasket");
//    const basket = JSON.parse(sessionStorage.getItem('basketArray')) || [];

//    const index = basket.findIndex(item => item.productId === prod.productId);
//    if (index !== -1) {
//        basket[index].quantity++;
//    } else {
//        prod = { ...prod, quantity: 1 };
//        basket.push(prod);
//    }

//    sessionStorage.setItem('basketArray', JSON.stringify(basket));
//    updateSum(prod.price);
//    updateCount();
//}

//// Function to remove a product from the basket
//const removeFromBasket = (productId) => {
//    console.log("removeFromBasket");
//    const basket = JSON.parse(sessionStorage.getItem('basketArray')) || [];

//    const index = basket.findIndex(item => item.productId === productId);
//    if (index !== -1) {
//        if (basket[index].quantity > 1) {
//            basket[index].quantity--;
//        } else {
//            basket.splice(index, 1);
//        }
//        sessionStorage.setItem('basketArray', JSON.stringify(basket));

//        const removedProduct = basket.find(item => item.productId === productId);
//        if (removedProduct) {
//            updateSum(-removedProduct.price);
//        }

//        updateCount(-1); // Decrease count by 1
//    } else {
//        console.warn('Product not found in the basket');
//    }
//}
//let globalSum = 0;
//// Function to update the count of items in the basket
//const updateCount = () => {
//    const currentCount = parseInt(document.getElementById('ItemsCountText').textContent) || 0;
//    const newCount = currentCount + 1;
//    document.getElementById('ItemsCountText').textContent = newCount;
//}

//// Function to update the total sum
//const updateSum = (sum) => {
//    const currentSum = parseFloat(document.getElementById('sum').textContent) || 0;
//    console.log(currentSum);
//    const newSum = currentSum + sum;
//    document.getElementById('sum').textContent = newSum.toFixed(2);
//    globalSum = newSum;
//    sessionStorage.setItem('pay', globalSum);

//}

//// Function to draw products list
//const drawProducts = (products) => {
//    const template = document.getElementById('temp-card');
//    products.forEach(product => {
//        const clone = template.content.cloneNode(true);

//        clone.querySelector('img').src = `../Images/${product.image_Url.trim()}.jpg`;
//        clone.querySelector('h1').textContent = product.productName;
//        clone.querySelector('.price').textContent = product.price;
//        clone.querySelector('.description').textContent = product.image_Url;
//        clone.querySelector('button').addEventListener('click', () => {
//            addToBasket(product);
//            console.log('Product added to cart:', product.description);
//        });

//        document.getElementById('ProductList').appendChild(clone);
//    });
//}

//// Function to fetch all products
//const getAllProduct = async () => {
//    const responseGet = await fetch('api/Product');
//    if (responseGet.ok) {
//        const dataGet = await responseGet.json();
//        console.log(dataGet);
//        drawProducts(dataGet);
//    }
//}

//// Function to draw basket items
//const drawBasket = () => {
//    const productsArr = JSON.parse(sessionStorage.getItem('basketArray')) || [];
//    const template = document.getElementById('temp-row');

//    const basketList = document.getElementById('BasketList');
//    basketList.innerHTML = ''; // Clear existing items

//    productsArr.forEach(product => {
//        const row = template.content.cloneNode(true);
//        row.querySelector(".price").innerText = product.price;
//        row.querySelector(".ii").innerText = product.quantity;
//        row.querySelector(".descriptionColumn").innerText = product.description;
//        if (product.imageUrl) {
//            row.querySelector("img").src = '../Images/' + product.imageUrl;
//        }

//        // Attach the remove event listener to the button
//        row.querySelector('.removeButton').addEventListener('click', () => {
//            removeFromBasket(product.productId);
//            drawBasket();
//        });

//        basketList.appendChild(row);
//    });
//}

////const pay = () => {

////    const sumElement = document.getElementById('sum');
////    if (sumElement && sessionStorage.getItem("sumToPay") !== null) {
////        sumElement.textContent = sessionStorage.getItem("sumToPay");
////    }
////};

////// Call updateSum function every 1 second
////setInterval(pay, 50);

////// Update immediately on load
////pay();

//// Fetch and display all products initially
//getAllProduct();

//// Draw the basket initially
//drawBasket();
//updateCount(0); // Initialize the count
///*updateSum(0); // Initialize the sum*/



let categoryArr = [];

const addToBasket = (prod) => {

    console.log("addToBasket");
    const basket = JSON.parse(sessionStorage.getItem('basketArray')) || [];

    const index = basket.findIndex(item => item.productId === prod.productId);
    if (index !== -1) {
        basket[index].quantity++;
    } else {
        prod = { ...prod, quantity: 1 };
        basket.push(prod);
    }

    sessionStorage.setItem('basketArray', JSON.stringify(basket));
    updateSum(prod.price);
    updateCount();
}

// Function to remove a product from the basket
const removeFromBasket = (productId) => {
    console.log("removeFromBasket");
    const basket = JSON.parse(sessionStorage.getItem('basketArray')) || [];

    const index = basket.findIndex(item => item.productId === productId);
    if (index !== -1) {
        if (basket[index].quantity > 1) {
            basket[index].quantity--;
        } else {
            basket.splice(index, 1);
        }
        sessionStorage.setItem('basketArray', JSON.stringify(basket));

        const removedProduct = basket.find(item => item.productId === productId);
        if (removedProduct) {
            updateSum(-removedProduct.price);
        }

        updateCount(-1); // Decrease count by 1
    } else {
        console.warn('Product not found in the basket');
    }
}
let globalSum = 0;
// Function to update the count of items in the basket
const updateCount = () => {
    const currentCount = parseInt(document.getElementById('ItemsCountText').textContent) || 0;
    const newCount = currentCount + 1;
    document.getElementById('ItemsCountText').textContent = newCount;
    sessionStorage.setItem('countItems', newCount)
}

const updateSum = async (sum) => {
    const currentSum = parseInt(document.getElementById('sum').textContent) || 0;
    const newSum = currentSum + sum;
    document.getElementById('sum').textContent = newSum;
    sessionStorage.setItem('sumToPay', newSum)
}


const getCategories = async () => {
    const responseGet = await fetch('api/Category')
    if (responseGet.ok) {
        const dataGet = await responseGet.json();
        /*categoryArr = await responseGet.json();*/
        console.log(dataGet)
        drawCategories(dataGet)
    }
}


const drawCategories = (arr) => {
    //debugger;
    const template = document.getElementById("temp-category");

    arr.forEach(category => {
        const card = template.content.cloneNode(true)
        card.querySelector('.opt').id = category.categoryId
        card.querySelector('.opt').value = category.categoryName
        card.querySelector('label').for = category.categoryName
        card.querySelector('.OptionName').textContent = category.categoryName
        card.querySelector('.opt').addEventListener("change", (event) => { filterCategories(event, category) })

        document.getElementById("categoryList").appendChild(card)
    })
}

const filterProducts = async () => {
    const maxPrice = document.getElementById("maxPrice").value;
    const minPrice = document.getElementById("minPrice").value;
    const productName = document.getElementById("nameSearch").value;
    let c = ''
    categoryArr.forEach(e => c += `&categoryIds=${e}`)
    //console.log(categoryArr[0])
    //const responseGet = await fetch(`api/product?minPrice=${minPrice}&maxPrice=${maxPrice}&description=${description}${categories}`);

    const responsePost = await fetch(`api/Product?minPrice=${minPrice}&maxPrice=${maxPrice}&desc=${productName}${c}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const dataPost = await responsePost.json();
    console.log(dataPost)
    document.getElementById("ProductList").replaceChildren();
    drawProducts(dataPost);

}

const filterCategories = async (event, category) => {

    if (event.target.checked) {
        categoryArr.push(category.categoryId)
        filterProducts();
    }
    else {
        categoryArr.splice(categoryArr.indexOf(category.categoryId), 1)
        filterProducts();
    }

}
// Function to draw products list
const drawProducts = (products) => {
    const template = document.getElementById('temp-card');
    products.forEach(product => {
        const clone = template.content.cloneNode(true);

        clone.querySelector('img').src = `../Images/${product.image_Url.trim()}.jpg`;
        clone.querySelector('h1').textContent = product.productName;
        clone.querySelector('.price').textContent = product.price;
        clone.querySelector('.description').textContent = product.imageUrl;
        clone.querySelector('button').addEventListener('click', () => {
            addToBasket(product);
            console.log('Product added to cart:', product.description);
        });

        document.getElementById('ProductList').appendChild(clone);
    });
}

// Function to fetch all products
const getAllProduct = async () => {
    const responseGet = await fetch('api/Product');
    if (responseGet.ok) {
        const dataGet = await responseGet.json();
        console.log(dataGet);
        drawProducts(dataGet);
    }
}

// Function to draw basket items
const drawBasket = () => {
    const productsArr = JSON.parse(sessionStorage.getItem('basketArray')) || [];
    const template = document.getElementById('temp-row');

    const basketList = document.getElementById('BasketList');
    basketList.innerHTML = ''; // Clear existing items

    productsArr.forEach(product => {
        const row = template.content.cloneNode(true);
        row.querySelector(".price").innerText = product.price;
        row.querySelector(".ii").innerText = product.quantity;
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
}
const pay = () => {
    const countElement = document.getElementById('ItemsCountText');
    if (countElement && sessionStorage.getItem("countItems") !== null) {
        countElement.textContent = sessionStorage.getItem("countItems");
    }
    const sumElement = document.getElementById('sum');
    if (sumElement && sessionStorage.getItem("sumToPay") !== null) {
        sumElement.textContent = sessionStorage.getItem("sumToPay");
    }
};

// Update immediately on load
// Call updateSum function every 1 second

setInterval(pay, 50);


pay();

getCategories();
getAllProduct();

// Draw the basket initially
//drawBasket();
//updateCount(0); // Initialize the count
//updateSum(0); // Initialize the sum

