"use strict";

function filter_programmes()
{
	let selected_programmes = SHOES;
	
	if (any_filter_checked("country"))
	{
		selected_programmes = filter_by_country(selected_programmes);
	}

	if (any_filter_checked("type"))
	{
		selected_programmes = filter_by_type(selected_programmes);
	}

	if (any_filter_checked("price"))
	{
		selected_programmes = filter_by_maxprice(selected_programmes);
	}

	return selected_programmes;
}

function any_filter_checked (filter_kind)
{
    const checked_filters = document.querySelectorAll(`.${filter_kind}_option_container .checked`);
    return checked_filters.length > 0;
}


function filter_by_maxprice(program) {
    let checked_price = document.querySelectorAll(".price_option_container .checked .text");
    let checked_textContent_array = array_map(checked_price, function (element) {
        return element.textContent;
    });
    let result = [];
    for (let number of checked_textContent_array) {
        for (let shoe of program) {
            if (shoe.price <= number) {
                result.push(shoe);
            }
        }
    }
    return result;
}


function filter_by_type(program) {

    let checked_kind = document.querySelectorAll(".type_option_container .checked .text");
  
    let checked_textContent_array = array_map(checked_kind, function (element) {
      return element.textContent;
    });
  
    let kindsArray = array_map(checked_textContent_array, function (name) {
      return array_find(KINDS, function (kind) {
        return name === kind.name;
      });
    });
  
    let kindId = array_map(kindsArray, function (kind) {
      return kind.id;
    });
  
    program = array_filter(program, function (shoe) {
      return kindId.includes(shoe.kind_id);
    });
    return program;
}

function filter_by_country(program){
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

    program = array_filter(program, function(shoe){
        return countryId.includes(shoe.country_id);
    });
    return program;  
}


function filter_review(shoe){
    let array_shoe_reviews = array_filter(REVIEWS, function(review){
        return shoe.id === review.shoe_id;
    });

    return array_shoe_reviews;
}





