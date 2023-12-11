"use strict";

function filter_by_country(){
    let checked_country = document.querySelectorAll(".country_option_container .filter_element .checked");

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

    return program;  
}

console.log(filter(SHOES, 500, 1000));

