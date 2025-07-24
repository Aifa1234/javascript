import {cart,removeFromCart} from "../data/cart.js"
import{product} from "./amazon.js"
import { formatCurrency } from "./utils/money.js";
import {deliveryOption} from "../data/delivery.js"
//ESM version of library


//default export
//one in a file
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";


//named export
import{hello} from "https://unpkg.com/supersimpledev@1.0.1/hello.esm.js";
// External library load
hello()

//1-today's date
//2-add 7days
//3-display date in easy to read format


const today=dayjs()
const deliveryDate=today.add(7,'days')//parameters count and length
const readDate=deliveryDate.format(`dddd,MMMM D`)
console.log(readDate)

let cartSummary="";
cart.forEach((cartItem)=>{
    const productId=cartItem.productId

    let matchingProduct1;
    product.forEach((productItem)=>{
        if(productItem.id===productId){
           matchingProduct1=productItem 
        }
    })
   
    const deliveryOptionId=cartItem.deliveryOptionId

    let deliveryOptionOne;

    deliveryOption.forEach((option)=>{
        if(option.id===deliveryOptionId){
            deliveryOptionOne=option
        }
    })
 
   
    const deliveryDateone=today.add(deliveryOptionOne.deliveryDay,'days')

    const dateString=deliveryDateone.format("dddd,MMMM D")

   cartSummary+=`
   <div class="cart-item-container cart-item-container-${matchingProduct1.id}">
            <div class="delivery-date">
                   Delivery date: ${dateString}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct1.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct1.name}
                </div>
                <div class="product-price">
                  $${formatCurrency(matchingProduct1.priceCent)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete" data-id=${matchingProduct1.id} >
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                ${deliveryOptionHTML(matchingProduct1,cartItem)}
              </div>
            </div>
          </div>`
})


function deliveryOptionHTML(matchingProduct1,cartItem){
    let html="";
    
    deliveryOption.forEach((optionItem)=>{
        
        const deliveryDate=today.add(optionItem.deliveryDay,'days')
        const datestring=deliveryDate.format('dddd,MMMM D');


        const priceString=optionItem.priceCent===0?"FREE":`$${formatCurrency(optionItem.priceCent)} -`

        const isChecked=optionItem.id===cartItem.deliveryOptionId

        html+=
        `<div class="delivery-option">
                  <input type="radio"
                   ${isChecked?`checked`:""}
                   value="${optionItem.id}"
                   data-product-id="${optionItem.id}"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct1.id}">
                  <div>
                    <div class="delivery-option-date">
                      ${datestring}
                    </div>
                    <div class="delivery-option-price">
                     ${priceString} Shipping
                    </div>
                  </div>
        </div>
        `
    })
  return html
}
// console.log(cartSummary)
const cartHtml=document.querySelector(".js-order-summary");
cartHtml.innerHTML=cartSummary

const deleteButton=document.querySelectorAll(".js-delete")
deleteButton.forEach((link)=>{
    link.addEventListener("click",()=>{
        const productId=link.dataset.id
        removeFromCart(productId)
        // console.log(cart)

        const deleteItem=document.querySelector(`.cart-item-container-${productId}`)
        deleteItem.remove()
    })
})
