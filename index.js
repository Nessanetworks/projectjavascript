render_div_container(document.body);

render_header_structure();

let dropdown_menu = document.querySelector(".dropdown_menu");
render_type_filters(dropdown_menu);

render_country_filters(dropdown_menu);

render_price_filters(dropdown_menu);