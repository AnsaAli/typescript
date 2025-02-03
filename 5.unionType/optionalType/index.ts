
//union operator
let age : string | number 

let salary : (string | number)[] = [10,"www",40,"ggg"]

let slary1 :(string | number | boolean)[] = [20, true , 'aaa']

//optional if we dont need one property we can
type Details1 = {
    name : string;
    age : number;
    salary? : number;//by adding ? will bre optional
    getName? : ()=> void //by adding ? will bre optional
    
}

let userDetails1 : Details1={
    age: 20,
    name : 'Ansa',
    salary : 20000,
   
}