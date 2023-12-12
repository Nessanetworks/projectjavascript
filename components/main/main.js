"use strict"

function render_bottom_container (shoes) {

    const main = document.querySelector("main");
    const bottom_container = document.querySelector("#bottom_container");
    
    const bottom_div = document.createElement("div");
    
    bottom_div.innerHtml = `
    
    <div>
        <img src="media/sko_biler${shoes.file_name}">
        <h1>${shoes.name}<h1>
        <p>${shoes.price}</p>
    </div>`;
    
    
    for (i = 0; i < shoes.length; i++) {
       
    }

    main.appendChild(bottom_container);
    bottom_container.appendChild(bottom_div);
}