// product-item.js

class ProductItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
  }
    connectedCallBack(){
        const product = document.createElement('li');
        const image = document.createElement('img');
        const title = document.createElement('p');
        const price = document.createElement('p');
        const button = document.createElement('button');
        
        product.setAttribute('class', 'product');
        image.setAttribute('src', this.getAttribute('image'));
        name.setAttribute('class', 'title');
        price.setAttribute('class', 'price');
        
    
    }
    
    
    let style = document.createElement('style');
    
    style.textContent = 
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
      }
    
      shadow.appendChild(style);
      shadow.appendChild(price);
      shadow.appendChild(image);
      shadow.appendChild(title);
      shadow.appendChild(button);
     
    
}

customElements.define('product-item', ProductItem);
