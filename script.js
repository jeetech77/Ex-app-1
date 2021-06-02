const textDiv = document.querySelector(".container");
const btnIncrease = document.querySelector(".btn-increase");
const btnDecrease = document.querySelector(".btn-decrease");
btnIncrease.addEventListener('click', () => {
    let currentFontSize = window.getComputedStyle(textDiv).fontSize;
    currentFontSize = parseInt(currentFontSize)  // Changing  value into Integer
    currentFontSize += 2; // Increasing font size by 2px
    textDiv.style.fontSize = `${currentFontSize}px`; // Setting font size using template-literal
})
btnDecrease.addEventListener('click', () => {
    let currentFontSize = window.getComputedStyle(textDiv).fontSize;
    currentFontSize = parseInt(currentFontSize)  // Changing  value into Integer
    currentFontSize -= 2; // Decreaseing font size by 2px
    textDiv.style.fontSize = `${currentFontSize}px`; // Setting font size using template-literal

})