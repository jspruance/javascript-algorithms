// Max Character
// Given a string of characters, return the character that appears the most often.

const maxChar = str => {
  let charMap = {}

  const strArry = str.split('')

  strArry.map(item => {
    if (charMap[item]) {
      charMap[item]++
    } else {
      charMap[item] = 1
    }
  })

  // console.log(JSON.stringify(charMap))

  const entries = Object.entries(charMap);
  const entriesSorted = entries.sort((a,b) => a[1] - b[1]);
  console.log(`Most common char is: ${entriesSorted[entriesSorted.length -1][0]}`);
}

const resp = maxChar("Tis the season to be jolly fa la la la lzzzzzzzzzzzzzzzzzzzzzzzzz la la la la");