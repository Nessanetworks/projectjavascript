function render_bottom_container (shoes) {

    const bottom_container = document.querySelector("#bottom_container");
    const bottom_div = document.createElement("div");

    bottom_div.innerHtml = `
    <div>
        <img src="${shoes.file_name}">
        <p>${shoes.name}</p>
        <p>${shoes.price}</p>
    </div>

    `
    
    for (i = 0; i < shoes.length; i++) {

        

    }

    bottom_container.appendChild(bottom_div);
}