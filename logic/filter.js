"use strict";

function filter_by_country(){
    let checked_country = document.querySelectorAll(".country_option_container .checked .text");

    let checked_textContent_array = array_map(checked_country, function(element){
        return element.textContent;
    });

    let countriesArray = array_map(checked_textContent_array, function(name){
        return array_find(COUNTRIES, function(country){
            return name === country.name;
        }); 
    });

    let countryId = array_map(countriesArray, function(country){
        return country.id;
    });

    let program = array_filter(SHOES, function(shoe){
        return countryId.includes(shoe.country_id);
    });

    console.log(program);

    return program;  
}

function filter_review(shoe){
    let array_shoe_review = array_filter(REVIEWS, function(review){
        return shoe.id === review.shoe_id;
    });

    
}





