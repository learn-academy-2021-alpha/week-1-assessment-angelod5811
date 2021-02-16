// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// Pseudo coding is HIGHLY recommended
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected outcome: "85 is below boiling point" "350 is above boiling point" "212 is at boiling point"

var temp1 = 85
var temp2 = 350
var temp3 = 212

const temperaturePoints = (number) => {
  if (number < 212) {
    return `${number} is below boiling point`
  }else if (number === 212) {
      return `${number} is at boiling point`
    }else if (number > 212) {
        return `${number} is above boiling point`

      }
    }
    console.log(temperaturePoints(temp1));


// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45] [10, 25, -40, 100, 160]

var myForNumbers1 = [3, 7, 0, 6, -9]
var myForNumbers2 = [2, 5, -8, 20, 32]

//setup function that multiplies every number in the array provided by 5 in a a loop
const mutlipies = (array) => {
var arrayOne = []
for (let i = 0; i < array.length; i++) {
(array[i] * 5);

}
 return arrayOne

}
console.log(mutlipies(myForNumbers1));



// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below.

//Expected outcome: [435, 30, 140, 80, 10] [40, -35, 0, 30, 60]

var myMapNumbers1 = [87, 6, 28, 16, 2]
var myMapNumbers2 = [8, -7, 0, 6, 12]

const mult5 = (array) => {
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    newArr.push(array[i] * 5)
  }
  return newArr
}
console.log(mult5(myMapNumbers1));




// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

// var stringWithVowels1 = "HeyThereLearnStudent"
// var stringWithVowels2 = "ILoveJavaScript"

//setup function that takes in a string of letters and removes the vowels
//this function will recognize the index and remove vowel

var vowels = "heytherelearnstudent"
// var res = str.split("a", "")

const vowel = (vowels) => {
   var arrayFour = []
for (let i = 0; i < vowels.length; i++) {
  arrayFour.join(array[i] !== "a")
}
return arrayFour
}

console.log(vowels.split("a"))
console.log(vowels.split("e"));

//not returning any other vowels through the function besides removing "a"
//function not set properly. just returning vowels split in console log





// --------------------5) Copy/paste your code from #4. Refactor your code to include non-string edge cases. Inform your user that the variable passed into the vowel removal function is not a string.
// Use the test variables provided below. Expected output: "true is not a string" "42 is not a string" "mCdngMstr"

var refactorTester1 = true
var refactorTester2 = 42
var refactorTester3 = "IAmACodingMaster"

//function recognizes the vowel is and returns non string edge cases.
//let us know what the varible is, if its a booleon, string, etc.


const refactorTester1 = (vowels) => {
//if(typeof(vowels !== "string"))
//return `${vowels} is a string`
   let arrayFour = []
for (let i = 0; i < vowels.length; i++) {
  vowels.join(arrayFour)
}
return arrayFour
}

console.log(refactorTester1.split())

//still not returning correct
//going back through I should have used if statememts and return statments. I should have NOT used a for loop





// --------------------6) Create a function that takes in an array of strings and returns the string with the most characters.
// Expected output: "chopsticks" "stemware"

var utensils = ["fork", "knife", "tongs", "chopsticks", "skewer"]
var vessels = ["cup", "mug", "stemware", "glass", "tumbler", "tea cup"]
 //setup function that acccess an index in an array that is the longest word and return the longest word
//funtion returning array of string.
//needs to return just longest word.
 const longestWord = (array) => {
   for (let i = 0; i < array.length; i++) {
     array[i].filter(longestWord)
   }
   return longestWord % 2===0
 }
console.log(vessels[2])

//function not working. only passing through console log :(
//it is only pulling the arrays index through console log.



// --------------------7) Create a function that takes in an array of strings and returns an array with the last letter removed from each string.
// Expected output: ["Luig", "Peac", "Toa", "Yosh"] ["Ink", "Blink", "Pink", "Clyd"]

var mario = ["Luigi", "Peach", "Toad", "Yoshi"]
var pacman = ["Inky", "Blinky", "Pinky", "Clyde"]

//setup funtion that will remove the last letter of each character in the array of strings

const lastLetter = (array) => {
  var newArr = []
  for (let i = 0; i < array.length; i++) {
    array[i]
  }
  return newArr.pop("")
}
console.log(mario);


//looking back on all my code after sarah going through the problems I used for loops for all of them when i could have used if, if else, return statements would have made it a lot easier. 
