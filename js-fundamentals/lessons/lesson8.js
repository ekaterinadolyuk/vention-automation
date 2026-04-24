// Declarative function - can be called earlier than it's declared
helloOne()
function helloOne() {
    console.log('Hello one!')
}
// helloOne()

// Anonymous function - cannot be called earlier than it's declared
var helloTwo = function() {
    console.log('Hello two!')
}

helloTwo()

//ES6 function syntax or arrow function. If there is 1 parameter, parentheses can be removed, i.e. item => {}
var helloThree = () => {
    console.log('Hello three!')
}
helloThree()

// Function with arguments
function printName(name, lastName) {
    console.log(name + ' ' + lastName)
}
printName('John', 'Smith')

//Function with return
function multiplyByTwo(number) {
    var result = number * 2
    return result
}

var myResult = multiplyByTwo(5)
console.log(myResult)

// import function
import { printAge } from '../helpers/printHelper.js'
printAge(5)

// import everything
import * as helper from '../helpers/printHelper.js'
helper.printAge(10)
