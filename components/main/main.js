
function render_bottom_container (shoes) {

    const bottom_container = document.querySelector("#bottom_container");
    
    for (i = 0; i < shoes.length; i++) {

        bottom_container.innerHtml = `
    
        <div>
            <img src="media/sko_biler${shoes[i].file_name}">
            <p>${shoes[i].name}</p>
            <p>${shoes[i].price}</p>
        </div>
        `
    }

    main.appendChild(bottom_container);
}