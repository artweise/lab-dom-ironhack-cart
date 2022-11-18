// ITERATION 1

function updateSubtotal(product) {
  // console.log(product);
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = product.querySelector('.subtotal span');

  const subTotalByItem = Number(price * quantity);
  // const subTotalByItem = Number(price * quantity).toFixed(2); //--> works, makes the subtotal with .00
  //BUT the Total is very strange $00.000.000.00 or with numbers when I give the quantity, Why???

  subTotal.innerHTML = subTotalByItem;

  // console.log(price);
  // console.log(quantity);
  // console.log(subTotal);

  // console.log(typeof price);
  // console.log(typeof quantity);
  // console.log(typeof subTotal);

  return subTotalByItem;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  // console.log(allProducts);
  const myProductsArray = [...allProducts];

  let sumForEachItem = 0;
  myProductsArray.forEach((element) => {
    sumForEachItem = updateSubtotal(element);
  });
  //another approach with for of loop
  // for (let element of allProducts) {
  //   totalSum += updateSubtotal(element);
  // }

  // ITERATION 3
  let totalSum = 0;
  myProductsArray.forEach((element) => {
    totalSum += updateSubtotal(element);
  });
  const total = document.querySelector('#total-value span');

  total.innerHTML = totalSum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
