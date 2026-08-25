// arr 5 fr
// reverse of arr

// let fruits=['apple','mango','banana','grapes','pinapple']
// console.log(fruits.splice(4,1))
// console.log(fruits)
// // console.log(fruits.reverse())
// let banana=fruits.splice(2,1).toString().toUpperCase()
// fruits.splice(2,0,banana)
// console.log(fruits)
//================================================================
let fruits=['apple','mango','banana','grapes','pinapple']
let res=[]
let apple=fruits.splice(0,1).toString()
let a6=apple.slice(0,1).toUpperCase()
let a7=apple.slice(1)
res.push(a6.concat(a7))

let mango=fruits.splice(0,1).toString()
let m6=mango.slice(0,1).toUpperCase()
let m7=mango.slice(1)
res.push(m6.concat(m7))

let banana=fruits.splice(0,1).toString()
let b6=banana.slice(0,1).toUpperCase()
let b7=banana.slice(1)
res.push(b6.concat(b7))

let grapes=fruits.splice(0,1).toString()
let g6=grapes.slice(0,1).toUpperCase()
let g7=grapes.slice(1)
res.push(g6.concat(g7))

let pinapple=fruits.splice(0,1).toString()
let pa6=pinapple.slice(0,1).toUpperCase()
let pa7=pinapple.slice(1)
res.push(pa6.concat(pa7))
console.log(res)

O/P = ['Apple', 'Mango', 'Banana', 'Grapes', 'Pinapple']

//-------------------------------------------------------------------------
// let fruits=['apple','mango','banana','grapes','pinapple']
// let res=[]
// let pinapple=fruits.splice(4,4).toString()
// let p=pinapple.slice(0,1).toUpperCase()
// let e=pinapple.slice(-1).toUpperCase()
// let pinn =pinapple.slice(1,-1)
// res.push(p.concat(pinn,e))

// let grapes=fruits.splice(3,3).toString()
// let g=grapes.slice(0,1).toUpperCase()
// let s=grapes.slice(-1).toUpperCase()
// let grs =grapes.slice(1,-1)
// res.push(g.concat(grs).concat(s))

// let banana=fruits.splice(2,2).toString()
// let b1=banana.slice(0,1).toUpperCase()
// let b2=banana.slice(-1).toUpperCase()
// let b3=banana.slice(1,-1)
// res.push(b1.concat(b3,b2))

// let mango=fruits.splice(1,1).toString()
// let mg1=mango.slice(0,1).toUpperCase()
// let mg2=mango.slice(-1).toUpperCase()
// let mg3 =mango.slice(1,-1)
// res.push(mg1.concat(mg3).concat(mg2))

// let apple=fruits.splice(0).toString()
// let ap1=apple.slice(0,1).toUpperCase()
// let ap2=apple.slice(-1).toUpperCase()
// let ap3 =apple.slice(1,-1)
// res.push(ap1.concat(ap3).concat(ap2))
// // let mm = res.reverse()
// // console.log(mm)
// console.log(res)

// O/P = ['PinapplE', 'GrapeS', 'BananA', 'MangO', 'ApplE']

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// let fruits=['apple','mango','banana','grapes','pinapple']
// res=[]
// let apple =fruits.splice(0,1).toString()
// let a1=apple.slice(0,1)
// let a2=apple.slice(-1)
// let a3=apple.slice(1,-1).split("").reverse().join("").toUpperCase()
// res.push(a1.concat(a2,a3))

// let mango=fruits.splice(0,1).toString()
// let m1=mango.slice(0,1)
// let m2=mango.slice(-1)
// let m3=mango.slice(1,-1).split('').reverse().join('').toUpperCase()
// res.push(m1.concat(m2,m3))

// let banana=fruits.splice(0,1).toString()
// let b1=banana.slice(0,1)
// let b2=banana.slice(-1)
// let b3=banana.slice(1,-1).split('').reverse().join('').toUpperCase()
// res.push(b1.concat(b2,b3))

// let grapes=fruits.splice(0,1).toString()
// let g1=grapes.slice(0,1)
// let g2=grapes.slice(-1)
// let g3=grapes.slice(1,-1).split('').reverse().join('').toUpperCase()
// res.push(g1.concat(g2,g3))

// let papple=fruits.splice(0,1).toString()
// let p1=papple.slice(0,1)
// let p2=papple.slice(-1)
// let p3=papple.slice(1,-1).split('').reverse().join('').toUpperCase()
// res.push(p1.concat(p2,p3))
// console.log(res)

// o/p =  ['aeLPP', 'moGNA', 'baNANA', 'gsEPAR', 'peLPPANI']

///////////////////////////////////////////////////////////////////////
// let fruits=['apple','mango','banana','grapes','pinapple']
// res=[]
// let apple=fruits.splice(0,1).toString()
// let aa=apple.slice(0,2).split('').reverse().join('')
// let a=apple.slice(2,5).split("").reverse().join("")
// res.push(aa.concat(a))

// let mango=fruits.splice(0,1).toString()
// let mm=mango.slice(0,2).split('').reverse().join('')
// let m=mango.slice(2,5).split("").reverse().join("")
// res.push(mm.concat(m))

// let bana=fruits.splice(0,1).toString()
// let bb=bana.slice(0,3).split('').reverse().join('')
// let b=bana.slice(3,6).split('').reverse().join('')
// res.push(bb.concat(b))

// let grap=fruits.splice(0,1).toString()
// let gg=grap.slice(0,3).split('').reverse().join('')
// let g=grap.slice(3,6).split('').reverse().join('')
// res.push(gg.concat(g))

// let pina=fruits.splice(0,1).toString()
// let pp=pina.slice(0,3).split('').reverse().join('')
// let p=pina.slice(3,8).split('').reverse().join('')
// res.push(pp.concat(p))
// console.log(res)

// O/P = ['paelp', 'amogn', 'nabana', 'argsep', 'nipelppa']
 