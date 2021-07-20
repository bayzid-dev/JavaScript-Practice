/// XMLHTTPREQUEST OBJECT IN JAVASCRIPT

/* 
The XMLHttpRequest object can be used to exchange
 data with a web server behind the scenes. 
 This means that it is possible to update parts of a web page, 
 without reloading the whole page.

 request type => get , post , put , delete , optons , head

 get -> যেকোনো ডাটা পেতে get
 post -> অন্য কোনো server এ data দিতে
 

 XMLHTTPREQUEST SYNTAX =>     variable = new XMLHttpRequest();

Fetch API instead of the XMLHttpRequest Object can be used
its can do the same with simple way

*/

const getButton = document.getElementById('get-button')
const sendButton = document.getElementById('send-button')


const getData = function () {
    
    const xhr = new XMLHttpRequest();
    xhr.open("get","https://jsonplaceholder.typicode.com/todos/1")
    xhr.responseType = "json";
    xhr.send();

    xhr.onload = function(){
        const result = xhr.response;
        console.log(result);
    };
};

const sendData = function () {
    const xhr = new XMLHttpRequest();
    xhr.open("get","https://jsonplaceholder.typicode.com/todos/1")
    xhr.responseType = "json";
    xhr.send();

    xhr.onload = function(){
        const result = xhr.response;
        console.log(result);
    };
};

getButton.addEventListener('click', getData);
sendButton.addEventListener('click', sendData);