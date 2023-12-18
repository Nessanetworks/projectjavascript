"use strict";

function render_bottom_container(shoes) {
  const main = document.querySelector("main");
  const bottom_container = document.querySelector("#bottom_container");

  for (const shoe of shoes) {
    
    const country = array_find(COUNTRIES, function (country) {return country.id === shoe.country_id;});
    const kind = array_find(KINDS, function (kind) {return kind.id === shoe.kind_id;});
    const review = array_find(REVIEWS, function (review) {return review.id === shoe.kind_id;});
    // Skapar vanlig div:
    
    const review_result = [];

    const bottom_div = document.createElement("div");
    bottom_div.classList.add("bottom_div");

    bottom_div.innerHTML = `
        <img src="media/sko_bilder/${shoe.file_name}">
        <h1>${shoe.name}</h1>
        <p>${kind.name}</p>
        <p>${country.name}</p>
        <p id="shoe_price">${shoe.price} kr</p>
    `;

    // Öppnar popup container:
    
    bottom_div.addEventListener("click", function () {
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
                <p id="shoe_price">${shoe.price} kr</p>
                <div id="reviews"> 
                    <h1>Reviews</h1>
                    <p>"Reviews"</p>
                    <h3>Rating</h3>
                    <p>"Reviews"</p>
                </div> 
            </div>
        `;

        // Skapar button

      const popup_close_button = document.createElement("button");
      popup_close_button.id = "popup_close_button";
      popup_close_button.textContent = "X";
      bottom_container_popup.appendChild(popup_close_button);

      // Stänger popup
      popup_close_button.addEventListener("click", function () {
        bottom_container_popup.classList.add("hide");
      });

      bottom_container.appendChild(bottom_container_popup);
    });

    bottom_container.appendChild(bottom_div);
  }

  main.appendChild(bottom_container);
}