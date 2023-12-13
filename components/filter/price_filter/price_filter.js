"use strict";

let price_array = ["200", "500", "700", "1000"];

function render_price_filters(parent) {

    const price_container = document.createElement("div");
    parent.append(price_container);

    const price_name_container = document.createElement("div");
    price_container.appendChild(price_name_container);
    price_name_container.textContent = "MAXPRIS";

    const price_option_container = document.createElement("div");
    price_container.appendChild(price_option_container);
    price_option_container.classList.add("price_option_container");

    for (let price of price_array) {
        render_filter_element(price_option_container, price);
    }
}