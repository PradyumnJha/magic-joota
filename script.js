var array = [];
var length = 0;

    function myFunction(imgs) {
        var expandImg = document.getElementById("expandedImg");
        expandImg.src = imgs.src;
        var nameHolder = document.getElementById("nameHolder");
        nameHolder.innerHTML = imgs.alt;

        if(length>0)
        document.getElementById(array[length-1]).style.opacity="0.5";
        length = array.push(imgs.id);

        document.getElementById(array[length-1]).style.opacity="1";
  
        var priceHolder = document.getElementById("premiumPriceHolder")
        if (imgs.alt == "Men's Premium Sneaker"){
          priceHolder.innerHTML = "Price - Rs. 3499";
          var cartWomen = document.getElementById("defaultHiddenWomen")
          var cartMen = document.getElementById("defaultHiddenMen")
        cartWomen.style.display = "none";
        cartMen.style.display = "block";
        }
        else{
          priceHolder.innerHTML = "Price - Rs. 3199";
          var cartMen = document.getElementById("defaultHiddenMen")
          var cartWomen = document.getElementById("defaultHiddenWomen")
        cartMen.style.display = "none";
        cartWomen.style.display = "block";
        }
      }

price = {
    p1: 1379,
    p2: 999,
    p3: 1299,
    p4: 1486,
    p5: 832,
    p6: 2499,
    p7: 3499,
    p8: 3199
}

quantity = {
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0,
    p5: 0,
    p6: 0,
    p7:0,
    p8:0
}

var p1PriceHolder = document.getElementById("p1PriceHolder");
var p2PriceHolder = document.getElementById("p2PriceHolder");
var p3PriceHolder = document.getElementById("p3PriceHolder");
var p4PriceHolder = document.getElementById("p4PriceHolder");
var p5PriceHolder = document.getElementById("p5PriceHolder");
var p6PriceHolder = document.getElementById("p6PriceHolder");
var p7PriceHolder = document.getElementById("p7PriceHolder");
var p8PriceHolder = document.getElementById("p8PriceHolder");

var p1TotalPriceHolder = document.getElementById("p1TotalPriceHolder");
var p2TotalPriceHolder = document.getElementById("p2TotalPriceHolder");
var p3TotalPriceHolder = document.getElementById("p3TotalPriceHolder");
var p4TotalPriceHolder = document.getElementById("p4TotalPriceHolder");
var p5TotalPriceHolder = document.getElementById("p5TotalPriceHolder");
var p6TotalPriceHolder = document.getElementById("p6TotalPriceHolder");
var p7TotalPriceHolder = document.getElementById("p7TotalPriceHolder");
var p8TotalPriceHolder = document.getElementById("p8TotalPriceHolder");

var p1QuantityHolder = document.getElementById("p1QuantityHolder");
var p2QuantityHolder = document.getElementById("p2QuantityHolder");
var p3QuantityHolder = document.getElementById("p3QuantityHolder");
var p4QuantityHolder = document.getElementById("p4QuantityHolder");
var p5QuantityHolder = document.getElementById("p5QuantityHolder");
var p6QuantityHolder = document.getElementById("p6QuantityHolder");
var p7QuantityHolder = document.getElementById("p7QuantityHolder");
var p8QuantityHolder = document.getElementById("p8QuantityHolder");


function setP1() {
    p1PriceHolder.innerText = '₹' + price.p1;
    p1QuantityHolder.innerText = quantity.p1;
    p1TotalPriceHolder.innerText = '₹' + price.p1 * quantity.p1
    if (quantity.p1 == 0)
    {
        document.getElementById("p1").style.display="none";
        showButton('b1');
    }
    else {

        document.getElementById("p1").style.display = "block";
    }
}

function setP2() {
    p2PriceHolder.innerText = '₹'+ price.p2;
    p2QuantityHolder.innerText = quantity.p2;
    p2TotalPriceHolder.innerText = '₹' + price.p2 * quantity.p2;
    if (quantity.p2 == 0)
    {
        document.getElementById("p2").style.display="none";
        showButton('b2');
    }
    else
        document.getElementById("p2").style.display = "block";
}

function setP3() {
    p3PriceHolder.innerText = '₹'+ price.p3;
    p3QuantityHolder.innerText = quantity.p3;
    p3TotalPriceHolder.innerText = '₹' + price.p3 * quantity.p3
    if (quantity.p3 == 0)
    {
        document.getElementById("p3").style.display="none";
        showButton('b3');
    }
    else
        document.getElementById("p3").style.display = "block";
}

function setP4() {
    p4PriceHolder.innerText = '₹' + price.p4;
    p4QuantityHolder.innerText = quantity.p4;
    p4TotalPriceHolder.innerText = '₹' + price.p4 * quantity.p4
    if (quantity.p4 == 0)
    {
        document.getElementById("p4").style.display="none";
        showButton('b4');
    }
    else
        document.getElementById("p4").style.display = "block";
}

function setP5() {
    p5PriceHolder.innerText = '₹' + price.p5;
    p5QuantityHolder.innerText = quantity.p5;
    p5TotalPriceHolder.innerText = '₹' + price.p5 * quantity.p5
    if (quantity.p5 == 0)
    {
        document.getElementById("p5").style.display="none";
        showButton('b5');
    }
    else
        document.getElementById("p5").style.display = "block";
}

function setP6() {
    p6PriceHolder.innerText = '₹' + price.p6;
    p6QuantityHolder.innerText = quantity.p6;
    p6TotalPriceHolder.innerText = '₹' + price.p6 * quantity.p6;
    if (quantity.p6 == 0)
    {
        document.getElementById("p6").style.display="none";
        showButton('b6');
    }
    else
        document.getElementById("p6").style.display = "block";
}

function setP7() {
    p7PriceHolder.innerText = '₹' + price.p7;
    p7QuantityHolder.innerText = quantity.p7;
    p7TotalPriceHolder.innerText = '₹' + price.p7 * quantity.p7;
    if (quantity.p7 == 0)
    {
        document.getElementById("p7").style.display="none";
        showButton('defaultHiddenMen');
    }
    else
        document.getElementById("p7").style.display = "block";
}

function setP8() {
    p8PriceHolder.innerText = '₹' + price.p8;
    p8QuantityHolder.innerText = quantity.p8;
    p8TotalPriceHolder.innerText = '₹' + price.p8 * quantity.p8;
    if (quantity.p8 == 0)
    {
        document.getElementById("p8").style.display="none";
        showButton('defaultHiddenWomen');
    }
    else
        document.getElementById("p8").style.display = "block";
}

function increment(name) {
    if (name == 'p1') {
        quantity.p1 = parseInt(quantity.p1) + 1;
        setP1();
    }

    if (name == 'p2') {
        quantity.p2 = parseInt(quantity.p2) + 1;
        setP2();
    }

    if (name == 'p3') {
        quantity.p3 = parseInt(quantity.p3) + 1;
        setP3();
    }

    if (name == 'p4') {
        quantity.p4 = parseInt(quantity.p4) + 1;
        setP4();
    }

    if (name == 'p5') {
        quantity.p5 = parseInt(quantity.p5) + 1;
        setP5();
    }

    if (name == 'p6') {
        quantity.p6 = parseInt(quantity.p6) + 1;
        setP6();
    }

    if (name == 'p7') {
        quantity.p7 = parseInt(quantity.p7) + 1;
        setP7();
    }

    if (name == 'p8') {
        quantity.p8 = parseInt(quantity.p8) + 1;
        setP8();
    }
    setTotalQuantity();
    setTotalPrice();
}

function decrement(name) {
    if (name == 'p1') {
        if (quantity.p1 > 0)
            quantity.p1 = parseInt(quantity.p1) - 1;
            setP1();
    }

    if (name == 'p2') {
        if (quantity.p2 > 0)
            quantity.p2 = parseInt(quantity.p2) - 1;
            setP2();
    }

    if (name == 'p3') {
        if (quantity.p3 > 0)
            quantity.p3 = parseInt(quantity.p3) - 1;
            setP3();
    }

    if (name == 'p4') {
        if (quantity.p4 > 0)
            quantity.p4 = parseInt(quantity.p4) - 1;
            setP4();
    }

    if (name == 'p5') {
        if (quantity.p5 > 0)
            quantity.p5 = parseInt(quantity.p5) - 1;
            setP5();
    }

    if (name == 'p6') {
        if (quantity.p6 > 0)
            quantity.p6 = parseInt(quantity.p6) - 1;
            setP6();
    }

    if (name == 'p7') {
        if (quantity.p7 > 0)
            quantity.p7 = parseInt(quantity.p7) - 1;
            setP7();
    }

    if (name == 'p8') {
        if (quantity.p8 > 0)
            quantity.p8 = parseInt(quantity.p8) - 1;
            setP8();
    }

    setTotalQuantity();
    setTotalPrice();
}

const para = document.createElement("h1");
para.id = 'extra';
para.innerText = "Cart is empty! Please add items to the cart to purchase.";
para.classList.add("noItemHeading");

function setTotalQuantity(){

totalQuantity = quantity.p1 + quantity.p2 + quantity.p3 + quantity.p4 + quantity.p5 + quantity.p6 + quantity.p7 + quantity.p8;
totalQuantityHolder = document.getElementById('totalQuantityHolder');
totalQuantityHolder.innerText = totalQuantity;

if(totalQuantity == 0){
    document.getElementById('cartItemsContainer').appendChild(para);
}

else{
    if(document.getElementById('cartItemsContainer').lastChild.id == 'extra'){
    document.getElementById('cartItemsContainer').removeChild(para);
    }
}

}

function setTotalPrice(){
    totalPrice = price.p1*quantity.p1 + price.p2*quantity.p2 + price.p3*quantity.p3 + price.p4*quantity.p4 + price.p5*quantity.p5 + price.p6*quantity.p6 + price.p7*quantity.p7 + price.p8*quantity.p8 ;
    totalPriceHolder = document.getElementById('totalPriceHolder');
    totalPriceHolder.innerText = '₹'+ totalPrice;

    discount = parseInt((totalPrice*10)/100);
    discountHolder = document.getElementById("discountHolder");
    discountHolder.innerText = '₹'+ discount;

    finalPrice = totalPrice - discount;
    finalPriceHolder = document.getElementById("finalPriceHolder");
    finalPriceHolder.innerText = '₹'+ finalPrice;
}

//Disable Button


function disable(butId){
    var button = document.getElementById(butId);

    button.style.backgroundColor = "Grey";
    button.style.color = "White";
    button.style.borderColor = "black";
    button.style.pointerEvents = "none";
    button.innerHTML = "<em>Added to Cart</em>";
}

function showButton(butId){
    var button = document.getElementById(butId);

    button.style.backgroundColor = "transparent";
    button.style.color = "Black";
    button.style.borderColor = "Black";
    button.style.pointerEvents = "all";
    button.innerHTML = "Add To Cart <i class='fa-solid fa-cart-shopping'>";
}