document.getElementById("increaseProduct").addEventListener("click", ()=>{
    // productAndPriceCount(true);
    productAndPriceCountAll('Count', true,"productPrice")

})

document.getElementById("decreaseProduct").addEventListener("click", ()=>{
    // productAndPriceCount(false);
    productAndPriceCountAll('Count', false,"productPrice")
})

document.getElementById("increaseProduct2").addEventListener("click", ()=>{
    productAndPriceCountAll('Count2',true,"productPrice2");
})

document.getElementById("decreaseProduct2").addEventListener("click", ()=>{
    productAndPriceCountAll('Count2',false,"productPrice2");
})


function productAndPriceCountAll(product,isIncrease,price) {
    var productCount = document.getElementById( "product"+product).value;
    var productNumber = parseInt(productCount);
    var productNewNum = productNumber;
    if (isIncrease == true) {
        productNewNum = productNumber + 1
    }
    if(isIncrease == false && productNumber>0){
        productNewNum = productNumber - 1
    }
    document.getElementById("product"+product).value = productNewNum;
    // const mobilePrice = productNewNum * 59;
    if (price == "productPrice") {
        mobilePrice = productNewNum * 1219;
    }
    if (price == "productPrice2") {
        mobilePrice = productNewNum * 59;
    }
    document.getElementById(price).innerText = mobilePrice;
    priceCalculation();
}

function priceCalculation() {
    const productNumber = inputProductNumber("productCount");
    const productNumber2 = inputProductNumber("productCount2");
    var subTotal = productNumber * 1219 + productNumber2 * 59;
    document.getElementById("subtotalPrice").innerText = subTotal;

    var tax = Math.round(subTotal * 0.1) ;
    document.getElementById("taxPrice").innerText = tax;

    var total = subTotal + tax;
    document.getElementById("totalPrice").innerText = total;

    return {subTotalValue:subTotal,TaxValue:tax,TotalValue:total };
}

function inputProductNumber(product) {
    var productCount = document.getElementById(product).value;
    var productNumber = parseInt(productCount);
    return productNumber;
}
//remove cart section
const removeItem = document.getElementById("first-remove-item");
    removeItem.addEventListener('click',()=>{

    var values =  priceCalculation()
    var subTotalValue = values.subTotalValue;
    var TaxValue = values.TaxValue;

    const productNumber = inputProductNumber("productCount");
    var productPrice = productNumber * 1219;
    var productNewPrice = subTotalValue - productPrice;
    document.getElementById("subtotalPrice").innerText = productNewPrice;
    var newTax = productPrice * 0.1;
    var newTaxPrice =Math.round(TaxValue - newTax);
    document.getElementById("taxPrice").innerText = newTaxPrice;
    var totalMainPrice = productNewPrice + newTaxPrice;
    document.getElementById("totalPrice").innerText = totalMainPrice;

    document.getElementById("first-cart-item").style.display = "none";
})
const removeItem2 = document.getElementById("second-remove-item");
    removeItem2.addEventListener('click',()=>{
    document.getElementById("second-cart-item").style.display = "none";
})
// function productAndPriceCount(isIncrease) {
//     var productCount = document.getElementById("productCount").value;
//     var productNumber = parseInt(productCount);
//     var productNewNum = productNumber;
//     if (isIncrease == true) {
//         productNewNum = productNumber + 1
//     }
//     if(isIncrease == false && productNumber>0){
//         productNewNum = productNumber - 1
//     }
//     document.getElementById("productCount").value = productNewNum;
//     const mobilePrice = productNewNum * 1219;
//     document.getElementById("productPrice").innerText ='$'+ mobilePrice;
// }
// function productAndPriceCount2(isIncrease) {
//     var productCount = document.getElementById("productCount2").value;
//     var productNumber = parseInt(productCount);
//     var productNewNum = productNumber;
//     if (isIncrease == true) {
//         productNewNum = productNumber + 1
//     }
//     if(isIncrease == false && productNumber>0){
//         productNewNum = productNumber - 1
//     }
//     document.getElementById("productCount2").value = productNewNum;
//     const mobilePrice = productNewNum * 59;
//     document.getElementById("productPrice2").innerText ='$'+ mobilePrice;
// }