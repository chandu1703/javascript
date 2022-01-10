//bind,call,apply in JS:different ways of calling a function
 
//obj for reference

let user={
    name:"chandu",
    age:22,
    place_of_birth:"hyderabad",
}
let user2={
    name:"dheeru",
    age:17,
    place_of_birth:"secunderabad",   
}

//this is without bind,call,apply
// function userdetails(c) {
//     console.log(c);
//     console.log(c.name+" is "+c.age+" old.");
// }

// userdetails(user);
// userdetails(user2);


//using bind,call,apply
function userdetails(state,country) {
console.log(this);
console.log(this.name+" is "+this.age+" old." , state,"",country);
}

userdetails.call(user,"ts","india");
userdetails.apply(user2,["AP","india"]);



//bind

const newfunc=userdetails.bind(user);
newfunc("Chennai","India");




//first class function ::::::::
//these are those functions
//can be passed as a arguement to a function 
//can be returned from a function
//can be assigned to a variable

//can be passed as a arguement to a function 
function b(myfunc) {
    myfunc()
}
function a() {
    console.log("A");
}
b(a);

//can be returned from a function
function displayuser() {
    return function(){
        console.log("display user");
    }
}
//can be assigned to a variable
const a =function(){
    console.log("hello");
}


//higher order function::::
//1.which takes a function as argument
//2.which can return a x