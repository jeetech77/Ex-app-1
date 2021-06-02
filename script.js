const textDiv=document.querySelector(".container");
const btnIncrease=document.querySelector(".btn-increase");
btnIncrease.addEventListener('click',()=>{
    var currentFontSize = window.getComputedStyle(textDiv).fontSize;
    currentFontSize=parseInt(currentFontSize)  // Changing  value into Integer
    currentFontSize+=2; // Increasing font size by 2px
    textDiv.style.fontSize=`${currentFontSize}px`; // Setting font size using template-literal
    console.log(currentFontSize);
})