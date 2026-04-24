// logical "AND" operator
console.log(true && false) // all values have to be TRUE for the expression to be TRUE

// logical "OR"
console.log(false || false) // any value should be TRUE for the expression to be TRUE

var ageIsMoreThanEighteen = true
var isUSCitizen = false

var eligibilityForDriversLicense = ageIsMoreThanEighteen || isUSCitizen
console.log('This customer is eligible for DL: ' + eligibilityForDriversLicense)

// logical "NOT" operator
console.log(!true)
console.log(6 !== 10)