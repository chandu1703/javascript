console.log("hello");
//objects :non-primitive data type 
//contains data in key value

 //ways to create an obj

 let std={
    rollno:101,
    name:"chandu",
    contact:9999999,    
 }
 console.log(std);



//  //accessing values

 console.log(std.contact);  //one way   //preferred way
 console.log(std["name"]);       //second way



 let employee={
     name:"chandu",
     salary:50000,
     designation:"HR",
     displayEmpDetails:function(){
         console.log(this.name + " is earning "+this.salary + " at " + this.designation + " position");      
     }
 }
 employee.displayEmpDetails();

//second way pf creating a object

 let myObj= new Object();
 myObj.name="chandu";
 myObj.age=22;
 console.log(myObj);

//retreive all the keys and values

const keys=Object.keys(myObj);
console.log(keys);


const values=Object.values(myObj);
console.log(values);



//spread operator : It helps to destructure the elements => ...

let newObj={...employee,...myObj};
console.log(newObj);



let arr = [1,2,3,4,4,5];
let arr2 = ["a","e","i","o","u"];
let arr3=[...arr,...arr2];
console.log(arr3);