// Write a function to flatten a jagged array
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

const result = flatten(inputArry)

console.log(result)