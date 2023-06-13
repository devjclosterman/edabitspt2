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
function foodTruckFesitval(menus) {
    let flatMenus = menu.flat();
    
    let combinedMenu = new Set();
    flatMenus.forEach(item => {
        combinedMenu.add(item);
    });
    const menuNode = document.querySelector('#combined-menu');
    for(let item of combinedMenu) {
        let foodNode = document.createElement('li');
        foodNode.innerText = item;
        menuNode.appendChild(foodNode)
    }
}
foodTruckFestival([['tacos', 'burgers'], ['Pizza'], ['burgers', 'fries']])