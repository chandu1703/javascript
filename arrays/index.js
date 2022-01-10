console.log("hello");



// let a = "chandu";

// let cricket=[1,"chandu","side armer"];    //array
// let employee=[2,"akhil","batsman"];
// //  for(var i=0;i<=2;i++){
// //  console.log(user[i]);
// //  }
// console.log(user);



// //length of an array
// const len=cricket.length;
// const len1=employee.length; 
// console.log(len);
// console.log(len1);



// let friends=["chandu","rahul","prashanth","tharun","sravan"];
// console.log(friends);

// const len=friends.length;
// console.log(len);

// console.log("friends[0]",friends[0]);
// console.log("friends[1]",friends[1]);
// console.log("friends[2]",friends[2]);
// console.log("friends[3]",friends[3]);
// console.log("friends[4]",friends[4]);




//arrays methods


//push and pop  
// let vowels=["a","e","i","o"];
// vowels.push("u");
// console.log(vowels);

// vowels.pop();
// console.log(vowels);



// //shift and unshift

// vowels.shift();
// console.log(vowels);

// vowels.unshift("a");
// console.log(vowels);

//some and every functions::::::::

// let arr=[1,2,3,4,5];
// const value =arr.some(a=>a%2==0);    //returns true if any one or some of the elements gets satisfied
// console.log(value);

// const value1=arr.every(n=>n%2==0);
// console.log(value1);                //returns true if every elements satisfies

//ways of creating functions:::::::::
//1.regular functions

// function functionName() {
//     console.log("chandu");
// }
//   functionName() ;


// //named functions

// const a=function(){
//     console.log("sowmya");
// }
// a();

//arrow functions::::::::

// const b=()=>console.log("chandu");
// b();

// const b=(cb)=>{
//     console.log("hello");           
//      cb();           //callback function // here cb as a parameter executes the functionName 
// }
// b(functionName);


//map:helps you to manipulate all the items in an array
//reduce:helps u to use all the elements in an array and return a single value
//filter:applies a condition on all items and returns a new array



let salary=[1000,2000,3000,40000,500000];

//filter out the salary greater than 3000
// let newsalary=salary.filter(a=>a>3000);      // we can use any variable in filter to access array elements
// console.log(newsalary);

//double the salary using map

// let doubleSalary=salary.map(x=>x*2);
// console.log(doubleSalary);


//in one line 
 
// let newsalary=salary.filter(a=>a>3000).map(a=>a*2);
// console.log(newsalary);


//question:array of 1 to 10 and add 1 to all the even values
// let arr=[1,2,3,4,5,6,7,8,9,10];
// let arr1=arr.filter(n=>n%2==0).map(n=>n+1);
// console.log(arr1);

//reduce function
//find total of all salaries
//sum:accumulator
//n:current value
//0:initial value
var total=salary.reduce((sum,n)=>sum+n,0);
console.log(total);




//loops in arrays

// let arr=[1,2,3,4,5];

// for (let index = 0; index < array.length; index++) {
     
//     console.log(arr[index]);
// }


//for in , for of
// const num=[1,2,3,4,5];

// for (const c in num) {              //returns indexes
//           console.log(c);
//     }


//     for (const c of num) {          //returns elements of array
//         console.log(c);
//   }

// const num=[1,2,3,4,5];
 
// const total=num.reduce((multiply,a) =>multiply=multiply*a,1);
// console.log(total);




// //for each
// const salary=[2000,5000,6000,1000];
// // console.log("before",salary);
// // salary.forEach(element => {
// //     element=element*2;
// //     console.log(element);
// // });
// // console.log(salary);



const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.splice(2, 3,"chandu","sowmya");
console.log(fruits);