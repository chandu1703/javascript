// // console.log("hello");


// function even_numbers(){
//     let i=1;
//     while(i<=20){
//         console.log(i*2);
//         i++;
//     }
// }
// even_numbers();   //calling or revoking function


//parametric functions

// // addingtwono(12,54);     
// function addingtwono(a,b) {    //parameters
//     console.log(a+b);
// }
// addingtwono(12,14);          //arguments


//functions with return statement


// function lastdigit(n){
//      const value=n%10;
//      return value;       //as we are using return statement here
// }
// const value=lastdigit(55);   //always store the value in  the variable and print it 
// console.log(value);


//different kind of  function:3 types

//regular functions (with and without para , return)

//function expression: assigning a function to a var

const a =function(){
    return 1;
}
console.log(a());

//arrow function

const b =()=>{
    return 1;
}
console.log(b());





// shadowing in JS
var x =10;

function A(){
    var x=20;
         console.log(x);
    function B(){
        var x=30;
        console.log(x);
    }
    B();
}
A();    
console.log(x);



