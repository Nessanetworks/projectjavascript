/*
function filter_by_maxprice() {
    let checked_country = document.querySelectorAll(".price_option_container .checked .text");
    let checked_textContent_array = array_map(checked_country, function (element) {
        return element.textContent;
    });
    let result = [];
    for (let number of checked_textContent_array) {
        for (let shoe of SHOES) {
            if (shoe.price <= number) {
                result.push(shoe);
            }
        }
    }
    console.log(result);

    return result;
}*/