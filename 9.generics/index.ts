//using generics we can pass mutiple type arguments in a single function
function add<T>(num1 : T) : T{
    return num1
}
add <string>("22")
add <number>(22)
add <boolean>(true)



type UserDetails={
    name : string;
    age : number
}
const userDetails : UserDetails ={
    name : 'Ansa',
    age : 20
}

type AdminDetails= {
    first : string;
    last : number
}
const adminDetails : AdminDetails={
    first : 'Ansa',
    last : 20
}
function getData<T>(details : T) : T{
    return details
}
let res1 = getData<UserDetails>(userDetails);
//with the above i can acces all the types in the UserDetails
res1.age
res1.name

let res2 = getData<AdminDetails>(adminDetails);
res2.first;
res2.last;

//if two types has same properties then we dont need to repeat that again
type User = {
    name : string;
    age : number
}
type Admin = User & {
    role : string
}
let user : User = {
    name : "Ansa",
    age : 20
}
let admin : Admin = {
    age : 20,
    name : 'Admin',
    role : 'admin'
}


//if it is interface
interface User1 {
    name : string;
    age : number
}
interface Admin1 extends User1{
    role : string
}

let admin1 : Admin1= {
age: 23,
name: 'An',
role : 'admin'
}