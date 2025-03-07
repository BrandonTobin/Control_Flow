////////////////////////////////////
// READ THE INSTRUCTIONS BELOW BEFORE STARTING!
////////////////////////////////////
/*
 * Before you start, add this javascript file in a script tag in index.html.
 *
 * The loops are wrapped in functions for testing purposes. Please do not modify the names of the functions.
 *
 * Test your output in the browser by commenting in and out the function call (aka invocation), e.g., "prompt1()"
 *
 */

/*
 * Prompt 1:
 *
 * Create a loop that counts from 0 to 10, printing each number (including 0 and 10).
 */

// The first one has been done for you as an example!
function prompt1() {
  for (let i = 0; i <= 10; i++) {
    console.log(i)
  }
}

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt1()

// 🌟 MAKE A COMMIT: "Complete prompt 1"

/*
 * Prompt 2:
 *
 * Create a loop that prints every even number BETWEEN 0 and 100 (not including 0 or 100).
 */

function prompt2() {
  for (let i = 2; i <= 98; i += 2) {
    console.log(i)
  }
}

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt2()

// 🌟 MAKE A COMMIT: "Complete prompt 2"

/*
 * Prompt 3:
 *
 * Create a loop that counts from -5 to 5, printing each number (including -5 and 5).
 */

function prompt3() {
  for (let i = -5; i <= 5; i++) {
    console.log(i)
  }
}
// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt3()

// 🌟 MAKE A COMMIT: "Complete prompt 3"

/*
 * Prompt 4:
 *
 * Create a loop that counts down from 10 to 0, printing each number (including 10 and 0).
 */

function prompt4() {
  for (let i = 10; i > 0; i--) {
    console.log(i)
  }
}

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt4()

// 🌟 MAKE A COMMIT: "Complete prompt 4"

/*
 * Prompt 5:
 *
 * Create a loop that counts down from 5 to -5, printing each number (including 5 and -5).
 */
function prompt5() {
  for (let i = 5; i >= -5; i--) {
    console.log(i)
  }
}

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt5()

// 🌟 MAKE A COMMIT: "Complete prompt 5"

/*
 * Prompt 6:
 *
 * Create a loop that counts from 0 to 50 (inclusive) in multiples of 2 (instead of 1),
 * printing each number.
 */

function prompt6() {
  for (let i = 0; i <= 50; i += 2) {
    console.log(i)
  }
}

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt6()

// 🌟 MAKE A COMMIT: "Complete prompt 6"

/*
 * Prompt 7:
 *
 * For the numbers 0 - 100 (inclusive), print out "I found a [ number ]. High five!" if the
 * number is a multiple of five.
 *
 * Sample Output IN THE BROWSER:
 *   - I found a 5. High five!
 *   - I found a 10. High five!
 */
function prompt7() {
  for (let i = 0; i <= 100; i++)
    if (i % 5 === 0) {
      console.log('I found a ' + i + '. High five!')
    } else if (i % 10 === 0) {
      console.log('I found a ' + i + '. High five!')
    }
}
// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt7()

// 🌟 MAKE A COMMIT: "Complete prompt 7"

/*
 * Prompt 8:
 *
 * Create a variable called someNumber and assign it a random number between
 * 0 and 100 (not inclusive). Hint: Use Math.random so that it generates a new number every time the code is run!
 *
 * Create a conditional that matches these requirements:
 *   - if someNumber is less than 30, print "That's a small number!"
 *   - if someNumber is between 30 and 60, print "The number is medium sized."
 *   - if someNumber is greater than 60, print "We got a big one!"
 */

//  define someNumber here
var someNumber = Math.floor(Math.random() * 100)

function prompt8() {
  // print someNumber to the console in your function so you can see its value
  console.log(someNumber)
  if (someNumber < 30) {
    console.log("That's a small number!")
  } else if (someNumber >= 30 && someNumber <= 60) {
    console.log('The number is medium sized')
  } else {
    console.log('We got a big one!')
  }
}
// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt8()

// 🌟 MAKE A COMMIT: "Complete prompt 8"

/*
 * Prompt 9:
 *
 * Iterate over the starWars array printing each character's name and index
 *
 * i.e.:
 *  0. Han
 *  1. C3PO
 *  2. R2D2
 */

let starWars = ['Han', 'C3PO', 'R2D2', 'Luke', 'Leia', 'Anakin']

function prompt9() {
  for (let i = 0; i <= 5; i++) {
    console.log(starWars[i])
  }
}

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt9()

// 🌟 MAKE A COMMIT: "Complete prompt 9"

/*
 * Prompt 10:
 *
 * Write a loop that pushes every even number between 0 and 100 into an array,
 * then print the array.
 */
function prompt10() {
  const myArray = []
  for (let i = 0; i <= 100; i += 2) {
    console.log(i)
    myArray.push(i)
  }

  // don't forget to return the array after pushing the numbers into it so you can see it in the browser!
  // return the array
  return myArray
}

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// console.log(prompt10())

// 🌟 MAKE A COMMIT: "Complete prompt 10"

/*
 * Prompt 11:
 *
 * Find the median number in the following nums array (the mid point), then
 * console.log that number. The median number is the middle number in a SORTED list of numbers. Think through the steps you'll need to take to determine this number with code!
 *
 * Hint: What does Math.floor() do?
 */

let nums = [
  14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12,
  17, 12, 71, 18, 15, 12
]

function prompt11() {
  let sortedArray = nums.sort()
  console.log(sortedArray)
  let length = sortedArray.length
  console.log(length)
  let isEven = length % 2 === 0
  let mid = Math.floor(length / 2)
  if (isEven) {
    console.log((sortedArray[mid] + sortedArray[mid - 1]) / 2)
    return (sortedArray[mid] + sortedArray[mid - 1]) / 2
  } else {
    console.log(mid)
    console.log(sortedArray[mid])
    // console.log('confused')
    return sortedArray[mid]
  }
}

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt11()

// 🌟 MAKE A COMMIT: "Complete prompt 11"

/*
 * Prompt 12:
 *
 * Did you know that you can nest loops? The catch is that you have to use
 * different incrementers (normally i) in the inner vs. outer loops. You'll commonly see developers use
 * another 1-letter incrementer (j, k, l, etc).
 *
 * Create an "outer" loop that counts up from 1 to 10 with an incrementer of i.
 * Create an "inner" loop that counts from 11 to 20 with an incrementer of j.
 * Inside the inner loop, print `i: ${i} / j: ${j}`
 * You might need to consult Google to see examples of nested for loops!
 */

function prompt12() {
  for (let i = 1; i <= 10; i++) {
    for (let j = 11; j <= 20; j++) {
      console.log(`i: ${i} / j: ${j}`)
    }
  }
}

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
// prompt12()

// 🌟 MAKE A COMMIT: "Complete prompt 12"

/*
 * Prompt 13:
 *
 * Using nested loops, print all the values inside the nested arrays.
 */

let nestedArrays = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i']
]

function prompt13() {
  for (const outerIndex in nestedArrays) {
    let stringOutput = ''

    for (const innerIndex in nestedArrays[outerIndex]) {
      stringOutput += `${nestedArrays[outerIndex][innerIndex]} `
    }

    console.log(stringOutput)
  }
}

// COMMENT IN THE BELOW LINE OF CODE TO TEST YOUR OUTPUT IN THE BROWSER!
prompt13()

// 🌟 MAKE A COMMIT: "Complete prompt 13"

///////////////////////////////////////////
// DO NOT MODIFY CODE BENEATH THIS LINE :)
///////////////////////////////////////////
if (!this.window) {
  module.exports = {
    prompt1,
    prompt2,
    prompt3,
    prompt4,
    prompt5,
    prompt6,
    prompt7,
    someNumber,
    prompt8,
    prompt9,
    prompt10,
    prompt11,
    prompt12,
    prompt13
  }
}
