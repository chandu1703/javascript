// console.log("hello");
   
// conditional statements

// // only one condition
// const ageOfPerson = 19;

// if (ageOfPerson > 18) {
//     console.log("eligible to vote");
// }else{
//     console.log("not eligible to vote");
// }

// 2 conditions

// const a=1;
 

// if (a>=b && a>=c) {
//     console.log("a is big");
// }else if (b>=c && b>=a) {
//     console.log("b is bigger ");
// }else{
//     console.log("c is bigger");
// }

const d =2;
switch (d) {
    case 1:
         console.log("monday");
         break;
    case 2:
         console.log("tuesday");
         break;
    case 3:
         console.log("wednesday");
         break;
    case 4:
         console.log("thursday");
         break;
    case 5:
         console.log("friday");
         break;
    case 6:
         console.log("saturday");
         break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("default");
        break;
}
const A=10;
const B =11;
const ch="-" ;
	var result;
	switch(ch){
	  case "+" :
	   result = A+B;
	   break;
	     case "-" :
	   result = A-B;
	    break;
	     case "*" :
	    result = A*B;
	   break;
	     case "/" :
	    result = A/B;
	    break;
	    
	    default:
	    console.log("default");
	    break;
     }
     console.log(result);