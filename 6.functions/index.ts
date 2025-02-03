type Data={
    name : string;
    age? : number;
    salary : (string | number)[];
    person? :()=> void
}

let userData : Data ={
   name : "Ansa",
   age : 70,
   salary : [100,"11111"],
 
}

let adminData : Data ={
    name : "Admin",
    age : 70,
    salary : [10110,"11111"],
  
 }
 

function gerData (userData : Data){

    return userData.name
}
gerData(userData)


function getAllData(userData:Data , adminData :Data){

    console.log(userData.age, adminData.name)
}
getAllData(userData, adminData)


//to create a function by passing object inline
function getAllDataInline({name,age} : {name : string, age : number}){

}

//if i want to pass like below, then i need to define the function like above
getAllDataInline({name : 'Ansa', age : 30})

//to define the return type, need to specify
function returnTypeDefine(userData: Data) : string{
 return userData.name
}

let newData = returnTypeDefine(userData);
//with this we can acess all the return type methods
//in this case we are returning string, so we can do all the string operations
newData.charAt(0)
newData.slice();


//we can also return the custome type, 
type NewData={
    name : string;
    age? : number
}
function returnCustomeType(userData : Data) : NewData{
    return userData
}