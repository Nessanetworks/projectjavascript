"use strict"

function render_bottom_container (shoes) {

    const main = document.querySelector("main");
    const bottom_container = document.querySelector("#bottom_container");
        
    for (const shoe of shoes) {
        
        const bottom_div = document.createElement("div");
        bottom_div.classList.add("bottom_div");

        const country = array_find(COUNTRIES, function(country){return country.id === shoe.country_id;});
        const kind = array_find(KINDS, function (kind){return kind.id === shoe.kind_id;});

    bottom_div.innerHTML = `
            
            <img src="media/sko_bilder/${shoe.file_name}">
            <h1>${shoe.name}</h1>
            <p>${kind.name}</p>
            <p>${country.name}</p>
            <p>${shoe.price}kr</p>
        `;
        bottom_container.appendChild(bottom_div);
    }

    main.appendChild(bottom_container);
}
