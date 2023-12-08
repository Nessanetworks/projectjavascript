function render_div_container(parent) {
    let container = document.createElement("div");
    container.id = "wrapper";
    parent.appendChild(container);

    container.innerHTML = `<header id="page_top">
                            </header>
                            <main>
                                <div id="bottom_container"></div>
                            </main>`;

    return {
        header: document.querySelector("#page_top"),
        page_top: document.querySelector("#bottom_container")
    }
}