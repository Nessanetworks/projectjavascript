"use strict";

function render_country_filters(parent) {

    const country_container = document.createElement("div");
    parent.append(country_container);

    const country_name_container = document.createElement("div");
    country_container.appendChild(country_name_container);
    country_name_container.textContent = "TILLVERKNINGSLAND";
    country_name_container.style.fontSize = "20px";
    country_name_container.style.paddingLeft = "5px";

    const country_option_container = document.createElement("div");
    country_container.appendChild(country_option_container);
    country_option_container.classList.add("country_option_container");

    for (let country of COUNTRIES) {
        render_filter_element(country_option_container, country.name);
    }

}