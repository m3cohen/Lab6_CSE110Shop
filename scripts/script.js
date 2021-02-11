// Script.js

if (localStorage.getItem('items') === null) {
  window.addEventListener('DOMContentLoaded', () => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => localStorage.setItem('items', JSON.stringify(data)));
  });
}

let array = JSON.parse(localStorage.getItem('items'));
let productList = document.getElementById('product-list');

for (let i = 0; i < array.length; i++) {
  let item = array[i];
  let product = document.createElement('product-item');
  product.setAttribute('image', item.image);
  product.setAttribute('title', item.title);
  product.setAttribute('price', item.price);
  product.setAttribute('id', item.id);
  productList.appendChild(product);
}
