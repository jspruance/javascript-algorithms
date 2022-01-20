// Implement a merge sort algorithm

const arry = [4, 8, 7, 2, 11, 1, 3]

const merge = (left, right) => {

  console.log(`left :: ${left}`)
  console.log(`right :: ${right}`)
  
  let mergedArry = []

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      mergedArry.push(left.shift())
    } else {
      mergedArry.push(right.shift())
    }
  }

  return [...mergedArry, ...left, ...right]
}

const mergeSort = arry => {
  if (arry.length < 2) return arry

  const half = arry.length / 2
  const left = arry.splice(0, half)

  return merge(mergeSort(left), mergeSort(arry))
}

const result = mergeSort([7, 1, 8, 5, 2, 6, 10, 256, 24, 36, 66])

console.log(result)