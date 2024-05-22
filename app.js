"use strict";
let fruits = [
    "apple",
    "banana",
    "orange",
    "grapes",
    "watermelon",
    "moli",
    "began",
    "gajar",
    "matar",
];
console.log("original Array", fruits);
fruits.splice(5, 2);
console.log(fruits);
fruits.splice(5, 2, "flowers", "plant");
console.log(fruits);
fruits.splice(0);
console.log(fruits);
fruits.splice(0, 0, "laptop", "mobile");
console.log(fruits);
const furnitures = [{ name: "cupboard", preparedby: "lasani", price: 1300 },
    { name: "dressing", preparedby: "deco", price: 1000 },
    { name: "bed", preparedby: "lasani", price: 1900 },
    { name: "chair", preparedby: "plastic", price: 555 },
    { name: "table", preparedby: "plastic", price: 800 },
    { name: "divider", preparedby: "deco", price: 2000 }];
console.log(furnitures[3]);
console.log(furnitures[4]);
const filteredFurniture = furnitures.filter(function (furniture) {
    return (furniture.price <= 1000);
});
console.log(filteredFurniture);
const fans = [
    { name: "pak fan", speed: 340, price: 900 },
    { name: "faras fan", speed: 340, price: 1900 },
    { name: "taimoor fan", speed: 350, price: 1000 },
    { name: "lahore fan", speed: 360, price: 300 },
    { name: "khursheed fan", speed: 370, price: 3800 },
    { name: "flips fan", speed: 350, price: 2000 }
];
const filteredFan = fans.filter(function (fan) { return (fan.price < 1000); });
console.log(filteredFan);
