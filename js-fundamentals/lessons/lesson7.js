//Loops

// for(statement1 (what = variable); statement2(how long do we want to run this loop); statement3(what to do after each cycle)){
// }


// for loop (for i loop)
for(let i=0; i < 5; i++) {
    console.log('Hello World' + i)
}

//'for of' loop - print all values
var cars = ['volvo', 'toyota', 'tesla']

for(let car of cars) {
    console.log(car)
    if(car == 'toyota'){
        break // stop the loop when value = 'toyota'
    }
}

//ES6 syntax for each loop '.forEach method' - same as 'for of' loop
cars.forEach(car => {
    console.log(car)
})