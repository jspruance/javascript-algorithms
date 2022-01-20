// Write a function to remove duplicates from an array

const arry = [1, 2, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 9, 9, 9, 10, 10]

const dedupe = arry => {
  const dedupedArry = []

  arry.forEach(item => {
    if (dedupedArry.includes(item)) {
      console.log('the item already exists')
    } else {
      dedupedArry.push(item)
    }
  })

  return dedupedArry
}

const resp = dedupe(arry)
console.log(resp)