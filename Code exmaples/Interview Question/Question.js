//-------------------------------Mpokket : Round 1 -------------------

// Question 1 :implement this:
obj.initializeVal(10).add(5).subtract(3).result()
obj.initializeVal(10).subtract(5).add(3).result()

// Question 2:

/*Given an integer array nums and an integer k, return the kth largest element in the array.
Note that it is the kth largest element in the sorted order, not the kth distinct element.
Can you solve it without sorting? 

Example 1:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Example 2:

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
*/

// --------------------------------Mercari Round 1:--------------------
// #1. Create a Tab UI in react. (15 min + 10min)
// #2. Given a list array, render it and a input box to filter the list, in vanilla js. (15 min + 10min)

//-------------coforge----------

//1. Write a function that finds all unique characters in a string and returns them as a set. Then convert the set back to a string(Use Map and Set).

// console.log(uniqueCharacters("aabbccddeeff")); // "abcdef"

// 2.  Write a function sum that takes any number of arguments and returns their sum using the rest operator. (use Rest and Spread Operators)

//console.log(sum(1, 2, 3, 4)); // Output: 10

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const uniqueCharacters = (value) => {
  let uniq = new Set([...value])

  return uniq
}

console.log(Array.from(uniqueCharacters('aabbccddeeff')).join('').toString())

const sum = (...args) => {
  let sum = 0

  sum = args.reduce((acc, key) => {
    acc += key
    return acc
  }, sum)

  return sum
}

console.log(sum(1, 2, 3, 5))
