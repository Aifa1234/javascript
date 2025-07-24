import {cart,addToCart} from '../data/cart.js';//module 
import { formatCurrency } from './utils/money.js';

// import{cart as myCart} from'../data/cart.js;

export const product=[{
    id:"1000",
    image:`images/products/athletic-cotton-socks-6-pairs.jpg`,
    name:`Black and Gray Athletic Cotton Socks - 6 Pairs`,
    rating:{
        star:4.5,
        count:87
    },
    priceCent:1090

},
{   id:"1001",
    image:`images/products/intermediate-composite-basketball.jpg`,
    name:`Intermediate Size Basketball`,
    rating:{
        star:4,
        count:127
    },
    priceCent:2095
},{
    id:"1002",
    image:`images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg`,
    name:`Adults Plain Cotton T-Shirt - 2 Pack`,
    rating:{
        star:4.5,
        count:56
    },
    priceCent:799
},{ 
    id:"1003",
    image:`images/products/black-2-slot-toaster.jpg`,
    name:`2-slot Toaster-Black`,
    rating:{
        star:5,
        count:2197
    },
    priceCent:1899

}];

let productHTML="";
product.forEach((item)=>{

    productHTML +=`
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${item.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${item.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${item.rating.star*10}.png">
            <div class="product-rating-count link-primary">
              ${item.rating.count}
            </div>
          </div>

          <div class="product-price">
           $${formatCurrency(item.priceCent)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select> 
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-cart"
          data-id="${item.id}">
            Add to Cart
          </button>
        </div>
    `;
});
// console.log(productHTML)
// const productList =document.querySelector(".js-product")
// productList.innerHTML=productHTML

document.addEventListener("DOMContentLoaded", () => {
  const productList = document.querySelector(".js-product");
  productList.innerHTML = productHTML;

  const cartButton=document.querySelectorAll(".js-add-cart")
  cartButton.forEach((element)=>{
  element.addEventListener("click",()=>{
  const productId=element.dataset.id
   
    addToCart(productId)
    updateCartNumber()
    
   }) 
})
});


function updateCartNumber(){
     let cartQuantity=0
    cart.forEach((item)=>{
       cartQuantity+=item.quantity 
    })

    const cartElement=document.querySelector(".js-cart-quantity")
    cartElement.innerText=cartQuantity
 
}






