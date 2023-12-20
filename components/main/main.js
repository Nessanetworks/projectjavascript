
"use strict"

function render_bottom_container (shoes) {

    const bottom_container = document.querySelector("#bottom_container");
    bottom_container.innerHTML = "";
    
    const bottom_container_popup = document.createElement("div");

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
            <p id="shoe_price">${shoe.price} kr</p>
        `;
        
        // Öppnar popup container
        
        bottom_div.addEventListener("click", function() {
            bottom_container_popup.classList.add("bottom_container_popup");
            bottom_container.appendChild(bottom_container_popup);
            
            bottom_container_popup.innerHTML = ` 
            <div>
                <img src="media/sko_bilder/${shoe.file_name}">
            </div>
            <div>
                <h1>${shoe.name}</h1>
                <p>${kind.name}</p>
                <p>${country.name}</p>
                <p id="shoe_price">${shoe.price} kr</p>
                <div id="reviews"><h2>Reviews</h2></div> 
            </div>
        `;
            
           render_reviews(shoe);
            // Skapar button  
        
            const popup_close_button = document.createElement("button");
            popup_close_button.setAttribute("id", "popup_close_button");
            popup_close_button.textContent = "X";
            bottom_container_popup.appendChild(popup_close_button);

            // Stänger popup 

            popup_close_button.addEventListener("click", function () {
                bottom_container.removeChild(bottom_container_popup);
            });
        });

        bottom_container.appendChild(bottom_div);
    }
}


function render_reviews(shoe){
    let review_container = document.querySelector("#reviews");

    for(let review of filter_review(shoe)){

        review_container.innerHTML += ` <div class="review">
                                            <p>${review.score}/5 ${review.rev}</p>
                                        </div>`
    }
}