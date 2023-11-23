function render_knappen(parent){

    let button_dom = document.createElement("button");
    parent.appendChild(button_dom);
    button_dom.textContent = "Red button";

    button_dom.addEventListener("click", function(){
        
        parent.classList.toggle("redBack");
    });
}