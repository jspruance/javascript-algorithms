/* Fizz Buzz
 * 
 * Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, 
 * print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.
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


fizzbuzz(30)