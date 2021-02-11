// product-item.js


class ProductItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }

  connectedCallback() {

    let product = document.createElement('li');
    let image = document.createElement('img');
    let title = document.createElement('p');
    let price = document.createElement('p');
    let button = document.createElement('button');

    product.setAttribute('class', 'product');
    image.setAttribute('src', this.getAttribute('image'));
    title.textContent = this.getAttribute('title');
    title.setAttribute('class', 'title');
    price.textContent = '$' + this.getAttribute('price');
    price.setAttribute('class', 'price');

    let id = this.getAttribute('id');
    let cartCount = document.getElementById('cart-count');
    if(localStorage.getItem(id)) {
      button.textContent = 'Remove from Cart';
      cartCount.setAttribute('textContent', parseInt(cartCount.textContent++));
    } else {
      button.textContent = 'Add to Cart';
    }

    button.onclick = function() {
      if(button.textContent == 'Add to Cart') {
        cartCount.setAttribute('textContent', parseInt(cartCount.textContent++));
        button.textContent = 'Remove from Cart';
        localStorage.setItem(id, id);
      } else {
        cartCount.setAttribute('textContent', parseInt(cartCount.textContent--));
        button.textContent = 'Add to Cart';
        localStorage.removeItem(id);
      }

    };

    let style = document.createElement('style');
    style.textContent = `
    .price {
      color: green;
      font-size: 1.8em;
      font-weight: bold;
      margin: 0;
    }

    .product {
      align-items: center;
      background-color: white;
      border-radius: 5px;
      display: grid;
      grid-template-areas:
      'image'
      'title'
      'price'
      'add';
      grid-template-rows: 67% 11% 11% 11%;
      height: 450px;
      filter: drop-shadow(0px 0px 6px rgb(0,0,0,0.2));
      margin: 0 30px 30px 0;
      padding: 10px 20px;
      width: 200px;
    }

    .product > button {
      background-color: rgb(255, 208, 0);
      border: none;
      border-radius: 5px;
      color: black;
      justify-self: center;
      max-height: 35px;
      padding: 8px 20px;
      transition: 0.1s ease all;
    }

    .product > button:hover {
      background-color: rgb(255, 166, 0);
      cursor: pointer;
      transition: 0.1s ease all;
    }

    .product > img {
      align-self: center;
      justify-self: center;
      width: 100%;
    }

    .title {
      font-size: 1.1em;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .title:hover {
      font-size: 1.1em;
      margin: 0;
      white-space: wrap;
      overflow: auto;
      text-overflow: unset;
    }`;

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(product);
    product.appendChild(image);
    product.appendChild(title);
    product.appendChild(price);
    product.appendChild(button);
  }
}

customElements.define('product-item', ProductItem);
