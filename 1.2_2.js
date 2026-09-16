//
// wrt ap number 1-10 for loop
// for(let i=0;i<=10;i++){
//     console.log(i)
// }
//for loop
//wrt pro primt 1-100
//range 50-150
//-10 ot +10
//print multiple ort 2 wuithor if
//3 range 0-30 wuyi if
//5 range 0-500 with if
//10 rage 0-200 wiih if
//1]
// for(let i=1;i<=100;i++){
//     console.log(i)
// }

//2]
// for(let i=50;i<=150;i++){
//     console.log(i)
// }

//3]
// for(let i=-10;i<=10;i++){
//     console.log(i)
// }

//4]
// for(let i=0;i<=100;i+=2){
    
//     console.log(i)
// }
//s]
// for(let i=0;i<=30;i+=3){
    
//     console.log(i)
// }
//6]
// for(let i=0;i<=500;i+=5){
    
//     console.log(i)
// }
//7]
// for(let i=0;i<=200;i+=10){
    
//     console.log(i)
// }



//wrt pro print a range ato b , a % b by user , using for
// let a=Number(prompt("Enter a:"))
// let b=Number(prompt("Enter b:"))
// if(isNaN(a)||isNaN(b)||a>b){
//     Alert("Invalid")
// }
// for(let i=a;i<=b;i++){
//     console.log(i)
// }
// print mult table of 5

// for(let i=1;i<=10;i++){
//     console.log(`5x${i}=${5*i}`)
// }
/////
//wrt pro tables of x given by the user
// let u=prompt("Enter a number:")
// if(isNaN(u)){
//     Alert("Invalid")
// }
// for(let i=1;i<=10;i++){
//     console.log(`${u}x${i}=${u*i}`)
// }

// table of x range a and b by the user a<b
// let x=prompt("Eneter x:")
// let a=prompt("Enter a:")
// let b=prompt("Enter b:")
// if(isNaN(a)|| (a>b)|| isNaN(b)|| isNaN)(x){
//     Alert("Invalid")
// }
// else{
// for(let i=a;i<=b;i++){
//     console.log(`${x}x${i}=${x*i}`)
// }
// }
//////
//wrt pro print %3 range a to b
//%5 0-100

// let a=prompt("Enter a :")
// let b=prompt("Enter b:")
// if(isNaN(a)||isNaN(b)){
//     Alert("Invalid")
// }
// else{
//     for(i=a;i<=b;i++){
//         if(i%3===0)
//             {
//                 console.log(i)

//         }
//     }
// }
//pro print a number % by 3 and 5

// for(i=0;i<=100;i++){
//      if(i%3===0 && i%5===0){
//         console.log("Ravishastry weds Mrunal Thakur")
//     }
//   else  if(i%3===0)
//         {
// console.log(i,"Ravishastry")
//     }
//     else if(i%5===0){
//         console.log(i,"Mrunal Thankur")
//     }
    
//     else{
//         console.log("Invalid")
//     }
// }
// pro print check inp is prime or not 
// let w=prompt("Enter value")
// if(isNaN(w)){
//     Alert("Invaid")
// }
// else{
// for(i=1;i<=w;i++){
//     if(w%w===0 && w%1===0 ){
//         console.log(w,"prime Number")
//     }
//     else{
//         console.log(w,"Not a prime")
//     }
// }
// }


let w = Number(prompt("Enter value"));

if (isNaN(w) || w < 2) {
    alert("Invalid");
}
else {
    let count = 0;

    for (let i = 1; i <= w; i++) {

        if (w % i === 0) {
            count++;
        }
    }

    if (count === 2) {
        console.log(w, "Prime Number");
    }
    else {
        console.log(w, "Not a prime");
    }
}
//pro find sum of n natural number range 0-100
//pro sum of factorial of a given number
//Sum of n Numbers
// let sum=0
// for(i=0;i<=100;i++){
//     sum+=(i)
// }
// console.log(sum)

//// 
//Factorial
// let a=prompt("Enter Factorial:")
// let fact=1
// for(let i=1;i<=a;i++){
//     fact*=i
//     // console.log(i)
// }
// console.log(fact)