console.log("I'm working for you Mr. Closterman")

// const countTrue = (arr) => {
//     return arr.filter(Boolean).length
// }

// console.log(countTrue([true, false, false, true, false]))
// // ➞ 2
// console.log(countTrue([false, false, false, false]))
// // ➞ 0
// console.log(countTrue([]))
// ➞ 0

// const reduntant = (str) => {
//     return () => str;
// }

// const f1 = redundant("apple")
// f1()
// //➞ "apple"
// const f2 = redundant("pear")
// f2() 
// //➞ "pear"
// const f3 = redundant("")
// f3() 
//➞ ""

// const REGEXP = /^$/;
// REGEXP.test("")//true

// eight data types
//Array, Object, String, Number, Boolean, Null, Undefined, Date, Big Int

// const dataType = (value) => {
// 	return Object.prototype.toString.call(value).slice(8,-1).toLowerCase();
// }

// console.log(dataType([1, 2, 3, 4]))// ➞ "array"
// console.log(dataType({key: "value"})) //➞ "object"
// console.log(dataType("This is an example string.")) //➞ "string"
// console.log(dataType(new Date()))// ➞ "date"

// const rangedReversal = (arr, start, end) => {
//   let previous = arr.slice(0, start)
//   let reversed = arr.slice(start, end + 1).reverse()
//   let next = arr.slice(end + 1);
//   return [...previous, ...reversed, ...next]
// }


// console.log(rangedReversal([1, 2, 3, 4, 5, 6], 1, 3))
// //➞ [1, 4, 3, 2, 5, 6]
// console.log(rangedReversal([1, 2, 3, 4, 5, 6], 0, 4))
// //➞ [5, 4, 3, 2, 1, 6]
// console.log(rangedReversal([9, 8, 7, 4], 0, 0))
//➞ [9, 8, 7, 4]


// const inclusiveArray = (start, end) => {
//     if(start > end) {
//         return start;
//     }
//     let inclusive = [];
//   for (let i = start; i < end + 1; i++) {
//     inclusive.push(i)
//     // console.log(inclusive)
//   }
//   return inclusive;
// }

// console.log(inclusiveArray(1, 5))
// // ➞ [1, 2, 3, 4, 5]
// console.log(inclusiveArray(2, 8))
// // ➞ [2, 3, 4, 5, 6, 7, 8]
// console.log(inclusiveArray(10, 20))
// // ➞ [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// console.log(inclusiveArray(17, 5))
// ➞ [17

// const countDigits = (arr, type) => {
//   if(type === 'odd') {
//     return arr.map(x => x.toString().split('').filter(y => y % 2 !== 0).length)}
//   else {
//     return arr.map(x => x.toString().split('').filter(y => y % 2 === 0).length)
//   }
// }

// console.log(countDigits([22, 53, 99, 61, 777, 8], "odd"))
// // ➞ [0, 2, 2, 1, 3, 0]
// countDigits([22, 53, 99, 61, 777, 8], "even")
// // ➞ [2, 0, 0, 1, 0, 1]
// countDigits([54, 113, 89, 10], "odd")
// // ➞ [1, 3, 1, 1]
// countDigits([54, 113, 89, 10], "even")
// ➞ [1, 0, 1, 1

//Important algorithims

// Create Closures
// function changeColor(color) {
//     return function () {
//     document.body.style.background = 'color';
// }     
//     }

// document.querySelector('#blue').addEventListener('click', () => changeColor('#0f62fe'))
// document.querySelector('#pink').addEventListener('click', () => changeColor('##ff7eb6'))
// document.querySelector('#green').addEventListener('click', () => changeColor('#42be65'))


//new Set
// function foodTruckFesitval(menus) {
//     let flatMenus = menu.flat();
    
//     let combinedMenu = new Set();
//     flatMenus.forEach(item => {
//         combinedMenu.add(item);
//     });
//     const menuNode = document.querySelector('#combined-menu');
//     for(let item of combinedMenu) {
//         let foodNode = document.createElement('li');
//         foodNode.innerText = item;
//         menuNode.appendChild(foodNode)
//     }
// }
// foodTruckFestival([['tacos', 'burgers'], ['Pizza'], ['burgers', 'fries']])



//G-function

// function* getStop() {
//     yield 'PoughKeepies'
//     yield 'NewBourough'
//     yield 'Yonkers'
//     yield 'Bronx'
//     yield 'Grand Central'
// }

// const nycTrainLine = getStop();
// const nextStopButton = document.querySelector('#next-stop');
// nextStopButton.addEventListener('click', () => {
//     let currStop = nycTrainLine.next();
//     if(currStop.done) {
//         console.log('We made IT!!');
//         nextStopButton.setAttribute('disabled', true);
//     } else {
//         console.log(currStop)
//     }
// })

// function numPermutations(letters) {
//   let total;
//   for (let i = 0; i < letters.length; i++) {
//     if(total === undefined) {
//         total = 1;
//         continue;
//     }    
//     total *= 1;
//   }
//   return total;
// }
// function numPermutations(letters) {
//     if(letters.length === 1) {
//         return 1;
//     }
//     return letters.length * numPermutations(letters.slice(1))
// }

// console.log(numPermutations('hello'));

// async function getUsers() {
//     let people = await fetch('https://randomuser.me/api/?results=5');
//     let data = await people.json();
//     const timeline = document.querySelector('#timeline');
//     data.results.forEach(person => {
//         let image = document.createElement('img');
//         image.src = person.picture.medium;
//         timeline.appendChild(image);
//     })
// }

// getUsers();

//Password Checker
// function checkPassword(password) {
//     let oneLowerCaseLetter = /(?=.+[a-z])/;
//     let oneUpperCaseLetter = /(?=.+[A-Z])/;
//     let oneDigit = /(?=.+[0-9])/;
//     let oneSpecialCharacter = /(?=.+[!@#$%^&*])/;
//     let minimumEightCharacters = /(?=.{8,})/;
//     let isValid =
//     oneLowerCaseLetter.test(password) &&
//     oneUpperCaseLetter.test(password) && 
//     oneDigit.test(password) && 
//     oneSpecialCharacter.test(password) &&
//     minimumEightCharacters.test(password);

//     return isValid ? 'Your password is valid' : 'Your password is invalid';
// }

// console.log(checkPassword('abc')) //invalid

//Recursive functions
// let count = 1;
// function recursiveFn() {
//     console.log(`Recursive ${count}`)
//     if(count === 10) return;
//         count++
//        recursiveFn();
// }

// console.log(recursiveFn());

// function oddArray(arr) {
//   let result = [];
//   function helperRecursiveFn(arr) {
//     if(arr.length === 0) return; //1
//     else if(arr[0] % 2 !== 0) result.push(arr[0]) //2
//   helperRecursiveFn(arr.slice(1)); //3
// }
// helperRecursiveFn(arr);
// return result;
// }

// console.log(oddArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//output-> [1, 3, 5, 7 , 9]


//Few expressions(notations) which represent the time complexity of an algo
// 0(1): Constant time complexity. This is ideal case.
// O (log n): Logarithimic time complexity. if log(n) = x. then
// it is same as 10^x;
// 0 (n): linear time complexity. Time increases with the number of
// inputs in a linear manner. for ex, if one input takes 1ms, 4 inputs will
// take 4ms to execute the algo;
// 0(n^2): Quadratic time complexity. this mostly happens in case of nested loops.
// 0(n!): Factorial time complexity. this is the worst case,
// which should be avoided.
// write your algo such that it can be represented by the first three notations.




//Time complexity of O(n^2) because nested loops
// function bubbleSort(array) {
//     const length = array.length;
//     for (let i = 0; i < length - 1; i++) {
//       for (let j = 0; j < length - 1 - i; j++) {
//         if (array[j] > array[j + 1]) {
//           [array[j], array[j + 1]] = [array[j + 1], array[j]]; // Swap elements
//         }
//       }
//     }
//     return array;
//   }
// console.log(bubbleSort[5, 3, 8, 4, 2])


//binary search
// function binarySearch(array, target) {
//     let left = 0;
//     let right = array.length - 1;

//     while(left <= right) {
//         const mid = Math.floor((left + right) / 2);
//  if(array[mid] === target) {
//     return mid; //Element found
//  } else if(array[mid] < target) {
//     left = mid + 1; //Search in the right half
//  } else {
//     right = mid - 1; //Search in the left half
//  }
//     }
//     return -1; //Element not found
// }


// const replace = (str, r) => {
//  return str.replace(new RegExp(`[${r}]`, 'g'), '#')
// }

// console.log(replace("abcdef", "c-e"))
// //➞ "ab###f"
// console.log(replace("rattle", "r-z"))
// //➞ "#a##le"
// console.log(replace("microscopic", "i-i"))
// //➞ "m#croscop#c"
// console.log(replace("", "a-z"))
//➞ "