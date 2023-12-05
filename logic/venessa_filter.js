const SHOES = [
    { "id": 2, "name": "Black Nick", "price": 709 },
    { "id": 3, "name": "Blue Kids", "price": 349 },
    { "id": 4, "name": "White Fluffy", "price": 329 },
    { "id": 5, "name": "White Leather", "price": 209 },
    { "id": 6, "name": "Peaky Blinders", "price": 479 },
    { "id": 7, "name": "Beige Chelsea", "price": 899 },
    { "id": 8, "name": "Black Chelsea", "price": 489 },
    { "id": 9, "name": "Blue Yellow", "price": 349 },
    { "id": 10, "name": "Red White", "price": 539 },
    { "id": 11, "name": "Cute Cat", "price": 549 },
    { "id": 12, "name": "Fuzzy Soft", "price": 469 }
];

function venessa_filter(SHOESarray, minPrice, maxPrice) {
    const filteredSHOES = SHOESarray.filter(shoe => shoe.price >= minPrice && shoe.price <= maxPrice);
    return filteredSHOES;
}

const minPrice = 209;
const maxPrice = 489;

const filteredSHOES = venessa_filter(SHOES, minPrice, maxPrice);
console.log(filteredSHOES);