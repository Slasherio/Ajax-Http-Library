/**
 * THIS FILE CREATING FOR TESTING LIBRARY.
 * FOR TESTING USING Fake Online REST API for Testing and Prototyping
 * https://jsonplaceholder.typicode.com/
 */
const xhr = new EasyHttpRequest();

const data = {
    title: "Test request",
    body: "This is test text"
};

xhr.get('https://jsonplaceholder.typicode.com/posts', function(error, post) {
    if (error) {
        console.log(error);
    } else {
        console.log(post);
    }
});

xhr.post('https://jsonplaceholder.typicode.com/posts', data, function(error, post) {
    if (error) {
        console.log(error);
    } else {
        console.log(post);
    }
}); // => {"title": "Test request","body": "This is test text","id": 101}

xhr.put('https://jsonplaceholder.typicode.com/posts/1', data, function(error, post) {
    if (error) {
        console.log(error);
    } else {
        console.log(post);
    }
}); // => {"title": "Test request","body": "This is test text","id": 1}

xhr.delete('https://jsonplaceholder.typicode.com/posts/1', function(error, post) {
    if (error) {
        console.log(error);
    } else {
        console.log(post);
    }
}); // => Post Deleted