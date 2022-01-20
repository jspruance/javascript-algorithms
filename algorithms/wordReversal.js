// replace the chars in each word, but leave the words in the current order

const reverseWordChars = str => {
  const reversedStr = str.split(' ').reverse().join(' ').split('').reverse().join('')
  return reversedStr
}

const resp = reverseWordChars('I am a good boy')
console.log(resp)