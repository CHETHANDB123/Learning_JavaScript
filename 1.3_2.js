// let red=document.getElementsByTagName("red")[0]
// let chethan=document.getElementsByTagName("Blue")[1]
// let virat=document.getElementsByTagName("violet")[2]
// let ramu=document.getElementsByTagName("orange")[3]
// let n=document.getElementsByTagName('span')[0]
// let conta=document.getElementsByTagName("conta")
// // console.log(chethan)
// ravi.addEventListener('click',()=>{
//     // n.innerText="ravi"
//     conta.style.background="red"
// })
// chethan.addEventListener("click",()=>{
//     // console.log("you click on button")
//     n.innerText="chethan"
// })
// virat.addEventListener("click",()=>{
//     // console.log("you click on button")
//     n.innerText="virat"
// })
// ramu.addEventListener("click",()=>{
//     // console.log("you click on button")
//     n.innerText="ramu"
// })
/////////////////////////////////////
let fs=document.getElementsByTagName("fs")[0]
let ls=document.getElementsByTagName("ls")[1]
let e=document.getElementsByTagName("e")[2]
let c=document.getElementsByTagName("c")[3]
let button=document.getElementsByTagName("button")[0]

button.addEventListener("click",()=>{

    if(fs===ls || fs.length<1 ){
        Alert("Invalid")
    }
    else{
    // console.log(`Name:${fs.value+ls.value}`)
    // console.log(`Email"${e.value}`)
    // console.log(`Contact:${c.value}`)
    name.innerText=fs.value+ls.value

    }
})

