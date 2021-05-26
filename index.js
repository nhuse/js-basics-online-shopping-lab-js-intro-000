var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let itemObject = {};
  itemObject.itemName = item;
  itemObject.itemPrice = (Math.random() * 100) + 1;
  cart.push(itemObject);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  let cartString = 'In your cart, you have ';
  if(cart.length === 0) {
    return 'Your shopping cart is empty.';
  }
  if(cart.length===1) {
    return cartString + `${cart[i][itemName]} at ${cart[i][price]}`.;
  }

  if(cart.length > 1) {
    for (var i = 0; i < cart.length; i++) {
      if(i === cart.length-1) {
        cartString = cartString + `and ${cart[i][itemName]} at ${cart[i][price]}.`
      }
      else {
        cartString = cartString + `${cart[i][itemName]} at ${cart[i][price]}, `;
      }
    }
  }
  return cartString;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
