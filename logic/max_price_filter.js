"use strict";

function max_price_500(shoe_array, max_price) {
    let new_array = [];
    for (let shoe of shoe_array) {
        if (shoe.price <= max_price) {
            new_array.push(shoe);
        }
    }
    return new_array;
};
console.log(max_price_500(SHOES, 500,));

function  max_price_600(shoe_array, max_price) {
    let new_array = [];
    for (let shoe of shoe_array) {
        if (shoe.price <= max_price) {
            new_array.push(shoe);
        }
    }
    return new_array;
};
console.log(max_price_600(SHOES, 600,));


function  max_price_700(shoe_array, max_price) {
    let new_array = [];
    for (let shoe of shoe_array) {
        if (shoe.price <= max_price) {
            new_array.push(shoe);
        }
    }
    return new_array;

};
console.log(max_price_700(SHOES, 700,));

function createCheckbox (){
    //Variables
    let amountOfCheckBoxes = 0;
    let maxAmountOfCheckBoxes = 3;

    for (;amountOfCheckBoxes < maxAmountOfCheckBoxes; amountOfCheckBoxes++){ //vet ej varför semi colon fungerar så här men ok

    //DOM
    let parent = document.querySelector("body");
    let newDiv = document.createElement("div");
    let newParagraph  = document.createElement("p"); newParagraph.textContent = 500;
    let newInput = document.createElement("input"); newInput.setAttribute("type", "checkbox");
    
    //apend
    parent.appendChild(newDiv);
    newDiv.appendChild(newParagraph);
    newDiv.appendChild(newParagraph);
    newDiv.appendChild(newInput);
    };

}

createCheckbox();
