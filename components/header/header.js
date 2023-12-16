"use strict";

// Funktion som renderar headerns inre struktur
function render_header_structure() {
  const header_container = document.querySelector("header");
  header_container.innerHTML = `<h1>LOONEY LACES</h1>

                                <div id="filter">
                                  <div class="button">
                                    <div id="filter_title">FILTER</div>
                                    <div class="arrow" id="arrow_one">V</div>
                                  </div>
                                  <div class="dropdown_menu hide">
                                  </div>
                                </div>

                                <div id="about_us">
                                  <div class="button">
                                    <div id="about_us_title">OM OSS</div>
                                    <div class="arrow" id="arrow_two">V</div>
                                  </div>
                                  <div class="about_us_box hide">
                                  </div>
                                </div>`;

  // Följande kod ser till att när man trycker på texten "FILTER" eller pilen bredvid,
  // så kommer dropdown menyn att visas/gömmas
  const filter_title = document.querySelector("#filter_title");
  const arrow_one = document.querySelector("#arrow_one");
  const dropdown_menu = document.querySelector(".dropdown_menu");

  filter_title.addEventListener("click", function () {
    dropdown_menu.classList.toggle("hide");
  });

  arrow_one.addEventListener("click", function () {
    dropdown_menu.classList.toggle("hide");
  });

  // Följande kod ser till att när man trycker på texten "OM OSS" eller pilen bredvid,
  // så kommer about us boxen att visas/gömmas

  const about_us_title = document.querySelector("#about_us_title");
  const arrow_two = document.querySelector("#arrow_two");
  const about_us_box = document.querySelector(".about_us_box");

  about_us_title.addEventListener("click", function () {
    about_us_box.classList.toggle("hide");
  });

  arrow_two.addEventListener("click", function () {
    about_us_box.classList.toggle("hide");
  });
}

// FIXA: 
/*
  window.addEventListener("click", (e) => {
    if (e.target !== arrow_two) {
      popup_box.classList.add("hide");
    }
  });
  */

