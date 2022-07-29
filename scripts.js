//-------use the below website--------
//-------https://blog.webdevsimplified.com/2022-01/js-fetch-api/--------


// To see if fetch returns a promise and fetch is always successful unless when api is invalid
console.log(fetch('https://jsonplaceholder.typicode.com/users'))

// To  get the data in the api
fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => console.log(data))


  // To get specific data in api and handle error
  fetch("https://jsonplaceholder.typicode.com/users/3")
  .then(res => {
    console.log('success') 
    console.log('Not successful') 
    return res.json()
  })
  .then(data => console.log(data))
  .catch(error => console.log('error'))

  // Responses status
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => {
    console.log(res.ok) // true
    console.log(res.status) // 200
    return res.json()
  })

  //-----Fetch Options---
  // ---method option---[GET, POST, PUT, DELETE]

  //using POST
  fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  //NB:The body does not accept objects so if you want to pass JSON to your API you must first convert it to a string.
  body: JSON.stringify({ name: "Clementine Bauch" }),
  headers: { "Content-Type": "application/json" }
})
.then(res => res.json())
.then(data => console.log(data))
 
