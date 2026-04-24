//Calculate BMI
/*Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"*/

function bmi(weight, height) {
  let result
  let bmi = weight / (height*height)
  if(bmi <= 18.5) {
   result = "Underweight"
  } else if (bmi <= 25.0) {
   result = "Normal"
  } else if (bmi <= 30.0) {
   result = "Overweight"
  } else if (bmi > 30.0) {
   result = "Obese"
  }
  return result;
}

let finalBMI = bmi(80, 1.80)
console.log(finalBMI)