
// about This keyWord
/**  the rule of this key of js
 * 
 * 1. implicit binding
 * 2. explicit binding
 * 3. new binding 
 * 4. window binding
 */

// amrA janI objEct properties gulUke access korTe hoi dot notation use koRe



 // 1. implicit binding

 var Bayzid = {
     name : 'bayZid',
     grade : 11,
    about : function () {
        console.log(this.name);
    }
 }

 Bayzid.about();

            

 // 2nd

 var person = function(name , age ){
     return {
        name : name,
        age : age,
        print : function () {
            console.log(`${this.name} is a brilliant boy in programming`);
        },
     }
 }    
 var sejan = new person('sejAn Ahmed', 18);
 sejan.print(); 
 

 // 1.(implicit bng)bujHar upAY hoLo f kotHai call hoyEchE and dot er ageA ki ache
 // 14m e in class
 

// 3rd example of rule 1


var person = function(name , age ){
    return {
       name : name,
       age : age,
       print : function () {
           console.log(`${this.name} is a brilliant boy in programming`);
       },
       father : {
           name : 'JaHir AlaM',
           printName : function(){
              console.log(this.name);
           }
       }
    }
}
    
var sejan = new person('sejAn Ahmed', 18);
sejan.father.printName();

             

















