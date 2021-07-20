var a = 12 ;

console.log(a);


function scopeFunction (){
    console.log(a);
}

scopeFunction();

//  console.log(nam());
/**
 * 
  একাটা function create করলেই একটা executional context create হয় 
  এবং সেখান থেকেই একটা scope create hoi.
  এটা parent scope থেকে এটা access নিতে পারে।

  function er উপরের অংশটা হচ্ছে গ্লোবাল আর ভিতের অংশ হচ্ছে ব্লক scope
  firstly, function tar নিজের ভিতরে ব্লক scope এ output খুজে সেখানে না পেলে 
  তার parent scope এ যায়

 */

/*    var c = 100;

   function scopeChecking(){
       console.log(c);  // main func er parent theKe access niYecHe 


       var x = 300;

       function y(){
           console.log(x);    
       }
       y();
       
       console.log(d); ///অর্থাৎ,বুঝায় যায় child থেকে parent কোনো access নিতে পারে না।

     function z(){
         var d = 400;
         console.log(x);
     }
     z();


     
    }
   scopeChecking();

 */
/****
  javascript এ function ব্যতীত আর কোনো way nei scope create করার 

  একটা child parent থেকে ACCESS NITE PARE BUT PARENT 
   child থেকে নিতে পারে না eTai lexical scoping
 */

// this tutorial understood from hm nayem -> scope and lexical scoping





var s = 6;

function outerScope(){
  console.log(d);
  
  function c(){
    var d = 3;
  }
  c();

  var b = 7 ;



  console.log(b);
}

outerScope();

































