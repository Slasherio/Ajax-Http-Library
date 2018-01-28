/**
 * THIS FILE CREATING FOR TESTING LIBRARY.
 * FOR TESTING USING Fake Online REST API for Testing and Prototyping
 * https://jsonplaceholder.typicode.com/
 */
const http = new EasyHttpRequest;

const userData = {
    "name": " Graham",
    "username": "Bred",
    "email": "Sincere@april",
}

//GET
http.get("https://jsonplaceholder.typicode.com/users")
    .then(data => console.log(data))
    .catch(error => console.log(error))

//POST
http.post("https://jsonplaceholder.typicode.com/users", userData)
    .then(data => console.log(data))
    .catch(error => console.log(error))

//PUT
http.put("https://jsonplaceholder.typicode.com/users/2", userData)
    .then(data => console.log(data))
    .catch(error => console.log(error))

//DELETE    
http.delete("https://jsonplaceholder.typicode.com/users/2")
    .then(data => console.log(data))
    .catch(error => console.log(error))