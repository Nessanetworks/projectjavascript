"use strict"

function filter_by_type() {

  let checked_kind = document.querySelectorAll(".type_option_container .checked .text");

  let checked_textContent_array = array_map(checked_kind, function (element) {
    return element.textContent;
  });

  let kindsArray = array_map(checked_textContent_array, function (name) {
    return array_find(KINDS, function (kind) {
      return name === kind.name;
    });
  });

  let kindId = array_map(kindsArray, function (kind) {
    return kind.id;
  });

  let program = array_filter(SHOES, function (shoe) {
    return kindId.includes(shoe.kind_id);
  });

  console.log(program);

  return program;
}








/*function filterShoesByType(shoeArray, type) {
  const result = [];
  for (let i = 0; i < shoeArray.length; i++) {
    if (shoeArray[i].kind_id === type) {
      result.push(shoeArray[i]);
    }
  }
  return result;
}

const slippers = filterShoesByType(SHOES, 1);
const boots = filterShoesByType(SHOES, 2);
const sneakers = filterShoesByType(SHOES, 3);*/




/*function filterById(array, idToFilter)
  {

    let SHOES = document.getElementById("Slippers").value.indexOf("1");
    
    const number = filterById(array, 1);
    return array.filter(SHOES => kind_id === idToFilter);
  }
  console.log(SHOES);*/
/*KINDS.values = ;*/


