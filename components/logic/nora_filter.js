"Use strict"; 

const SHOES = [
    {"id":2,"name":"Black Nick","price":709,"kind_id":3,"country_id":3,"file_name":"black_nick_sneakers.jpg"},
    {"id":3,"name":"Blue Kids","price":349,"kind_id":1,"country_id":6,"file_name":"blue_kids_tofflor.jpg"},
    {"id":4,"name":"White Fluffy","price":329,"kind_id":1,"country_id":3,"file_name":"white_fluffy_tofflor.jpg"},
    {"id":5,"name":"White Leather","price":209,"kind_id":2,"country_id":7,"file_name":"white_leather_boots.jpg"},
    {"id":6,"name":"Peaky Blinders","price":479,"kind_id":2,"country_id":8,"file_name":"peaky_blinders_boots.jpg"},
    {"id":7,"name":"Beige Chelsea","price":899,"kind_id":2,"country_id":1,"file_name":"beige_chelsea_boots.jpg"},
    {"id":8,"name":"Black Chelsea","price":489,"kind_id":2,"country_id":4,"file_name":"black_chelsea_boots.jpg"},
    {"id":9,"name":"Blue Yellow","price":349,"kind_id":3,"country_id":3,"file_name":"blue_yellow_sneakers.jpg"},
    {"id":10,"name":"Red White","price":539,"kind_id":3,"country_id":2,"file_name":"red_white_sneakers.jpg"},
    {"id":11,"name":"Cute Cat","price":549,"kind_id":1,"country_id":4,"file_name":"cute_cat_tofflor.jpg"},
    {"id":12,"name":"Fuzzy Soft","price":469,"kind_id":1,"country_id":4,"file_name":"fuzzy_soft_tofflor.jpg"},
  ];

  function nora_filter (shoe_array, x, y) {
    let new_array = [];
    for (let shoe of shoe_array) {
        if (shoe.price >= x && shoe.price <= y) {

        }
    }

  }
 
 
  console.log(nora_filter(SHOES,500,1000));