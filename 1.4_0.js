// let cards=document.getElementsByClassName('cards')[0]
// let data=fetch("https://jsonplaceholder.typicode.com/todos").then((d)=>{
//     return(d.json())
// }).then((fd)=>{
//     fd.map((fd)=>{
//         let {userid,id,title,body}=fd
//         //  if(cardt===true){
//         cards.innerHTML+=
//         `<div id="true" class="card">
//         <h1>user id${userid}</h1>
//         <h1>${id}</h1>
//                 <h1>title ${title}</h1>
//                 <h1>body ${body}</h1>
//                 </div>`
//         // }
//          cards.innerHTML+=
//         `<div id="false" class="card">
//         <h1>user id${userid}</h1>
//         <h1>${id}</h1>
//                 <h1>title ${title}</h1>
//                 <h1>body ${body}</h1>
//                 </div>`
//     })

// })


// let task=()=>{
//     let data=fetch("https://jsonplaceholder.typicode.com/posts").then((d)=>{
//         return(d.json())
//     }).then((fd)=>{
//         console.log(fd)
//     }).catch((err)=>{
//         console.log("someting..")
//     })
// }
// task();
let card=document.getElementsByClassName("card")[0]
let task=async()=>{
    let daat= await fetch("https://jsonplaceholder.typicode.com/posts")
    let res =await(data.json())
    // console.log(res)
    res.map((e)=>{
        let{id,title,completed,email.comapny name}=e

        card.innerHTML +=`
         <div class="card">
                <h1>${1.}</h1>
                <h1>title <span></span></h1>
                <h1>completed <span></span></h1>
                <h1>email <span></span></h1>
                <h1>company name <span></span></h1>
            </div>`
    })
}
task()