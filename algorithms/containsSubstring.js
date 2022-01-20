// Write a function to determine whether or not a string contains a given substring

const str = "Learn how to play jazz and improvise"
const subStr = "play jazz"

const containsSubstring = (str, subStr) => {
  let match = []

  const strArry = str.split('')
  const subStrArry = subStr.split('')

  let subStrPointer = 0

  strArry.forEach(item => {
    if (item === subStrArry[subStrPointer]) {
      match.push(subStrArry[subStrPointer])
      subStrPointer++
    }
  })

  const matchStr = match.join('')
  let matchFound = matchStr === subStr ? true : false

  return matchFound
}

console.log(containsSubstring(str, subStr))