"use strict";

function render_filter_element(parent, text) {

    const container = document.createElement("div");
    parent.appendChild(container);
    container.classList.add("filter_element");

    container.innerHTML = `
                            <div class="text">${text}</div>
                            <div class="check_container">
                                <div class="check_mark"></div>
                            </div>
                            `;

    container.addEventListener("click", function () {
        container.classList.toggle("checked");
        filter_by_price();
    });
}
