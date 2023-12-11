"use strict"

function render_bottom_container (shoes) {

    const main = document.querySelector("main");
    const bottom_container = document.querySelector("#bottom_container");
        
    for (let i = 0; i < shoes.length; i++) {
    bottom_container.innerHTML = `
    
        <div>
            <img src="media/sko_bilder${shoes.file_name}">
            <h1>${shoes.name}</h1>
            <p>Country</p>
            <p>${shoes.price}</p>
        </div>`;
        
    }

    main.appendChild(bottom_container);
}