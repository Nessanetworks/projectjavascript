
"use strict"

function render_bottom_container (shoes) {

    const main = document.querySelector("main");
    const bottom_container = document.querySelector("#bottom_container");
        
    for (const shoe of shoes) {
        
        const country = array_find(COUNTRIES, function(country){return country.id === shoe.country_id;});
        const kind = array_find(KINDS, function (kind){return kind.id === shoe.kind_id;});

        // Skapar vanlig div: 

        const bottom_div = document.createElement("div");
        bottom_div.classList.add("bottom_div");

        bottom_div.innerHTML = `
            
            <img src="media/sko_bilder/${shoe.file_name}">
            <h1>${shoe.name}</h1>
            <p>${kind.name}</p>
            <p>${country.name}</p>
            <p>${shoe.price}kr</p>
        `;
        bottom_container.appendChild(bottom_div);
        
        // Skapar popup div: 

        bottom_div.addEventListener("click", function() {
            const bottom_container_popup = document.createElement("div");
            bottom_container_popup.classList.add("bottom_container_popup");

            bottom_container_popup.innerHTML = ` 
            <div>
                <img src="media/sko_bilder/${shoe.file_name}">
            </div>
            <div>
                <h1>${shoe.name}</h1>
                <p>${kind.name}</p>
                <p>${country.name}</p>
                <p>${shoe.price}kr</p> 
            </div>
            <button>X</button>
        `;
            bottom_container.appendChild(bottom_container_popup);
        });

    };

    main.appendChild(bottom_container);

};

// <button onclick="closePopup()">X</button>
