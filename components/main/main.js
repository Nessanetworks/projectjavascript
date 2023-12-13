"use strict"

function render_bottom_container (shoes) {

    const main = document.querySelector("main");
    const bottom_container = document.querySelector("#bottom_container");
        
    for (const shoe of shoes) {
        const bottom_div = document.createElement("div");
        bottom_div.classList.add("bottom_div");
    bottom_div.innerHTML = `
            
            <img src="media/sko_bilder/${shoe.file_name}">
            <h1>${shoe.name}</h1>
            <p>Country</p>
            <p>${shoe.price}</p>
        `;
        bottom_container.appendChild(bottom_div);
    }

    main.appendChild(bottom_container);
}
