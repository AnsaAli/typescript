function operations1(num1 : number, num2 : number){
    return num1 + num2
}
operations1(2,2)

//if i also want to add the string then 
function operations2(num1 : number | string, num2 : number | string){
    if(typeof (num1) === "string" || typeof num2 === "string"){
        return num1 + ""+ num2
    }
    return num1 + num2
}
operations2("2","3")
//above function is override, because we cannot use any other types other than the specific type we have added to that function

//above code is not the efficient, in order to overcome this we are using function overloading
function operations3(num1 : any, num2 : any){
    return num1 + num2
}
//in the above function we vcan add any types of numns
operations3(1,2)
operations3(1,'2')
operations3('1','2')
operations3('1',true)

//if we wnat we can more specify the types
function operations4(num1 : number, num2 : number) : number;
function operations4(num1 : number, num2 : string) : string;
function operations4(num1 : any, num2 : any){
    return num1 + num2
}
operations4(1,2)
operations4(1,'2')