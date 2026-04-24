export function printAge(age) {
    console.log(age)
}

class CustomerDetails {
    printFirstName(firstName) {
        console.log(firstName)
    }
    /**
     * this method will print the Last Name
     * @param {string} lastName 
     */
    printLastName(lastName) {
        console.log(lastName)
    }
}

//below it's object that represents the instance of the class
export const customerDetails = new CustomerDetails()