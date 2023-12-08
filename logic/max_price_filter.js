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

function createInput (){
    let newInput = document.createElement("input");
    newInput.setAttribute("checkbox", "")
    let parent = document.querySelector("body")

    parent.appendChild(newInput)
}

createInput();
