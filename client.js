// variables
let num = 2
const string = 'Hello'

// insert num variable into html
document.querySelector(".num").innerHTML = num;

// insert string variable into html
document.querySelector(".string").innerHTML = string;

// if number is less then 10
if (num < 10) {
  // increase num by one
  num++;
  // insert into html document
  document.querySelector("#after-one").innerHTML = num;
}

// convert num to a floating point
Number.parseFloat(num);
// put num into the html third list item
document.querySelector("#after-three").innerHTML = num;

// check if number is finite 
console.log (Number.isFinite(num));
// if number is infinite
if (num = true) {
  // then put true in the second list item
  document.querySelector("#after-two").innerHTML = num;
}

//for some reason i had to put true at the end instead of second. why does this override other functions?

// now onto strings

//log the string length
console.log (string.length);
//put the string length into the document
document.querySelector("#string-one").innerHTML = (string.length);

//substring
// let the variable sub be characters 1-4 in string
let sub = string.substring(1,4);
// put substring into the document
document.querySelector("#string-two").innerHTML = sub;

// extract the last letter of the string
// let the variable stringLast be the last letter of string
let stringLast = string.slice(-1);
document.querySelector("#string-three").innerHTML = stringLast;