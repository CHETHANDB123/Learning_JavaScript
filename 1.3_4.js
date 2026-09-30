// let but=document.getElementsByTagName("but")[0]
// let button=document.getElementsByTagName("button")[0]
// let img=document.getElementsByTagName("img")[0]
// img.style.display="none"



// button.addEventListener("click",()=>{
//     if(but.value===""){
//         Alert("no input..")
//     }
//     else{
//     img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${but.value}`
//     but.value=""
//     img.style.display="block"
//     setTimeout(()=>{
//         img.style.display="none"
//     },5000)
//     }
// })



// // console.log("chethan")
// // setTimeout(()=>{
// //     console.log("chethan")
// // })

// setInterval(() => {
//     console.log("chethan")
// }, 4000);



// let names=["chethan","salman Khan","virat kholi","sudeep"]
// let n=document.getElementsByTagName("span")[0]
// // n.innerText=names[0]
// let random=Math.floor(Math.random()*names.length)
// setInterval(()=>{
// n.innerText(names[random])
// },1000)



// let ph=["ggggg","fffff","rrrrr","wwwww","ttttt"]
// setInterval(()=>{
// let inp=document.getElementsByTagName("input")[0]
// let random=Math.floor(Math.random()*items.length)
// console.log(inp.placeholder=items[random])
// },1000)




let hrs = document.getElementsByClassName("hrs")[0]
let min = document.getElementsByClassName("min")[0]
let sec = document.getElementsByClassName("sec")[0]
let ampm = document.getElementsByClassName("ampm")[0]

function showTime() {
    let date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    let period

    // AM / PM condition
    if (h >= 12) {
        period = "PM"
    } else {
        period = "AM"
    }

    // convert 24-hour to 12-hour
    if (h > 12) {
        h = h - 12
    } else if (h === 0) {
        h = 12
    }

    // add leading zero if the number is less than 10
    if (h < 10) {
        h = "0" + h
    }
    if (m < 10) {
        m = "0" + m
    }
    if (s < 10) {
        s = "0" + s
    }

    hrs.innerText = h
    min.innerText = m
    sec.innerText = s
    // ampm.innerText = period
}

showTime() // show the current time immediately on refresh

setInterval(() => {
    showTime()
    console.log("clock updated")
}, 1000)