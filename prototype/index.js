// //any var which gets created using any constructors function . then that var will persists properties that cinstrucotr
// //function provides

// //Ways of creating objects
// //using {}
// //using object.create()
// //using object constructor
// //using function constructor



// //creating our own constructor using function
// function Person(name,age,city) {
//     this.name=name;
//     this.age=age;
//     this.city=city;
//     this.batting="left hand";
// }

// let person1=new Person("chandu",22,"hyd");
// console.log(person1);
// let person2=new Person("dheeru",17,"chennai");
// console.log(person2);



// //adding another property to one of the object
// person1.batting="right hand";
// console.log(person1);



// //to add properties inside function constructor

// Person.prototype.state="telangana";
 



// Prototype Chaining: 
// person1 or person2 or person3 are the objects got created using function constructor Person. So their master or parent is Person constructor.

// Each object, array, etc always contains a Prototype property from which we can access all the inbuilt functions.

// In case od person1, its prototype level 1 is Person function constructor then prototype level 2 is Object constructor function and this chain goes on like this until you dont get value of __proto__ as null. This concept is known as Prototype chaining.





// let obj={};
// obj.name="john",
// obj.age=24
// console.log(obj);
// obj.name="smith";
// console.log(obj);
// delete obj.name;
// console.log(obj);



// let salaries = {
//     John: 100,
//     Smith: 150,
//   }
// var sum=salaries.John+salaries.Smith;
// console.log(sum);  


let menu = {
    width: 200,
    height: 300,
    title: "My menu",  }

   function multiplyNumeric(obj){
    obj.width=2*obj.width;
    obj.height=2*obj.height;
    obj.title=obj.title;
    console.log(obj);
   }

  multiplyNumeric(menu);




  let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    ssn: '123-456-2356'
}


let job = {
    jobTitle: 'JavaScript Developer',
    location: 'USA'
}

let arr={...job,...person};
console.log(arr);
