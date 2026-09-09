//
// wrt pro check user is m,f, o
// wrt pro check student dist , first , pass ,fail
// ert pro check user is vote or not  max 100 Age, 0.1 min , -1 and 100<
// wrt  pr cjeck user is selected balance , withdraw,deposite
// wert pro check current time is mor , after , evening,night
// wrt pro ckeck what date today
// check current mount
// check largest of 3 num
// pro claculate to amount after discount 
////////////////////
// //1
let inp=(i)=>{
    let user=prompt(`Enter ${i}:`)
    return(user)
}
// // let user=prompt("Enter Gender:")
// let user=inp("Gender")
// if(user==='Male'|| user==='m'){
//     console.log("Male")
// }
// else if(user==='Female' || user==='f'){
//     console.log('female')
// }
// else if(user==='Other' || user==='o')
// {
//     console.log('other')
// }
// else{
//     console.log("Invalid")
// }
//2
// let student=inp("Student_Marks")
// if(student>100 || student<0 ||student==isNaN){
//     console.log("Invalid")
// }
// else if(student>70){
//     console.log("Distincation")
// }
// else if(student>50){
//     console.log("First Class")
// }
// else if(student>=35){
//     console.log("Second Class")
// }
// else {
//     console.log("Fail")
// }
// //3
let vote=inp("Voter_id ")
if(vote<=100 && vote>=18){
    console.log("Eligible")
}
else if(vote>0.1 || vote<18)[
    console.log("citizen but not eligible")
]
else{
    console.log("Invalid")
}
// //4
// if(balance>=500){
//     console.log("baleance is good")
// }
// let withdraw=prompt("Enter withdraw")
// else if(balance>withdraw){
//     console.log("withdraw")
// }
// else{
//     console.log("Invalid")
// }
// //5
// let r=prompt("Enter time")
// let time=r.getHours()
// if(r>1 ||)
// }input(q)
/////////////////

// let dis=prompt("Enter Amount")
// discount=0
// if(dis<5000 && dis >=1 ){
//     discount=0
// }
// else if(dis>5000){
//     discount=5
// }
// else if(dis>6000){
//     discount=6
// }
// else if(dis>7000){
//     discount=7
// }
// else if(dis>8000){
//     discount=8
// }
// else if(dis>9000){
//     discount=9
// }
// else if(dis>10000){
//     discount=10
// }
// else{
//     console.log("Invalid")
// }
// let am_dis=dis-((dis/100)*discount)
// console.log(`Amount ${am_dis}`)