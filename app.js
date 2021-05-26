//Generate 4 digit pin
const pinGenBtn = document.getElementById("generate-btn");
let pinInput = document.getElementById("generated-pin");
pinGenBtn.addEventListener("click", () => {
  let pin = Math.floor(100000 + Math.random() * 900000)
    .toString()
    .substring(0, 4);
  pinInput.value = parseInt(pin);
});

//Number pad
let buttons = document.getElementsByClassName("button");
let myPinInput = document.getElementById("my-pin");
let screenValue = "";
for (let i = 0; i < buttons.length; i++) {
  AllButtons = buttons[i];
  AllButtons.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "C") {
      myPinInput.value = "";
      screenValue = "";
      myPinInput.value += buttonText;
      myPinInput.value = screenValue;
      document.querySelector(".wrong").style.display = "none";
      document.querySelector(".success").style.display = "none";
    } else if (buttonText == "<") {
      screenValue = myPinInput.value.slice(0, -1);
      myPinInput.value = screenValue;
      if (myPinInput.value == "") {
        document.querySelector(".wrong").style.display = "none";
        document.querySelector(".success").style.display = "none";
      }
    } else {
      if (myPinInput.value.length <= 3) {
        myPinInput.value += buttonText;
      }
    }
  });
}
//match the pin
let submitBtn = document.getElementById("submit");
let trail = document.querySelector(".action-left");
let count = 0;
submitBtn.addEventListener("click", () => {
  GenPin = pinInput.value;
  myPin = myPinInput.value;
  if (GenPin !== myPin) {
    document.querySelector(".wrong").style.display = "block";
    document.querySelector(".success").style.display = "none";

    count++;
    if (count == 1) {
      trail.innerText = "2 time left";
    } else if (count == 2) {
      trail.innerText = "1 time left";
    } else if (count == 3) {
      trail.innerText = "Trail finished, Refresh the browser";
      /*   submitBtn.disabled = true;
          submitBtn.innerText = "Disabled"; */
    }
  } else {
    document.querySelector(".success").style.display = "block";
    document.querySelector(".wrong").style.display = "none";
    count = 0;
    trail.innerText = "3 try left";
  }
});
