"use strict";

function render_filter_element(parent, text) {

    const container = document.createElement("div");
    parent.appendChild(container);
    container.classList.add("filter_element");

    container.innerHTML = `<div class="text">${text}</div>
                           <div class="check_container">
                             <div class="check_mark"></div>
                           </div>`;

    container.addEventListener("click", function (event) {
        container.classList.toggle("checked");
		only_one_checked_price();
        render_bottom_container(filter_programmes());


		function only_one_checked_price(){
			let checked_node_list = document.querySelectorAll(".price_option_container .checked");
			let checked = array_map(checked_node_list, function(div){return div;});	
			let latest_check = event.currentTarget;

			if(checked.length > 1){
				for(let i = 0; i < checked.length; i++){
					if(checked[i] === latest_check){
						checked.splice(i, 1);
		
						for(let div of checked){
							div.classList.remove("checked");
						}
					}
				}
			}
		}
    });
}
