// acs order (Numbers)
function acs(num) {
  return num
    .toString()
    .split("")
    .sort((a, b) => a - b)
    .join("");
  console.log(num);
}
acs([123245]);
//-------------------------------------------------------------------------------------------------------------------------

//des order(Numbers)
function acs(num) {
  return num
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
  console.log(num);
}
acs([123245]);
//-------------------------------------------------------------------------------------------------------------------------

//Acs order array
function isAcs(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    } else {
      return true;
    }
  }
}
isAcs([3, 1, 4, 7, 10, 21]);
//-------------------------------------------------------------------------------------------------------------------------

// Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value 'Fizz' instead
// If the value is a multiple of 5: use the value 'Buzz' instead
// If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead

var arr = [];

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
      arr.push("Fizz");
      // console.log("Fizz")
    } else if (i % 5 === 0) {
      arr.push("Buzz");
      //  console.log("Buzz")
    } else if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
      //  console.log("FizzBuzz")
    } else {
      arr.push(i);
    }
  }
  return arr;
}

fizzBuzz(10);
console.log(arr);
//-------------------------------------------------------------------------------------------------------------------------

// In DNA strings, symbols "A" and "T" are complements of each other, as are "C" and "G". Given one side of the DNA, you need to find the complementary side.

// DNAStrand("ATTGC") ==>  "TAACG"
// DNAStrand("GTAT")  ==>  "CATA"

var arr1 = [];

function dna(str) {
  var arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "A") {
      arr1.push("T");
    } else if (arr[i] === "T") {
      arr1.push("A");
    } else if (arr[i] === "G") {
      arr1.push("C");
    } else if (arr[i] === "C") {
      arr1.push("G");
    }
  }

  return arr1.join("");
}
dna("GTAT");
//-------------------------------------------------------------------------------------------------------------------------

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Solution - ONE
function removeVowels(str) {
  return str.replace(/[aeiou]/gi, "");
}
removeVowels("This website is for losers LOL!");

// Solution - TWO
function removeVowels(str) {
  return str
    .toLowerCase()
    .split("i")
    .join("")
    .split("e")
    .join("")
    .split("o")
    .join("");
}
removeVowels("This website is for losers LOL!");

// Solution - THREE
function disemvowel(str) {
  var arr = str.toLowerCase().split("");

  var arrAns = str.split("");

  for (let i = arr.length - 1; i > 0; i--) {
    switch (arr[i]) {
      case "a":
        arrAns.splice(i, 1);
        break;

      case "e":
        arrAns.splice(i, 1);
        break;

      case "i":
        arrAns.splice(i, 1);
        break;

      case "o":
        arrAns.splice(i, 1);
        break;
      case "u":
        arrAns.splice(i, 1);
        break;

      default:
        break;
    }
  }
  return arrAns.join("");
}
//-------------------------------------------------------------------------------------------------------------------------
// A printer prints colors represented by the letters "a" through "m". At the end of the print, it puts out a control string to show what colors were printed.  A "good" control string output example might be "aaabbbbhaijjjm" due to the fact that only the letters a through m were used, and no errors (other letters) were used.

// When the printer has a malfunction, the control string marks it with a letter that isn't a through m, for example: "aaaxbbbbyyhwawiwjjjwwm".

// Write a function, printer_error, which will output the error rate of the printer as a string whose numerator is the number of errors and the denominator the length of the control string. Do not reduce the fraction.

// For example:
// printer_error("aaabbbbhaijjjm") ==> "0/14"
// printer_error("aaaxbbbbyyhwawiwjjjwwm") ==> "8/22"

function printer_error(str) {
  let splitStr = str.split("");
  let finePrinter = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m"
  ];
  let count = 0;

  for (let i = 0; i < splitStr.length; i++) {
    if (!finePrinter.includes(splitStr[i])) count++;
  }
  console.log(count + "/" + splitStr.length);
}
printer_error("aaaxbbbbyyhwawiwjjjwwm");

//-------------------------------------------------------------------------------------------------------------------------
// write a function that translates english to pig-latin
// 'truck' would be 'rucktay'
// 'igloo' would be 'iglooway'

function translateEng(str) {
  let splitStr = str.split("");
  let vowels = ["a", "i", "o", "a", "u"];

  if (!vowels.includes(splitStr[0])) {
    splitStr.push(splitStr[0], "a", "y");
    splitStr.splice(0, 1);
  } else {
    splitStr.push("a", "y");
  }
  return splitStr.join("");
}
translateEng("truck");

//-------------------------------------------------------------------------------------------------------------------------
// Write a function called songDecoder that removes the terrible dubstep sounds from a song, to reveal the original, pure, un-dubstepped beauty.

// The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

// Examples:
// songDecoder("WUBWUBIWUBAMWUBWUBX") ==> I AM X
// songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB") ==>  WE ARE THE CHAMPIONS MY FRIEND

function songDecoder(str) {
  var newStr = str.replace(/[WUB]/gi, " ").trim();
  console.log(newStr);
}
songDecoder("WUBWUBIWUBAMWUBWUBX");

//-------------------------------------------------------------------------------------------------------------------------
// Write a function that, given a string, returns the number of vowels in that string.

// We will consider that a, e, i, o and u are vowels for the sake of this problem.

function countVowels(str) {
  var splitStr = str.toLowerCase().split("");
  var count = 0;
  var vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < splitStr.length; i++) {
    if (vowels.includes(splitStr[i])) {
      count++;
    }
  }
  console.log(count);
  return count;
}
countVowels("this site is for loseres LOL");

//----------------------------------
//Sloved using match()
function countVowels(str) {
  let value = str.match(/[aeiou]/gi);

  return value === null ? "null" : value;
}
countVowels("this site is for loseres LOL");
//----------------------------------

//-------------------------------------------------------------------------------------------------------------------------

// Write a function to square every digit of an integer.

// For example:
// squareEveryNum(9119) ==> 811181
// squareEveryNum(4232) ==> 16494

// Note: The function should accept an integer and return an integer

function sequareEveryDigit(num) {
  var splitNum = num.toString().split("");
  var squaredNum = [];

  for (let i = 0; i < splitNum.length; i++) {
    squaredNum.push(Math.pow(Number.parseInt(splitNum[i], 10), 2));
  }
  return Number.parseInt(squaredNum.join(""));
}
sequareEveryDigit(9119);

//-------------------------------------------------------------------------------------------------------------------------
// Description:

// Have you heard about the myth that if you fold a paper enough times, you can reach the moon with it? Sure you do, but exactly how many? Maybe it's time to write a program to figure it out.

// You know that a piece of paper has a thickness of 0.0001m. Given distance in units of meters, calculate how many times you have to fold the paper to make the paper reach this distance.
// (If you're not familiar with the concept of folding a paper: Each fold doubles its total thickness.)

// Note: Of course you can't do half a fold. You should know what this means ;P

// Also, if somebody is giving you a non-positive distance, it's clearly bogus and you should yell at them by returning null/NULL.

//https://www.codewars.com/kata/folding-your-way-to-the-moon

function toTheMoon(num) {
  var paper = 0.0001;
  var count = 0;
  for (var i = 0.0001; i <= num; i *= 2) {
    count++;
  }
  return count;
}

toTheMoon(384400000);
