// menu toggle

var MenuItems = document.getElementById("menuItems");

MenuItems.style.maxHeight="0px";

function menutoggle() {
 if(MenuItems.style.maxHeight == "0px")
 {
  MenuItems.style.maxHeight = "190px";
 }
 else
 {
  MenuItems.style.maxHeight = "0px";
 }
}

// 
// Registration/Login toggle

var loginForm = document.getElementById("loginForm");
var regForm = document.getElementById("regForm");
var indicator = document.getElementById("indicator");

console.log(loginForm);

function register(){
 regForm.style.transform = "translateX(0px)";
 loginForm.style.transform = "translateX(0px)";
 indicator.style.transform = "translateX(140px)";
}
function login(){
 regForm.style.transform = "translateX(300px)";
 loginForm.style.transform = "translateX(300px)";
 indicator.style.transform = "translateX(0px)";
}




// Product detail image change on click

// 1a forma, trabaja pero cuando hay mas codigo se loquea
// var productImg = document.getElementById("product-img");
//       var smallImg = document.getElementsByClassName("small-img");

//       smallImg[0].onclick = function () {
//         productImg.src = smallImg[0].src;
//       };
//       smallImg[1].onclick = function () {
//         productImg.src = smallImg[1].src;
//       };
//       smallImg[2].onclick = function () {
//         productImg.src = smallImg[2].src;
//       };
//       smallImg[3].onclick = function () {
//         productImg.src = smallImg[3].src;
//       };


// 2da forma,  trabaja
// mainImg = document.getElementById("product-img");
//       thumb1 = document.getElementById("thumb-1");
//       thumb2 = document.getElementById("thumb-2");
//       thumb3 = document.getElementById("thumb-3");
//       thumb4 = document.getElementById("thumb-4");

//       thumb1.addEventListener("click", function () {
//         mainImg.src = thumb1.src;
//       });
//       thumb2.addEventListener("click", function () {
//         mainImg.src = thumb2.src;
//       });
//       thumb3.addEventListener("click", function () {
//         mainImg.src = thumb3.src;
//       });
//       thumb4.addEventListener("click", function () {
//         mainImg.src = thumb4.src;
//       });

// 3a forma, la mas corta
const change = (src) => {
        document.getElementById("product-img").src = src;
      };