//fetch a user and log their name

// with promise
let promise = fetch('https://jsonplaceholder.typicode.com/users/1')

promise.then((response) => {
    let promise2 = response.json()
    promise2.then((user) => {
        console.log(user.name)
    })
})

// with async/await
async function fetchWithAsync() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    let user = await response.json()
    let name = user.name
    console.log(name)
}

fetchWithAsync()

// with catch for error handling
let promise3 = fetch('https://jsonpldfghjklaceholder.typicode.com/users/1')

promise3.catch((response) => {
    console.log(response)
})

//with async/await for error handling
async function fetchWithCatch() {
    try {
        let response = await fetch('https://jsonplacehohdfh456lder.typicode.com/users/1')
    } catch (error) {
        console.log(error)
    }
}

fetchWithCatch()