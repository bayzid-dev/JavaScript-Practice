var myBook = {
    name : 'functional javascript',
    author : 'sejan ahmed bayzid',
    Page : 120,
    color :'marron',

    print: function() {
        console.log(this.name ,  this.Page , this.author , this.color);
} // if i write a function inside the object then object will be a method.
    
}


// console.log(myBook);
myBook.print();


// to show the result smartly dot notation should use
console.log('Book Name:', myBook.name , 'author :' ,myBook.author);



console.log(myBook);