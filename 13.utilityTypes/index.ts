//if we dont want to change some particular properties from obj use utility
//we can't add as const , because its type
//if we need to make some properties const can use readonly
type Users = {
   readonly name : String,
    age : number
} 

//if we need to make this type completely readonly when we use this in an object
type Users1 = {
     name : String,
     age : number
 } 
 
const userDetails : Readonly<Users1>={
age : 30,
name : 'Ansa'
}

// userDetails.age = 40 cant do this

//if we need only partialy need properties
type Users2 = {
    name : String,
    age : number
} 

const userDetails1 : Partial<Users2>={
age : 30,

}
userDetails1.age = 50 // i can do this because of partial


//if all the fields require
type Users3 = {
    name : String,
    age : number,
    salary : number
} 

const userDetails3 : Required<Users1>={
age : 30,
name : 'Ansa'
}

//if need only one propety ot pick
const userDetails4 : Pick<Users1 , "name" | "age">={
    age: 20,
    name : 'Ansa'
    }


//if we want to avoid one or two property then use omit
const userDetails5 : Omit<Users3 , "salary"> ={
   age : 90,
   name : "aaanv"
}


//if we want to omit from union type then use exclude
type StatusType = "pending" | "completed" | "failed"
const status1: Exclude<StatusType , "completed"> = "failed"

//if we are not sure about the keys and values then use record
type Food = Record <string, any>
const food : Food ={
    PIZZA : 'new one',
    RATE : 100,
    quantity : 40
}