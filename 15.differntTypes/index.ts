//any type is not recommended
//if we use any, all the benefits if ts wont work
let username : any = 'hello';
//if it is not any, when we do username. we will get all the methods depending on the type.

//unknown,
//instead of any we can use unknown
let usename1 : unknown = 'hello';
let newusername1 = usename1 as string;
//and now if we acces newusername1. , will get all the metjods


//never
//if we dont have nothing to return we can use never
//we can use never, when we throw error and when we need to run infinitly
function getErro(message : string): never{
    throw new Error(message);
}

//void, also wont return anything
function logmessage(message : string){
    console.log(message)
}


//use of never and void
type User={
    name : string,
    getName : ()=> string,
    // geName2() : string //both way we can define function
}

let user1: User ={
    name : 'Ans',
    getName : ()=>{
        return 'hello'
    }
}

// in the abobe object, if we dont return anything it will throw error, as we mention it getName : ()=> string,
//fo these cases we can use void
type User1 ={
    name : string,
    getName : ()=> void
}
let user2 : User1 ={
    name : "ansa",
    getName : ()=>{
        console.log('hello')
    }
}

//null type
let username3 : string | null = null;
function get(username){
    if(username){
        console.log('hello')
    }else{
        console.log('null')
    }
}