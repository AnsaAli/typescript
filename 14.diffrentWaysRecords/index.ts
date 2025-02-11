type Food1 = Record <string, any>
const food1: Food1 ={
    PIZZA : 'aaaa',
    PRICE : 30
}

//dynamic way of creating the keys
type Food2 ={
    [index : string] : any
}

const food2: Food2 ={
    PPPP : 'aas',
    RRR : 30,
    HH : {
        aag : 'aa'
    }
}