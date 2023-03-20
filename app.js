"use strict";

window.addEventListener("load", initApp);

function initApp() {
  //event listener for select on HTML
  document
    .querySelector("#select-color-mode")
    .addEventListener("change", modeSelected);

  detectUserPreference();
}

// modeSelected called when #select-color-mode changes value (the user select color mode)
function modeSelected() {
  console.log("New color mode selected");

  const selectedColorMode = this.value;

  console.log(selectedColorMode);

  changeMode(selectedColorMode);

  saveUserColorMode(selectedColorMode);
}

function changeMode(mode) {
  const bodyElement = document.querySelector("body");

  if (mode === "dark") {
    bodyElement.classList.add("dark-mode");
  } else {
    bodyElement.classList.remove("dark-mode");
  }

  if (mode === "yellow") {
    bodyElement.classList.add("yellow-mode");
  } else {
    bodyElement.classList.remove("yellow-mode");
  }

  if (mode === "pink") {
    bodyElement.classList.add("pink-mode");
  } else {
    bodyElement.classList.remove("pink-mode");
  }

  console.log(mode);
}

function saveUserColorMode(mode) {
  localStorage.setItem("userColorMode", mode);
}

function readUserColorMode() {
  const userColorMode = localStorage.getItem("userColorMode", mode);
  return userColorMode;
}

function detectUserPreference() {
  const modeFromLocalStorage = readUserColorMode();
  console.log(modeFromLocalStorage);
  changeMode(modeFromLocalStorage);
}
