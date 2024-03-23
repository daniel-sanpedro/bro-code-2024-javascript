// CHECKED PROPERTY

// .checked = property that determines the checked state of an
//            HTML checkbox or radio button element

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  if (myCheckBox.checked) {
    subResult.textContent = "you are Subscribed";
  } else {
    subResult.textContent = "you are not Subscribed";
  }
  if (visaBtn.checked) {
    paymentResult.textContent = "you are paying with Visa";
  } else if (masterCardBtn.checked) {
    paymentResult.textContent = "you are paying with MasterCard";
  } else if (payPalBtn.checked) {
    paymentResult.textContent = "you are paying with PayPal";
  } else {
    paymentResult.textContent = "you are not paying";
  }
};
