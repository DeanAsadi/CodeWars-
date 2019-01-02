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

// -------------------------------------------------------------------------------------------------------------------------------------------------
// Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid.

// Examples:
// validParentheses( "()" ) => returns true
// validParentheses( ")(()))" ) => returns false
// validParentheses( "(" ) => returns false
// validParentheses( "(())((()())())" ) => returns true

// All input strings will be nonempty, and will only consist of open parentheses '(' and/or closed parentheses ')'

function validParenthesesTest(parant) {
  return parant.split("(").length - 1 === parant.split(")").length - 1;
}

//-------------------------------------------------------------------------------------------------------------------------------------------------

var arr = [
  [
    { name: "Dean-1", voice: "Beautiful-1", smilyFace: true },
    { name: "Dean-2", voice: "Beautiful-2", smilyFace: true },
    { name: "Dean-3", voice: "Beautiful-3", smilyFace: true }
  ],
   [
    { name: "Dean-10", voice: "Beautiful-10", smilyFace: true },
    { name: "Dean-20", voice: "Beautiful-20", smilyFace: true },
    { name: "Dean-30", voice: "Beautiful-30", smilyFace: true }
  ]
]


for( let i = 0; i < arr.length; i ++ ) {
  // console.log(arr[i])
    for( let j = 0; j < arr[i].length; j++ ) {
      // console.log( arr[i][j]  )
        for ( keys in arr[i][j] ) {
          console.log( keys, arr[i][j][keys] )
        }
    }
  }

  var arr = [
  [
    { name: "Dean-1", voice: "Beautiful-1", smilyFace: true },
    { name: "Dean-2", voice: "Beautiful-2", smilyFace: true },
    { name: "Dean-3", voice: "Beautiful-3", smilyFace: true }
  ],
   [
    { name: "Dean-10", voice: "Beautiful-10", smilyFace: true },
    { name: "Dean-20", voice: "Beautiful-20", smilyFace: true },
    { name: "Dean-30", voice: "Beautiful-30", smilyFace: true }
  ]
]


for( let i = 0; i < arr.length; i ++ ) {
  // console.log(arr[i])
    for( let j = 0; j < arr[i].length; j++ ) {
      // console.log( arr[i][j]  )
        for ( keys in arr[i][j] ) {
          console.log( keys, arr[i][j][keys] )
        }
    }

//-------------------------------------------------------------------------------------------------------------------------------------------------

var obj = {
  char: [
    { name: "Dean-1", voice: "Beautiful-1", smilyFace: true },
    { name: "Dean-2", voice: "Beautiful-2", smilyFace: true },
    { name: "Dean-3", voice: "Beautiful-3", smilyFace: true }
  ],
  char2: [
    { name: "Dean-10", voice: "Beautiful-10", smilyFace: true },
    { name: "Dean-20", voice: "Beautiful-20", smilyFace: true },
    { name: "Dean-30", voice: "Beautiful-30", smilyFace: true }
  ]
}

for ( let keys in obj ) {
  // console.log(obj[keys])
    for ( let i = 0; i < obj[keys].length; i++ ) {
      // console.log( obj[keys][i] )
      for( let finalKey in obj[keys][i] ) {
        // console.log(finalKey, obj[keys][i][finalKey])
      }
    }
}

//-------------------------------------------------------------------------------------------------------------------------------------------------


//  This week we'll be looking at potential operations we may need
//         to run on social media post data.

//     For today's problem, we'd like to be able to view all the posts
//       from a given user, display a collection that includes the number
//       of posts the user made and all the post data from that user.

// loop and compare values to find spifific user
// posts.length
// post date Date.parse(  )

const posts = [ {
  id: 1,
  username: 'mpencot0',
  text: 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
  date: '2017-07-26 15:44:08',
},
{
  id: 2,
  username: 'mpencot0',
  text: 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
  date: '2017-08-04 06:17:29',
},
{
  id: 3,
  username: 'dbrokenbrow2',
  text: 'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
  date: '2017-07-12 10:47:03',
},
{
  id: 4,
  username: 'myakuntzov3',
  text: 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
  date: '2017-09-03 16:53:53',
},
{
  id: 5,
  username: 'slogesdale9',
  text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
  date: '2017-11-05 08:24:16',
},
{
  id: 6,
  username: 'mpencot0',
  text: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
  date: '2017-10-07 10:01:07',
},
{
  id: 7,
  username: 'ljeffs6',
  text: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
  date: '2017-09-24 22:30:55',
},
{
  id: 8,
  username: 'ngedge7',
  text: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
  date: '2017-11-15 13:38:29',
},
{
  id: 9,
  username: 'ljeffs6',
  text: 'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
  date: '2017-06-11 00:10:04',
},
{
  id: 10,
  username: 'slogesdale9',
  text: 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.',
  date: '2017-10-09 12:34:55',
},
];

// Display all post from a specific user
// Display how many post that user made
// Display all post date form that user

var newUserArr = [];

function displayUserPosts( arr , user ) {
for ( let i = 0; i < arr.length; i++ ) {
    if( arr[i].username === user ) {
        newUserArr.push(arr[i] )
    }
}
return{
  howManyPosts: newUserArr.length,
  userPosts: newUserArr

}
}

displayUserPosts( posts, 'slogesdale9' )

// Another solution using filter()
function findUserPosts( arr, user ) {
  const filterUserPosts = arr.filter((elm) => elm.username === user )
  const dateFilter = arr.filter((elm) => elm.username === user).sort((a, b) => {
    return Date.parse( a.date ) - Date.parse(b.date)
  })
  return{
    numberOfPosts: filterUserPosts.length,
    dateFilter: dateFilter,
    posts: filterUserPosts
  }
}

findUserPosts(posts, 'slogesdale9')

//-------------------------------------------------------------------------------------------------------------------------------------------------
// Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid.

// Examples: 
// validParentheses( "()" ) => returns true 
// validParentheses( ")(()))" ) => returns false 
// validParentheses( "(" ) => returns false 
// validParentheses( "(())((()())())" ) => returns true 

// All input strings will be nonempty, and will only consist of open parentheses '(' and/or closed parentheses ')'


//sol: #1

function validParentheses(str){
  return str.split(")").length  === str.split("(").length  
 }
 validParentheses("))(())((")
 
 //Sol #2
function validParentheses(str) {
  var arr = str.split("");
  var countOne = 0;
  var countTwo = 0;

  for ( let i = 0; i < arr.length; i++ ) {
      if( arr[i] == ")" ) {
        countOne++
      } else{
        countTwo++
      }
  }
  return countOne === countTwo

}
validParentheses( "(())((()())())" )

//-------------------------------------------------------------------------------------------------------------------------------------------------

// Create a function that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.

// Examples:

// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect

function findNextSquare(n) {
  return Number.isInteger (Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2) : -1
}

console.log(findNextSquare(625));

//-------------------------------------------------------------------------------------------------------------------------------------------------

//   There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.

var newArr = []

function findUniq(arr) {
  for( let i = 0; i < arr.length; i++ ) {
    if(arr[0] != arr[i]){
      newArr.push(arr[i])
      
    }
  }
}
findUniq([ 1, 1, 1, 2, 1, 1 ])
//-------------------------------------------------------------------------------------------------------------------------------------------------

//given a multidimentional array, write a function that takes in an array and returns the sume of the averages
//of those array
let arr= [[1,2,3,4],[1,2,3]]
var count = 0;

for ( let i = 0; i < arr.length; i++ ) {
  // console.log(arr[i])
    for(let j = 0; j < arr[i].length; j++) {
      for(let j = 0; j < arr[i].length; j ++) {
      }
       count += arr[i][j]
    }  
}
//-------------------------------------------------------------------------------------------------------------------------------------------------

// //given a multidimentional array, write a function that takes in an array and returns the sume of the averages
// //of those array
let arr= [[1,2,3,4],[1,2,3]]

function average(arr) {
  let sum = 0;
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum = sum + arr[i][j];
    }
    total = sum / arr[i].length + total;
    sum = 0;
  }
  return total;
}
average(arr)

//-------------------------------------------------------------------------------------------------------------------------------------------------

//write a function that takes an array and returns the element in the array that appears an odd number of times
var odd = []

function findOdd(arr) {
  for(let i = 0; i < arr.length; i ++) {
    if(arr[i] % 2 !== 0 ) {
      odd.push(arr[i])
    }
  }
  return odd
}
findOdd([1,2,3,4,5]

// Using filter()
function findOdd(arr){
  const odd = arr.filter((elm) => elm % 2 !== 0)
  return odd
}
findOdd([1,2,3,4,5])

//-------------------------------------------------------------------------------------------------------------------------------------------------

// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Not sure this is the correct solution,
//Will get back to check it out again later :)

function sortArray(array) {
  let odds = array.filter(element => element % 2 !== 0).sort((a, b) => a > b);
  // console.log(odds);
  return array.map(element => {
    if (element % 2 !== 0) {
      return odds.shift();
    } else {
      return element;
    }
  });
}

sortArray([ 0,1,4,6,7,9,7,10 ])


//-------------------------------------------------------------------------------------------------------------------------------------------------
//find the largeset and smallest numbers a given array
function findMinManNumber(arr) {
  var maxNum = Math.max(...arr)
  var minNum = Math.min(...arr)

  return ` Min number ${maxNum} and Max number is ${minNum} `
}
findMinManNumber(arr1)
var arr1 = [1,3,4,5,6,7,8,9,10]

//-------------------------------------------------------------------------------------------------------------------------------------------------

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

var arr1 = [ 1,2,0,23,0,55,0,22,3 ]
var newArr = [] 

function pushZero( arr ) {
    arr.map((elm, ind) => {
    if ( elm !== 0 ) {
      newArr.push( elm )
    }
  })
  var arrWithZero = arr.filter((elm) => elm === 0)
  for ( let i = 0; i < arrWithZero.length; i++ ) {
    newArr.push( 0 )
  }
  return newArr
}
pushZero(arr1)
//-------------------------------------------------------------------------------------------------------------------------------------------------

// checkPalindrom

var str = "mom"
function checkPalindrom(str) {
     newStr = str.split('').reverse().join('');
    if( newStr === str ) {
      return true
    } else {
      return false
    }
}
checkPalindrom(str)

//-------------------------------------------------------------------------------------------------------------------------------------------------

// convert string numbers into integer numbers!
var strNum = "21 34 65 88 8"

var numberArr = strNum.split(" ").map(Number)

//-------------------------------------------------------------------------------------------------------------------------------------------------
// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format.
// IPs should be considered valid if they consist of four octets, with values between 0..255 (included).

function checkValidIP(str) {

  var trueORfalse = true
  var arr = str.split(".")

  if( arr.length !== 4 ) {
    trueORfalse = false
  } 

  arr.forEach((elm) => {
    if( elm > 255 || elm.match(/\D/g) ) {
      return trueORfalse = false
    }
  })

return trueORfalse
}
checkValidIP("10.0.0.255")

//-------------------------------------------------------------------------------------------------------------------------------------------------

// Write a program that reads two strings and check if they are anagrams to each other.

var char1 = "firstera"
var char2 = "firstare"

function checkAnagrams(str1, str2) {
  var strSplit1 = str1.split("").sort().join("")
  var strSplit2 = str2.split("").sort().join("")

  if( strSplit1 === strSplit2 && strSplit1.length === strSplit2.length ) {
    return ` ${true} Both are anagrams `
  } else {
   ` ${false} They're not anagrams  `
  }
}
checkAnagrams( char1, char2 )

//-------------------------------------------------------------------------------------------------------------------------------------------------
var str = "We have large inventory of things in our warehouse falling in" 
					  + "the category:apperal and the slightly "
					  + "more in demand category:makeup along with the category:furniture and _."

function findCat(str) {
 var i = 0;
 var newStr = ""
  while(true) {
    var found = str.indexOf( "category:", i )
    if(found === -1)  break;

    var start = found + 9
    var end = str.indexOf(" ", start) // start search at " " at index 72  
    newStr = str.substring(start, end)
    console.log(newStr)
    i = end + 1 
  }
}
 
findCat(str)

//-------------------------------------------------------------------------------------------------------------------------------------------------

//Maximum difference between two elements such that larger element appears after the smaller number

function difference(arr) {
  let diff = arr[1] - arr[0];
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - min > diff) {
      diff = arr[i] - min;
    }
    if (arr[i] > min) {
      min = arr[i];
    }
  }

  return diff;
}
difference( [ 2, 4, 6, 22, 23 ] )

//-------------------------------------------------------------------------------------------------------------------------------------------------
//bubble sort