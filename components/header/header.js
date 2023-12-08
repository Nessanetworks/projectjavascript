"use strict;"

// Renderar headerns struktur
function render_header_content() {
    let header_container = document.querySelector("header");
    header_container.innerHTML = `<h1>LOONEY LACES</h1>
                                  <div id="filter">
                                    <label id="filter_label">FILTER</label>
                                    <select id="filter_select"></select>
                                  </div>
                                  <div id="about_us">
                                    <label id="about_us_label">OM OSS</label>
                                    <select id="about_us_select"></select>
                                  </div>`;
}



