
/// javascript class making/constructor patterns method
// just awesome practice

/// we make a class object using new keyword

function person (name,email) {
    this.name = name;
    this.email = email;
};

// person ();
var p1 = new person('Bayzid','sejanahmedbayzid@gmail.com');
var p2 = new person('Nishad','NishadAhmed@gmail.com');
var p3 = new person('Rasel','Rasel@gmail.com');

 var totalPerson = [p1,p2,p3];

// console.log(p1.name,p1.email);
//console.log(p1,p2,p2);  //////// it's created an object in function #


totalPerson.forEach(function (person) {
    console.log(person.email);
})










// 2nd practice

function Student ( name , hobby , certificate , age ) {
    this.name = name;
    this.hobby = hobby;
    this.certificate = certificate;
    this.age = age;
};
// without new keyword, this doesn't work
// and it's create an amazing object

var St1 = new Student ('Bayzid','learning code' , 'HSC' , '18') ;
var St2 = new Student ('Nishad','Reading Book' , 'SSC' , '16') ;
var St3 = new Student ('Jahed','Motorbike Riding' , 'HSC' , '19') ;
var St4 = new Student ('Hanif','Reading Newspaper' , 'HSC' , '18') ;


var totalStudent = [St1,St2,St3,St4];


console.log(St1,St2,St3,St4);




















































































































































































































































