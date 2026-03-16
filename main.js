function verbnoun{
}
value= 0 min= 0
//variable delcaration
const ticketprice= 250;
const adminfee= 50.00;
let ticketqty= number (document.getElementByIddocumment)().value
let subtotal= number
onclick="vernoun"
let toalprice=number

function showBrands() {
  brandPanel.style.display = "block";
  storePanel.style.display = "none";

  calculateDiscount();
}

function showStore() {
  storePanel.style.display = "block";
  brandPanel.style.display = "none";
}

function calculateDiscount() {
  const budget = Number(budgetInput.value);

  // Example: 20% discount
  const discount = budget * 0.2;

  discountValue.textContent = discount.toFixed(2);
}