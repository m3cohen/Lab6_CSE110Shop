// product-item.js

class ProductItem extends HTMLElement {
  constructor(){
    super();
    this.template = document.createElement('template');
    this.template.innerHTML = ` `;
    
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(this.template.content.cloneNode(true));
  }
  
  
  
  
  
  <!-- li class="product">
    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops" width=200>
    <p class="title">Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops</p>
    <p class="price">$109.95</p>
    <button onclick="alert('Added to Cart!')">Add to Cart</button>
 </li -->
               
}

customElements.define('product-item', ProductItem);
