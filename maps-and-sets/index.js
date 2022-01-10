// console.log("hello world");

// let num=[1,2,1,1,3,4,5,10,15];
// console.log(num);

// //set : collection of unique data , we can never have duplicate elements


// let numbers = new Set();
// console.log("",numbers);

// let obj ={};
// console.log(obj);

// //REMOVING THE DUPLICATE ELEMENTS FROM AN ARRAY
// let name=new Set("hahaha");
// let num1=new Set(num);
// console.log(num1);

// //converting a set into an array

// let num2=[...num1,...name];   //destructing
// console.log(num2);  



//basic functions that set provide

let value=new Set();


//add function
value.add(12);
value.add("chandu");
value.add([1,2,3,4,5]);
value.add(false);
value.add({id:1,name:"chandu"});
console.log(value);

//has function 

console.log(value.has(2));
 //size function
console.log(value.size);

 

//delete 

value.delete("chandu");
console.log(value);

//clear function

value.clear();
console.log(value);
