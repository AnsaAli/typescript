interface Details {
    name : string;
    age : number;
    salary : number;
    getName : ()=> void
    
}

let userDetails : Details={
    age: 20,
    name : 'Ansa',
    salary : 20000,
    getName(){
        console.log(this.name)
    }
}

let adminDetails : Details={
    age : 23,
    name : "Admin",
    salary : 30000,
    getName() {
        console.log(this.age)
    },
}