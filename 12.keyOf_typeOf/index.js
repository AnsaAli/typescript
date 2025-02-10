//this is almost same as enum
//but when we use enus it will be difficult to acces the keys
//to overcome this we can use keyof typeof
var StatusType = {
    PENDING: "pending",
    COMPLETED: "completed",
    FULLFILLED: "fullfilled",
};
function getStatus(orderId, status) {
    StatusType.PENDING = 'Hello';
    console.log('1:', orderId, "=", StatusType[status]);
}
getStatus('123', "COMPLETED"); //1: 123 = completed
getStatus('123', "PENDING"); //1: 123 = Hello , this is not good, because StatusType should be read only to make this to raed only use as const
//to  run this tsc index.ts && node index.js
console.log('***************');
var StatusType1 = {
    PENDING: "pending",
    COMPLETED: "completed",
    FULLFILLED: "fullfilled",
};
function getStatus1(status) {
    console.log(StatusType1[status]);
}
getStatus1("PENDING");
