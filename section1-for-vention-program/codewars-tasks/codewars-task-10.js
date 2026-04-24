//Descending Order
/*Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number.*/

function descendingOrder(n){
  return Number(n.toString().split('').sort().reverse().join(''))
}

let result = descendingOrder(516874)
console.log(result)
