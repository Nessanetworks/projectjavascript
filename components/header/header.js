"use strict";

// Renderar headerns inre struktur
function render_header_structure() {
  const header_container = document.querySelector("header");
  header_container.innerHTML = `<h1>LOONEY LACES</h1>                                
                                <div id="dropdown">
                                  <div id="filter_button">
                                    <div id="filter_text">FILTER</div>
                                    <div class="arrow" id="arrow_one">V</div>
                                  </div>
                                  <div class="dropdown_menu hide">
                                    <div id="type_box">TYP</div>
                                    <div>TILLVERKNINGSLAND</div>
                                    <div>MAXPRIS</div>
                                  </div>
                                </div>

                                <div id="about_us">
                                  <div id="about_us_button">
                                    <div id="about_us_text">OM OSS</div>
                                    <div class="arrow" id="arrow_two">V</div>
                                  </div>
                                  <div class="popup_box hide">
                                    <img class="team_image" src="media/sko_bilder/cowboy_boots.jpg">
                                  </div>
                                </div>`;  
  
  
  const arrow_one = document.querySelector("#arrow_one");
  const arrow_two = document.querySelector("#arrow_two");
  const dropdown_menu = document.querySelector(".dropdown_menu");
  const popup_box = document.querySelector(".popup_box");
  
  arrow_one.addEventListener("click", () => {
    dropdown_menu.classList.toggle("hide");
  });
  
  window.addEventListener("click", (e) => {
    if (e.target !== arrow_one) {
      dropdown_menu.classList.add("hide");
    }
  });
  
  arrow_two.addEventListener("click", () => {
    popup_box.classList.toggle("hide");
  });
  
  window.addEventListener("click", (e) => {
    if (e.target !== arrow_two) {
      popup_box.classList.add("hide");
    }
  });
}
