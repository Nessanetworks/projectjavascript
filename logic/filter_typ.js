/* "use strict"

function filterShoesByType(shoeArray, type) {
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
const sneakers = filterShoesByType(SHOES, 3);




/*function filterById(array, idToFilter)
  {

    let SHOES = document.getElementById("Slippers").value.indexOf("1");
    
    const number = filterById(array, 1);
    return array.filter(SHOES => kind_id === idToFilter);
  }
  console.log(SHOES);*/
/*KINDS.values = ;*/


 */