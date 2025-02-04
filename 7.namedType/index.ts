type Status1 ={
    first : string;
    second : string
}

type Status2 = string

interface Status3 {
    first : string;
    second : string
}

//named types
type NamedStatus = 'pending' | 'completed' | "fullfilled" | "";

let currentStatus : NamedStatus = ""

let respose = 'pending1'
if(respose === 'pending'){
    console.log('hello')
}