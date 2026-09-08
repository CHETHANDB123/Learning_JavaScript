// //Condition
// // if(true){
// //     console.log("it is true")
// // }
// // else{
// //     console.log("it is false")
// // }
// // ////
// // if(!true){
// //     console.log("it is true")
// // }
// // else{
// //     console.log("it is false")
// // }
// // //write a pro to check user is eligible is to vote or not
// // let voter=Number(prompt("Eneter a Age:"))
// // if (voter>=18){
// //     console.log("eligible")
// // }
// // else{
// //     console.log("not eligible")
// // }
// /////
// // wrt check user is eligible to drive
// // num is +ine - ive
// // check geatest among 2 num usser
// // pro check user enter correct 10 digit conytact num
// // check given i/p user is string or num
// // check current time moring / 
// // check whetre current time am or pm
// // chect given i/p user enen or odd
// // check user is divisible by 3
// // check fiven i/p user is /5
// // check givem i/p user / 3 and 5
// // check useer is 0 or not
// ///1
// //1
// let drive =Number(prompt("Enter Age:"))
// if(drive>=18){
//     console.log("drive to eligible")
// }
// else{
//     console.log("drive to not eligible")
// }
// //2
// let pos=Number(prompt("Enter number:"))
// if(pos>0){
//     console.log("+ive Number")
// }
// else{
//     console.log("-ive Number")
// }
// //3
// let great1=Number(prompt("Enter 1st Number:"))
// let great2=Number(prompt("Enter 2nd Number:"))
// if(great1>great2){
//     console.log("greatest number is",great1)
// }
// else{
//     console.log("geratest Number is ",great2)
// }
// //4
// let digit=Number(prompt("Enter Digit:"))
// // if(isNaN(digit)||digit.length!=10)
// if(digit=10){
//     console.log("suucess")
// }
// else{
//     console.log("Please enetr 10 digit")
// }
// //5
// let date=new Date()
// let hrs=dana.getHours()
// let str=Number(prompt("Enter String:"))
// if(isNaN(user("value")))
// if(str=Number(str)){
//     console.log("Sttring")
// }
// else{
//     console.log("Number")
// }
// //6
// let tim=Number(prompt("Enter current Time:"))
// if(tim>0 && tim<12){
//     console.log("good morning")
// }
// else{
//     console.log("Evening")
// }
// //
// let tim_zone=Number(prompt("Enter current Time:"))
// if(tim_zone>=0 && tim_zone<12){
//     console.log("AM")
// }
// else{
//     console.log("PM")
// }
// //7
// let even=Number(prompt("Enter Number:"))
// if(even%2===0){
//     console.log("even")
// }
// else{
//     console.log("odd")
// }
// //8
// let div=Number(prompt("Enter Number /3:"))
// if(div%3==0){
//     console.log("Divisible by 3")
// }
// else{
//     console.log("Invalid")
// }
// //9
// let div1=Number(prompt("Enter Number /5:"))
// if(div1%5===0){
//     console.log("Divisible by 5")
// }
// else{
//     console.log("Invalid")
// }
// //10
// let div2=Number(prompt("Enter Number /3:"))
// // let div3=Number(prompt("Enter Number /5:"))
// if(div2%3===0 && di2%5===0){
//     console.log("Divisible by 3 and 5")
// }
// else{
//     console.log("Invalid")
// }
// //11
// let div4=Number(prompt("Enter Number Zero:"))
// if(div4==0){
//     console.log("it is Zero")
// }
// else{
//     console.log("Invalid")
// }

let user=prompt("enter gender :")
if(user=="Male" || user==='m'){
    console.log("Male")
}
else if(user==="Female" || user==='f'){
    console.log("Female")
}
else if(user==="Other" || user=='o'){
    console.log("Other")
}
else{
    console.log("Invalid")
}