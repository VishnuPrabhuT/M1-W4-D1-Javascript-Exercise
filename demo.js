let fruits = ["apples", "oranges", "pears", "apples"];
let search = fruits.indexOf("apples");
console.log(`The search returns: ${search}`);

search = fruits.indexOf("bananas");
console.log(`The search returns: ${search}`);

search = fruits.lastIndexOf("apples");
console.log(`The search returns: ${search}`);

fruits = ["apples", "oranges", "pears", "cherries"];
fruits.forEach((fruit, index) => {
    console.log(`${index} - ${fruit}`);
});

search = fruits.includes("mangoes");
console.log(`The search returns: ${search}`);

search = fruits.every(fruit => fruit.length > 6);
console.log(`The search returns: ${search}`);

search = fruits.every(fruit => fruit.length > 3);
console.log(`The search returns: ${search}`);

search = fruits.some(fruit => fruit.length > 6);
console.log(`The search returns: ${search}`);

search = fruits.some(fruit => fruit.length < 3);
console.log(`The search returns: ${search}`);

let candies = fruits.map(fruit => `candy ${fruit}`);
console.log(candies);

let myFruits = fruits.filter(fruit => fruit.length > 6);
console.log(myFruits);

myFruits = fruits.filter(fruit => fruit.includes("es"));
console.log(myFruits);

let daysales = [305, 432, 376, 290];
let weeklysales = daysales.reduce((accumulator, daysale) => accumulator + daysale);
console.log(weeklysales);

let myNumber = Math.random();
console.log(`The generated number is: ${myNumber}`);











