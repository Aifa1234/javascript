export let cart=JSON.parse(localStorage.getItem('cart'));
if(!cart){
   cart= [{
    productId:"1000",
    quantity:2,
    deliveryOptionId:'1'
    },
    {productId:"1001",
    quantity:3,
    deliveryOptionId:'2'
    }
];}


//  step
// 1-export
// 2-import
// 3-change type to module

function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));

}

export function addToCart(productId){

    let matchingItem;
   cart.forEach((item)=>{
    if(item.productId===productId){
        matchingItem=item
    }
    });
    if (matchingItem){
        matchingItem.quantity+=1
    }
    else{
        cart.push({
            productId:productId,
            quantity:1,
            deliveryOPtionId:"1"
        });
    }
    saveToStorage();
}

//create a new array
//loop through cart
//add to array except given productId
export function removeFromCart(productId){
 const newCart=[];
 
 cart.forEach((cartItem)=>{
  if(cartItem.productId!==productId){
    newCart.push(cartItem)
  }
 })
 cart=newCart
 saveToStorage();
}
