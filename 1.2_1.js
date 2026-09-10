//
// let user=prompt("Enter age: ")
// if(user>=18){
//     console.log("Eligible to vote...")
//     let Gender =prompt("Enter Gender: ")
//     if(Gender==="Male" || Gender==='m'){
//         console.log("Male")
//     }
//     else if(Gender==="Female" || Gender==='f'){
//         console.log("Female")
//     }
//     else if(Gender==="Other" || Gender==='o'){
//         console.log("Other")
//     }
//     else{
//         Alert("InValid")
//     }
// }
// else{
//     console.log("Not Eligible")
// }

//wr pro check usr is vote or not ,if usr is elegible  max age 100 min age below 0
//wrt pto check student as d , f, p fail , by collec tmarks 4 subjects

//1]
// let user=prompt("Enter age: ")
// if(user>=18 && user<=100){
//     console.log("Eligible to vote...")
//     let Gender =prompt("Enter Gender: ")
//     if(Gender==="Male" || Gender==='m'){
//         console.log("Male")
//     }
//     else if(Gender==="Female" || Gender==='f'){
//         console.log("Female")
//     }
//     else if(Gender==="Other" || Gender==='o'){
//         console.log("Other")
//     }
//     else{
//         Alert("InValid")
//     }
// }
// else if(user>0 || user<17 || user>100)
// {
// console.log("Not Eligible")
// }

// else{
//     Alert("Invalid")
// }
// //2]
// let student=prompt("Enter kannada marks:")
// let student1=prompt("Enter hindi marks:")
// let student2=prompt("Enter english marks:")
// let student3=prompt("Enter maths marks:")
// let student4=prompt("Enter social marks:")
// if(student)

    // wrt pro calcukate toal amount electri unit 

let electri=prompt("Enter units: ")

if(isNaN(electri) || electri<0){
    console.log("Invalid")
}
else if(electri>0 && electri<100){
    let electri1=electri*4
    console.log("4 Ruppes/Units",electri1)
}
else if(electri>101 && electri<200){
    let electri2=electri-electri1
    let electri22=electri2*6
    console.log("6 Ruppes/Units",electri22)
}
else if(electri>201 && electri<400){
    let electri3=electri-electri22
    let electri33=electri3*8
    console.log("8 Ruppes/Units",electri33)
}
else if(electri>401){
    let electri4=electri-electri33
    let electri44=electri4*8
    console.log("10 Ruppes/Units",electri44)
}
else{
    Alert("INVALID")
}