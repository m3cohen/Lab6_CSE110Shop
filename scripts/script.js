// Script.js

window.addEventListener('DOMContentLoaded', () => {
  let url = 'https://fakestoreapi.com/products';
  let response = await fetch(url);
  
  myStorage = window.localStorage;
  let array = localStorage.getItem(response);
  
  
});
