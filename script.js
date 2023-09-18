'use strict'
const elmDisplay = document.querySelector("input");
const elmButton = document.querySelectorAll(".button");

console.log(elmButton);
elmButton.forEach((item) =>{
    item.addEventListener('click', (e)=> {
        let itemText = e.target.textContent;
        if (itemText === "AC"){
            elmDisplay.value = "";
        };
        if (itemText === "DEL"){
            elmDisplay.value = display.value.slice(0,-1);
        };
        if(itemText === "="){
            elmDisplay.value = eval(display.value);
        };
        if(itemText !== "AC" && itemText !== "DEL" && itemText !== "=") {
            elmDisplay.value += itemText;
        }
    })
})