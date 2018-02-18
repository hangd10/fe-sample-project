import _ from 'lodash';

export default function() {
    const ALL_PRODUCTS = [
        {
          "id" : 1,
          "filename": "618328744.png",
          "price": 5127,
          "name": "Mens Fashion Shirts"
        },
        {
          "id" : 2,
          "filename": "618842634.png",
          "price": 5704,
          "name": "Casual jacket"
        },
        {
          "id" : 3,
          "filename": "619521178.png",
          "price": 397,
          "name": "Mens work shirt"
        },
        {
          "id" : 4,
          "filename": "623270836.png",
          "price": 3237,
          "name": "Running Shoes"
        },
        {
          "id" : 5,
          "filename": "638571516.png",
          "price": 5774,
          "name": "Leather lacket"
        },
        {
          "id" : 6,
          "filename": "649597850.png",
          "price": 8745,
          "name": "Snow Boots"
        },
        {
          "id" : 7,
          "filename": "656678076.png",
          "price": 9012,
          "name": "Mens Fashion Shirts"
        },
        {
          "id" : 8,
          "filename": "666666252.png",
          "price": 8883,
          "name": "Womens white sweater"
        },
        {
          "id" : 9,
          "filename": "666666466.png",
          "price": 7767,
          "name": "Womens red jacket"
        },
        {
          "id" : 10,
          "filename": "675606742.png",
          "price": 7057,
          "name": "Pastel everyday wear"
        },
        {
          "id" : 11,
          "filename": "806813490.png",
          "price": 2246,
          "name": "Longsleeve workout shirt"
        }
    ];

    // export all products as an object vs an array for easy retrieval when adding to cart
    return _.mapKeys(ALL_PRODUCTS, 'id');
}
