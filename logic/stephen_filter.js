"use strict";

stephen_filter(SHOES, 0, 1000); // kalla på funktion

function stephen_filter(shoe_array, x, y) { // shoe_array = shoes, x = 0, y = 100
    let new_array = []; // skapa en tom array där den filtrerade arrayen ska vara
    for (let shoe of shoe_array) { // går igenom varje element i vår SHOES array
        if (shoe.price >= x && shoe.price <= y) { // om shoe.price är större än x(0) och shoe.price är mindre än y(1000)
            new_array.push(shoe); // så lägger vi till skon i den nya arrayen OBS: shoe = SHOES
        }
    }
    return new_array; // returnera den nya arrayen
}

const SHOES = [
    { "id":2,"name":"Black Nick","price":709,"kind_id":3,"country_id":3,"file_name":"black_nick_sneakers.jpg"},
];


