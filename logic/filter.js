"use strict";

function filter(shoe_array, x, y) {
    let new_array = [];
    for (let shoe of shoe_array) {
        if (shoe.price >= x && shoe.price <= y) {
            new_array.push(shoe);
        }
    }
    return new_array;
}
console.log(filter(SHOES, 500, 1000));







