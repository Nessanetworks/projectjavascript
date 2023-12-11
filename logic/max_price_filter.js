/* Todo
Göra parameter variabel
Koppla filter till knapparna


*/


"use strict";

function filter_price(shoe_array, max_price) { 
    let new_array = [];
    for (let shoe of shoe_array) {
        if (shoe.price <= max_price) {
            new_array.push(shoe);
        }
    }
    return new_array;
};
console.log(filter_price(SHOES, 500,));

/* function  max_price_600(shoe_array, max_price) {
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
console.log(max_price_700(SHOES, 700,)); */

function createCheckbox(numbers, shoe_array) {

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

        (function (max_price) {
            newInput.addEventListener("change", function () {
                handleCheckboxChange(max_price, shoe_array, newInput);
            });
        })(numbers[i]);

        // Append
        parent.appendChild(newDiv);
        newDiv.appendChild(newInput);
        newDiv.appendChild(newLabel);
    }
}

function handleCheckboxChange(max_price, shoe_array, checkbox) {
    // Check if the checkbox is checked
    if (checkbox.checked) {
        // If checked, filter the array based on the max_price
        let filteredShoes = filter_price(shoe_array, max_price);
        console.log(filteredShoes);
    } else {
        // If not checked, show all shoe prices
        console.log(shoe_array);
    }
}
// Example usage with variable numbers
let customNumbers = [500, 600, 700];
createCheckbox(customNumbers, SHOES);



