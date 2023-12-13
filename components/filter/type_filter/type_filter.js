"use strict";

function render_type_filters(parent) {

    const container = document.createElement("div");
    container.id = "type_filters";
    parent.append(container);

    for (let kind of KINDS) {
        const type_container = document.createElement("div");
        container.append(type_container);
        type_container.classList.add("type_container");

        type_container.innerHTML = `
        <p>${kind.name}</p>
        <div class="type_container"></div>
        `;
    }
}



function render_filter_box(parent, text) {

    const container = document.createElement("div");
    parent.appendChild(container);
    container.classList.add("filter_container");

    const type_container = document.createElement("div");
    container.appendChild(type_container);

    for (let kind of KINDS) {
        const check_container = document.createElement("div");
        container.append(check_container);
        check_container.classList.add("type_container");

        check_container.textContent = `${kind.name}`;

        type_container.innerHTML = `
        <div>TYP</div>
        <p>${kind.name}</p>
        <div class="type_container"></div>
        `;
    }
}
