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

function createCheckbox(numbers) {
    // Variables
    for (let i = 0; i < numbers.length; i++) {
        
        // DOM
        let parent = document.querySelector("body");
        let newDiv = document.createElement("div");
        let newLabel = document.createElement("LABEL");
        let newInput = document.createElement("input");
        newInput.setAttribute("type", "checkbox");
        newInput.setAttribute("id", "checkbox_" + i); // Set a unique id for each checkbox
        newLabel.setAttribute("for", "checkbox_" + i); // Set the 'for' attribute of the label to match the checkbox id
        newLabel.textContent = numbers[i] + " kr"; // Set the text content to the number and " kr"

        // Append
        parent.appendChild(newDiv);
        newDiv.appendChild(newInput);
        newDiv.appendChild(newLabel);
    }
}

// Example usage with variable numbers
let customNumbers = [500, 600, 700];
createCheckbox(customNumbers);



