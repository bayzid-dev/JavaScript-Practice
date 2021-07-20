// EVENT LOOP AND IT'S FUNCTION
/**
 * JAVASCRIPT যখন কোনো কোড execute করে তখন browser e call stack নামের 
 * এর একটা অংশ থাকে সেটাতে code gulU one by one stack hoi and 
 * এটা output প্রদর্শন করে lifo (last in first out) system অনুযায়ী 

 * 
 * এটা যখন কোনো setTimeout/async দেখে তখন সেটা call stack accept koRE 
 * tar assistant তথা Web API(In Browser)/c++ API(node js) এর একটিতে
 * পাঠিয়ে দেই।  তখন আবার Web API SETA instant accept না করে আরেক জন
 *  assistant -> callback Queue (যেটা fifo -> first in first out) এর কাছে পাঠিয়ে দেই 
 * আর যখন call stack তার সব value Browser e output দেখিয়ে যখন সে খালি হয়ে যায় 
 * তখন ই CallBack Queue সেটাকে processed করে EVENT ER মাধ্যমে যানান দেই 
 * এবং call stack e value send koRe then output হিসেবে প্রদর্শন করে। thats it.
 * 
 * call Stack and CallBack Queue এই দুইটার মধ্যে সম্পর্ক তৈরী করে এবং এদের নজর রাখে event loop
 * 
 */