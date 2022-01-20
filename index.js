const arry = [13, 4, 39, 31, 40, 302, 69, 256, 48];
const arryA = ["Seattle", "Krasnoyarsk", "Miami", "Berlin", "Oslo"];

// sort
const arryASorted = arryA.sort();
console.log(`Sorted array: ${arryASorted}`);           // Sorted array: Berlin,Krasnoyarsk,Miami,Oslo,Seattle

const arrySorted = arry.sort((a,b) => a-b);
console.log(`Sorted array 2: ${arrySorted}`);          // Sorted array 2: 4,13,31,39,40,48,69,256,302

// clone an array
const arryClone = arry.slice(0);
console.log(`Cloned array: ${arryClone}`);             // Cloned array: 4,13,31,39,40,48,69,256,302

// reverse an array
const arryRev = arry.reverse();
console.log(`Reversed array: ${arryRev}`);             // Reversed array: 302,256,69,48,40,39,31,13,4

// slice example
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const fruitsSliced = fruits.slice(1, 3);
console.log(`Fruits array: ${fruits}`);                // Fruits array: Banana,Orange,Lemon,Apple,Mango
console.log(`Fruits array sliced: ${fruitsSliced}`);   // Fruits array sliced: Orange,Lemon

// splice example
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log(`fruits2 array: ${fruits2}`);              // fruits2 array: Banana,Orange,Apple,Mango
fruits2.splice(2, 0, "Lemon", "Kiwi");
console.log(`fruits2 spliced example: ${fruits2}`);    // fruits2 spliced example: Banana,Orange,Lemon,Kiwi,Apple,Mango
fruits2.splice(2, 2);
console.log(`fruits2 spliced example 2: ${fruits2}`);  // fruits2 spliced example 2: Banana,Orange,Apple,Mango

// isArray
console.log(Array.isArray(arry));  // true
console.log(Array.isArray(9));  // false

// every - tests if every element in array meets a condition
console.log([12, 5, 8, 130, 44].every(x => x >= 10)); // false
console.log([12, 54, 18, 130, 44].every(x => x >= 10)); // true

// find - The find() method returns the value of the first element in the array that satisfies the condition
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
console.log(found);  // 12

// includes - returns bool, whether or not element exists in array
const array2 = [1, 2, 3];
console.log(array2.includes(2));  // true

// map - iterate over an array and transform values
const newArry = [1,2,3].map((element, index) => {
  return element + index;
});
console.log(newArry);            // [1,3,5]

// filter -  creates a new array with all elements that pass the test implemented by the provided function.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);             // ["exuberant", "destruction", "present"]


// Javascript algorithms
// *********************
// *********************

// string reversal 1
const str = "Welcome to Krasnoyarsk";
const strArry = str.split('');
strArry.reverse();
console.log(strArry.join(''));

// string reversal 2
const str2 = "Welcome to Zelenogorsk!";
const reverse = str => str.split('').reduce((acc, item) => item + acc);
const str2Rev = reverse(str2);
console.log(str2Rev);


// flatten a jagged array
const inputArry = [1,2,[3,4,5], 6, 7, [8,9,[10,11]], 12]



const flatten = input => {
  //console.log(input)
  const flattenedArry = []

  const innerFlatten = arry => {
    arry.forEach(item => {
      if (Array.isArray(item)) {
        innerFlatten(item)
      } else {
        flattenedArry.push(item)
      }
    })
  }

  innerFlatten(input)
  

  return flattenedArry
}

// const result = flatten(inputArry)

// console.log(result)

// Fizz Buzz
/*
Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, 
print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.
*/
const fizzbuzz = number => {
  for (let i = 0; i < number; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      console.log('fizz buzz')
    } else if (i % 2 === 0) {
      console.log('fizz')
    } else if (i % 3 === 0) {
      console.log('buzz')
    } else {
      console.log(i)
    }
  }
}

// setTimeout(() => { fizzbuzz(30) }, 2000);

// Max Character
// Given a string of characters, return the character that appears the most often.

const maxChar = str => {
  const charMap = {};
  const strArry = str.split(' ').join('').split('');
  strArry.map(char => {
    if(charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });
  const entries = Object.entries(charMap);
  const entriesSorted = entries.sort((a,b) => a[1] - b[1]);
  console.log(`Most common char is: ${entriesSorted[entriesSorted.length -1][0]}`);
};

maxChar("Tis the season to be jolly fa la la la lzzzzzzzzzzzzzzzzzzzzzzzzz la la la la");
