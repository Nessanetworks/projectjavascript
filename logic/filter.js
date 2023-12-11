"use strict";

function renderContainer(){
    let container = document.createElement("div");
    container.classList.add("container");
    document.body.appendChild(container);
}


function renderDiv(array){
    let container = document.querySelector(".container");
    container.innerHTML = "";

    for(let element of array){

        const shoeKind = array_find(KINDS, function(obj){return element.kind_id === obj.id});
        const shoeCountry = array_find(COUNTRIES, function(obj){return element.country_id === obj.id});

        let div_dom = document.createElement("div");
        container.appendChild(div_dom);

        div_dom.innerHTML =  `<div>
                                    <div> ${element.name} </div>
                                    <div> ${element.price} :- </div>
                                    <div> ${shoeKind.name} </div>
                                    <div> ${shoeCountry.name} </div>
                                    <img src="media/sko_bilder/${element.file_name}"> 
                                </div>
                                <br>`
    }
    console.log(array);
}


//array_each(filter(SHOES, test_country), renderDiv);

function render_checkbox(array){
    for(let i = 0; i < array.length; i++){

        let container = document.createElement("div");
        container.innerHTML = `<input type="checkbox" id = "country${i}"><label for="country${i}">${array[i].name}</label>`;

        let input = container.querySelector("input");
        document.body.appendChild(container);

        let label = container.querySelector("label");

        input.addEventListener("input", function(){
            renderDiv( filter_by_country() );
        });

    }
}

render_checkbox(COUNTRIES);
renderContainer();


function filter_by_country(){
    let checked_country = document.querySelectorAll("input:checked + label");

    let checked_textContent_array = array_map(checked_country, function(element){
        return element.textContent;
    });

    let countriesArray = array_map(checked_textContent_array, function(name){
        return array_find(COUNTRIES, function(country){
            return name === country.name;
        }); 
    });

    console.log(countriesArray);

    let countryId = array_map(countriesArray, function(country){
        return country.id;
    });

    console.log(countryId);

    let program = array_filter(SHOES, function(shoe){
        return countryId.includes(shoe.country_id);
    });

    return program;  
}
