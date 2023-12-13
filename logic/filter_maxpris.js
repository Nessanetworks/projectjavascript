"use strict";

function filter_by_price(){
    let checked_country = document.querySelectorAll(".price_option_container .checked .text");
    let checked_textContent_array = array_map(checked_country, function(element){
        return element.textContent;
    });
    let result = [];
    for(let number of checked_textContent_array){
        for(let shoe of SHOES){
            if(shoe.price <= number){
                result.push(shoe);
            }
        }
    }
    console.log(result);

function filter_review(shoe){
    let array_shoe_review = array_filter(REVIEWS, function(review){
        return shoe.id === review.shoe_id;
    });

    
}

}



