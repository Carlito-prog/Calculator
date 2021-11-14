document.addEventListener("DOMContentLoaded", function (event) {
  var result = {
    tip: 0,
    nop: 0,
    bill: 0,
  };

  function updateResult() {
    if (result.tip !== 0 && result.bill !== 0 && result.nop !== 0) {
      console.log(result);
      let totalTip = result.bill * result.tip;
      let tipPerPerson = ((result.bill * result.tip) / result.nop).toFixed(2);
      let totalPerPerson = ((result.bill + totalTip) / result.nop).toFixed(2);
      document.getElementById("tipP").innerHTML = tipPerPerson;
      document.getElementById("totalP").innerHTML = totalPerPerson;
    }
    // if (result.tip == 0) {
    // }
    // if (result.bill == 0) {
    // }
    // if (result.nop == 0) {
    // }
    // if (resultZero) {
    //   result.tip = 0;
    //   result.bill = 0;
    //   result.nop = 0;
    // }
    // let zeroTag = document.createElement("h5");
    // let newText = (document.createTextNode = "Cant be Zero");
    // zeroTag.appendChild(newText);
    // let position = document.querySelectorAll("arl").forEach;
    // position.appendChild(zeroTag);
  }

  var resultZero = document.getElementById("reset-input");
  resultZero.addEventListener("click", function reset() {
    billInput.value = "";
    nopInput.value = "";
    customTip.value = "";
    // elements = document.getElementsByClassName("tip");
    // elements.style.backgroundColor = "rgb(39, 195, 173)";
    // document.querySelectorAll(".tip").forEach((button) => {button.style.backgroundColor = "rgb(39, 195, 173)" }
    // tip.style.backgroundColor = "rgb(39, 195, 173)";
    // document.querySelectorAll(".tip").forEach((button) => {
    // this.style.backgroundColor = "rgb(39, 195, 173)";}
    // // document
    //   .querySelectorAll(".tip")
    //   .forEach((this.style.backgroundColor = "rgb(39, 195, 173)"));
    document.getElementById("tipP").innerHTML = "0.00";
    document.getElementById("totalP").innerHTML = "0.00";
    resetColor();
  });
  const resetColor = () => {
    document.querySelectorAll(".tip").forEach((button) => {
      button.style.backgroundColor = "rgb(3, 71, 76)";
    });
  };

  var billInput = document.getElementById("bill-input");
  billInput.addEventListener(
    "input",
    (pullValue = () => {
      result.bill = Number(billInput.value);
      updateResult();
    })
  );

  var nopInput = document.getElementById("nop-input");
  nopInput.addEventListener("input", function pullValue() {
    result.nop = Number(nopInput.value);
    updateResult();
    return result.nop;
  });

  var tip = document.querySelectorAll(".tip").forEach((button) => {
    button.addEventListener("click", function pullValue(event) {
      // var buttonPressed = event.target;
      // console.log(buttonPressed);
      elements = document.getElementsByClassName("tip");
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "rgb(3, 71, 76)";
      }
      this.style.backgroundColor = "rgb(39, 195, 173)";

      result.tip = parseInt(button.textContent) / 100;

      updateResult();
    });
  });

  var customTip = document.querySelector(".tip-item-input");
  customTip.addEventListener("input", function pullValue() {
    result.tip = parseFloat(customTip.value / 100);

    updateResult();
  });
});
