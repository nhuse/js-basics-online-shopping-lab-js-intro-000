var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let itemObject = {
    "itemName": item,
    "itemPrice": Math.floor(Math.random() * 100) + 1
  };
  cart.push(itemObject);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  let cartString = 'In your cart, you have ';
  if(cart.length === 0) {
    return 'Your shopping cart is empty.';
  }
  if (cart.length === 1) {
    return cartString + `${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }

  if(cart.length > 1) {
    for (var i = 0; i < cart.length; i++) {
      if(i === cart.length-1) {
        cartString = cartString + `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
      }
      else {
        cartString = cartString + `${cart[i].itemName} at $${cart[i].itemPrice}, `;
      }
    }
  }
  return cartString;
}

function total() {
  let total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  for(let i = 0; i < cart.length; i++) {
    if(cart[i].itemName === item) {
      cart.splice(i, 1);
      return cart;
    }
  }
  return 'That item is not in your cart.';
}

function placeOrder(cardNumber) {
  if(cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  }
  let confirmationStr = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
  cart = [];
  return confirmationStr;
}
