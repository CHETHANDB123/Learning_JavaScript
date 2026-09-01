// objects & Arrays
// let ravi ={
//     first_name: "ravi",
//     last_name:"shastry",
//     proffession:"trainer",
//     company:'DCL',
//     phone_no:1234567890,
//     age:30
// }

// let {first_name,last_name,profession,company,age,phone_no}=ravi
// console.log(first_name,last_name)
// console.log(profession)
// console.log(company)
// console.log(phone_no)
// console.log(age)
// // console.log(`name: ${ravi.first_name}${ravi.last_name}`)
// // console.log(`profession: ${ravi.profession}`)
// // console.log(`company: ${ravi.company}`)
// // console.log(`phone: ${ravi.phone_no}`)
// // console.log(`age: ${ravi.age}`)

//////////////////////////////////////////////////
//DE - STRUCTURING
// let Employee={
//     id:001,
//     name:"chethan",
//     contact:1234567890,
//     address:"Bangalore",
//     designation:"software Engineer"
// }
// let {id,name,contact,address,designation}=Employee
// console.log(id)
// console.log(name)
// console.log(contact)
// console.log(address)
// console.log(designation)
////////////////////////////////////

// let arr = [
//   {
//     id: 001,
//     name: "chethan",
//     contact: 1234567890,
//     address: "Bangalore",
//     designation: "software Engineer"
//   },
//   {
//     id: 002,
//     name: "virat",
//     contact: 1234567890,
//     address: "Bangalore",
//     designation: "software Engineer"
//   },
//   {
//     id: 03,
//     name: "kiran",
//     contact: 1234567890,
//     address: "Bangalore",
//     designation: "software Engineer"
//   },
// ]

// let {id,name,contact,address,designation}=arr
// console.log(id)
// console.log(name)
// console.log(contact)
// console.log(address)
// console.log(designation)

//////////////////////////////

let a=["apple","mango","banana"]
let no=[1,2,3,4]
console.log([...a,"che"]) //arr concat
console.log(...a,"che")  //string
console.log(..."che")
console.log([..."che"])
console.log([...a,...no])

let x={
    id:1,
    address:"Shivamogga"
}
console.log({...x,name:"chethan"})