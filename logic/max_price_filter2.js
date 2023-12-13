"use strict"

function filter_by_maxpris(){
    let checked_maxpris = document.querySelectorAll(".price_option_container .checked . text")

    let checked_textContent_array = array_map(checked_country, function(element){
        return element.textContent;
    });

    let priceArray = array_map(checked_textContent_array, function(price){
        return array_find(SHOES, function(shoes){
            return price === shoe.price;
        }); 
    });

    console.log(program);

    return program;  

}