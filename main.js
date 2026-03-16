function computeTotal(){
    // get quantity value
  let qty = document.getElementById("qty").value;
    // calculate subtotal
    let subtotal = qty * price;
    // calculate total
    let total = subtotal + adminFee;
    // display results
    document.getElementById("subtotal").innerHTML = subtotal;
    document.getElementById("total").innerHTML = total;