type Details1 = {
    name : string;
    age : number;
    salary : number;
    getName : ()=> void
    
}

let userDetails1 : Details1={
    age: 20,
    name : 'Ansa',
    salary : 20000,
    getName(){
        console.log(this.name)
    }
}