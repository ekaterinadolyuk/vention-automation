//objects

var customer = {
    firstName: 'John',
    lastName: 'Smith',
    car: ['volvo', 'toyota', 'tesla']
}
//Dot notation
customer.firstName = 'Mike'
//Bracket notation
customer['lastName'] = 'Silver'
console.log(`${customer.firstName} ${customer.lastName}`)

//arrays
var car = ['volvo', 'toyota', 'tesla']
car[1] = 'BMW'
console.log(car[1])
console.log(customer.car[0])