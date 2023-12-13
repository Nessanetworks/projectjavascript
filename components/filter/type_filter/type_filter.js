"use strict";
function render_type_filters(parent) {
    const type_container = document.createElement("div");
    parent.append(type_container);

    const type_name_container = document.createElement("div");
    type_container.appendChild(type_name_container);
    type_name_container.textContent = "TYP";

    const type_option_container = document.createElement("div");
    type_container.appendChild(type_option_container);
    type_option_container.classList.add("type_option_container");

    for (let kind of KINDS) {
        render_filter_element(type_option_container, kind.name);
    }
}