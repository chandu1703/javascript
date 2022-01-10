//setTimeout: when u are giving time interval in this function , it will be in ms(milli function)

//setTimeout(callback,time-interval)

// setTimeout(()=>{
//     console.log("chandu");
// },2000);


//example 1:

// let arr=[3,2,3,4,5];
// for(let i=0;i<arr.length;i++){
//     setTimeout(()=>{
//         console.log(arr[i]);
//     },arr[i]*1000);
// }



//closure::::combination of inner function and lexical environment created by inner function

// we are able to access this variable inside inner function bcoz of closure

function outer(){
    let a="chandu";
    function inner(){
        console.log(a);
        console.log(typeof(a));
    }
    inner();
}
outer();

// settimeout 
// web api function  : it does not gets executed directly by your JS engine, it gets executed using event loop.


// this function will be sent to the callback queue
//  once your complete js code execution is done which means your execution context is empty after that event loop will start looking towards your callback queue and will pass this function to the execution context


//  event loop always keep an eye on call stack, the moment it gets empty , it will push the function from callback queue to the call stack

function chandu(){
    setTimeout(()=>{
            console.log("chandu");
         },0);
         console.log("tillu");
}
chandu();