
// ALL ABOUT JS CLASS
                            
/**
  A JavaScript class is not an object.
 It is a template for JavaScript objects.
 */
                
        
 class Person {
     //parent class
     constructor(name , age){
         this.name = name;
         this.age = age;
     }
     walk() {
        console.log(`${this.name} is walking on the street`);
  }
 }
               
class Cricketer extends Person{
    constructor(name , age , type , country){
        //sub class
        super(name , age); // super concat the parent function
        this.name = name;
        this.age = age;
        this.type = type;
        this.country = country;
    }
    sleep() {
        console.log(`${this.name} is sleeping on the bed`);
  }

  }


  const sakib = new Cricketer('sakib', 36,'all rounder','Bangladesh');

  console.dir(sakib);
  console.log(sakib.age);
  sakib.walk();
  sakib.sleep();
               





  //  some other parts of object oriented javascript 
//  getter and setter -> JavaScript can secure better data quality when using getters and setters.

                             
class Male {
    //parent class
    constructor(name , religion){
        this.name = name; // properties
        this.religion = religion;
    }
    eat(){ 
        // method
        console.log(`${this.name} has eaten sugar`);
    }

    get setReligion() { 
        // getter
        return "Muslim";
    }

    set setName(name){
        // setter baiRe theKe koNo internal Property ke joDi ami set korTe cai
        this.name = name;
    }
}


 const saib = new Male('jisan','Hindu');

saib.setName = 'seJan ahMed BayZid'; // jiSan value has changed by setter

 console.log(saib.name); // setter output

 console.log(saib.setReligion);  // getter output    // log e access korBo PrePerTyr motO but behave korBe method er MoTO

// static key word method   
                       
 
 
                      




































































































































































































































