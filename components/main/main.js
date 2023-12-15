
"use strict"

function render_bottom_container (shoes) {

    const main = document.querySelector("main");
    const bottom_container = document.querySelector("#bottom_container");
    
    const bottom_container_popup = document.createElement("div");

    for (const shoe of shoes) {
        
        const country = array_find(COUNTRIES, function(country){return country.id === shoe.country_id;});
        const kind = array_find(KINDS, function (kind){return kind.id === shoe.kind_id;});
        const review = array_find(REVIEWS, function(review){return review.shoe_id === shoe.id});
        const score = array_find(REVIEWS, function(review){return review.score === shoe.id});

        // Skapar vanlig div: 

        const bottom_div = document.createElement("div");
        bottom_div.classList.add("bottom_div");

        bottom_div.innerHTML = `
            
            <img src="media/sko_bilder/${shoe.file_name}">
            <h1>${shoe.name}</h1>
            <p>${kind.name}</p>
            <p>${country.name}</p>
            <p id="shoe_price">${shoe.price} kr</p>
        `;
        
        // Öppnar popup container
        
        bottom_div.addEventListener("click", function() {
            bottom_container_popup.classList.add("bottom_container_popup");
            
            bottom_container_popup.innerHTML = ` 
            <div>
                <img src="media/sko_bilder/${shoe.file_name}">
            </div>
            <div>
                <h1>${shoe.name}</h1>
                <p>${kind.name}</p>
                <p>${country.name}</p>
                <p id="shoe_price">${shoe.price} kr</p>
                <div> 
                    <h2>Reviews</h2>
                    <p>"${review.rev}"</p>
                    <h3>Rating</h3>
                    <p>${review.score}/5</p>
                </div> 
            </div>
            <button class="popup_close_button">X</button>
        `;
        
        // Stänger popup container 

        bottom_container_popup.addEventListener("click", function () {
            bottom_container.removeChild(bottom_container_popup);
        });

        bottom_container.appendChild(bottom_container_popup);
    });

    bottom_container.appendChild(bottom_div);
}

main.appendChild(bottom_container);
}