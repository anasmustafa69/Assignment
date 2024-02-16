let fruit1 = "apple";
let fruit2 = "banana";

console.log("Is fruit1 equal to 'apple'? I predict True.");
console.log(fruit1 == "apple");

console.log("Is fruit1 not equal to 'banana'? I predict True.");
console.log(fruit1 != "banana");
console.log("Is fruit2 equal to 'apple'? I predict False.");
console.log(fruit2 == "apple");
console.log("Is fruit2 not equal to 'banana'? I predict False.");
console.log(fruit2 != "banana");

let word1 = "HELLO";
let word2 = "world";
console.log("Is word1 in lowercase equal to 'hello'? I predict True.");
console.log(word1.toLowerCase() == "hello");

console.log("Is word2 in uppercase equal to 'WORLD'? I predict False.");
console.log(word2.toUpperCase() == "WORLD");
let num1 = 10;
let num2 = 5;
console.log("Is num1 equal to 10? I predict True.");
console.log(num1 == 10);
console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2);

console.log("Is num2 less than or equal to 5? I predict True.");
console.log(num2 <= 5);
let sunny = true;
let temperature = 25;

console.log("Is it sunny and the temperature greater than 20? I predict True.");
console.log(sunny && temperature > 20);
console.log("Is it sunny or the temperature greater than 30? I predict True.");
console.log(sunny || temperature > 30);
let numbers = [1, 2, 3, 4, 5];
console.log("Is 3 in the numbers array? I predict True.");
console.log(numbers.includes(3));
let fruits = ["apple", "banana", "orange"];

console.log("Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes("grape"));
