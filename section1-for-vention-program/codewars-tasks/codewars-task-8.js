//Reverse words
/*Complete the function that accepts a string parameter, and reverses each word in the string. 
All spaces in the string should be retained.*/

function reverseWords(str) {
  let strArr = str.split(' ')
  let newArr = []
  for (let i = 0; i < strArr.length; i++) {
    newArr.push(strArr[i].split('').reverse().join(''))
  }
  return newArr.join(' ')
}

let result = reverseWords('This is an example!')
console.log(result)