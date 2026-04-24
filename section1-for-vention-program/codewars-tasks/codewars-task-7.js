//Vowel Count
/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/

function getCount(str) {
  let strArr = str.split('')
  let vowArr = ['a', 'e', 'i', 'o', 'u']
  let newArr = strArr.filter(item => vowArr.includes(item))
  let finalResult = newArr.length
  return finalResult;
}

let result = getCount("audhste")
console.log(result)