// Write a logic of the function based on these conditions:
// if familySize is four or less and the planned distance to drive is less than 200 miles, the function should return "Tesla"
// if familySize is four or less and the planned distance to drive is 200 or more, the function should return "Toyota Camry"
// if familySize is more than four, the function should return "Minivan"

let familySize = 4;
let plannedDistanceToDrive = 201;
let selectedCar;

function recommendedCar(familySize, plannedDistanceToDrive) {
    if (familySize <= 4 && plannedDistanceToDrive < 200) {
        selectedCar = 'Tesla'
        return selectedCar
    } else if (familySize <= 4 && plannedDistanceToDrive >= 200) {
        selectedCar = 'Toyota Camry'
        return selectedCar
    } else if (familySize > 4) {
        selectedCar = 'Minivan'
        return selectedCar
    }
}

console.log(recommendedCar(familySize, plannedDistanceToDrive));