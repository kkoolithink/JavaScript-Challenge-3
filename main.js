let item_price = 15.99;  
let quantity = 3;  
let total_cost = item_price * quantity;

console.log(`Total cost: $${total_cost}`);

total_cost -= 5;
console.log(`Total cost after discount: $${total_cost}`);

let tax = total_cost * 0.08;
total_cost *= tax;
console.log(`Total cost after tax: $${total_cost}`);

document.querySelector("#title").textContent = "Shopping Cart Total";
document.querySelector("#final_amount").textContent = `Final total after discount and tax: $${total_cost}`;