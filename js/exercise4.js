let a = 23;
let b = 30;
let c = 7;

let max = a;
let min1 = b;
let min2 = c;

if (b > max) {
    min1 = max;
    max = b;
} 

if (c > max) {
    min2 = max;
    max = c;
} 

if (min1 + min2 > max) {
    console.log("Triangle is possible!")
} else {
    console.log("Triangle is not possible :(")
}