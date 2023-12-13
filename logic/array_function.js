function array_filter(array, test_function){
    let result = [];

    for(let i = 0; i < array.length; i++){
        if(test_function(array[i])){
            result.push(array[i])
        }
    }
    return result; 
}

function array_find(array, test_function){
    for(let i = 0; i < array.length; i++){
        if(test_function(array[i])){
            return array[i];
        }
    }
}

function array_map(array, test_function){
    let result = [];

    for(let i = 0; i < array.length; i++){
        result.push(test_function(array[i]))
    }
    return result;
}

function filter_price(shoe_array, max_price) { 
    let new_array = [];
    for (let shoe of shoe_array) {
        if (shoe.price <= max_price) {
            new_array.push(shoe);
        }
    }
    return new_array;
};