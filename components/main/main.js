
"use strict"

function render_bottom_container (shoes) {

    const main = document.querySelector("main");
    const bottom_container = document.querySelector("#bottom_container");
    bottom_container.innerHTML = "";
    
    const bottom_container_popup = document.createElement("div");

    for (const shoe of shoes) {
        
        const country = array_find(COUNTRIES, function(country){return country.id === shoe.country_id;});
        const kind = array_find(KINDS, function (kind){return kind.id === shoe.kind_id;});

        // Skapar vanlig div: 

        const bottom_div = document.createElement("div");
        bottom_container.appendChild(bottom_div);
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
            document.body.style.overflow = "hidden";
            
            bottom_container_popup.innerHTML = ` 
            <div>
                <img src="media/sko_bilder/${shoe.file_name}">
            </div>
            <div>
                <h1>${shoe.name}</h1>
                <p>${kind.name}</p>
                <p>${country.name}</p>
                <p id="shoe_price">${shoe.price} kr</p>
                <div id="reviews">
                    
                </div> 
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
                document.body.style.overflow = "scroll";
            });
        });
    }
    //main.appendChild(bottom_container);
}


function render_reviews(shoe){
    let review_container = document.querySelector("#reviews");
    let container = document.querySelector("#header_container");
    let sum_score = 0;



    for(let review of filter_review(shoe)){

        let score = review.score;
        sum_score = review.score + sum_score;

        if(review.rev === ""){
            review.rev = "Ingen Kommentar";
        }

        switch(score){
            case 1: 
                score = "&starf;"
                break;
            case 2:
                score = "&starf; &starf;"
                break;
            case 3:
                score =  "&starf; &starf; &starf;"
                break;
            case 4:
                score =  "&starf; &starf; &starf; &starf;"
                break;
            case 5:
                score =  "&starf; &starf; &starf; &starf; &starf;"
                break;
        }

        review_container.innerHTML += ` <div class="review">    
                                            <p>${score}</p><p>${review.rev}</p>
                                        </div>`;
    }

    let average_score = sum_score / filter_review(shoe).length;
    let average_score_str = average_score.toString();


    let div_dom = document.createElement("div");
    review_container.appendChild(div_dom);
    div_dom.innerHTML = `<h2>OMDÖMEN</h2>
                        <h3>Genomsnittligt omdöme: ${average_score_str.substring(0, 4)}</h3>`;



}