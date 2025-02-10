enum StatusType{
    PENDING,
    COMPLETED,
    FULLFILLED

}

function getStatus(orderID : string, status : StatusType){
console.log(orderID, '==', status)
}

getStatus('0123abc',StatusType.COMPLETED)

// abouve outtput will Be
// foreUnloadEventvar StatusType;
// (function (StatusType) {
//     StatusType[StatusType["PENDING"] = 0] = "PENDING";
//     StatusType[StatusType["COMPLETED"] = 1] = "COMPLETED";
//     StatusType[StatusType["FULLFILLED"] = 2] = "FULLFILLED";
// })(StatusType || (StatusType = {}));
// function getStatus(orderID, status) {
//     console.log(orderID, '==', status);
// }
// getStatus('0123abc', StatusType.COMPLETED);


//if we add const before enum
const enum Statustype2{
    PENDING,
    COMPLETED,
    FULLFILLED

}
function getStatus2(order:string, stau: Statustype2){
console.log(order, stau)
}
getStatus2('1202',Statustype2.FULLFILLED)

// // enum StatusType{
// //     PENDING,
// //     COMPLETED,
// //     FULLFILLED
// function getStatus2(order, stau) {
//     console.log(order, stau);
// }
// getStatus2('1202', 2 /* Statustype2.FULLFILLED */);
