//charAt
let a="chethan"
console.log(a.charAt(0))
//concat
let b ="virat"
let c ="kholi"
console.log(a.concat(b).concat(c))
//endswith
console.log(a.endsWith("than"))
//startswith
console.log(a.startsWith("che"))
//includes
console.log(a.includes("tha"))
//Indexof
console.log(a.indexOf("c"))
console.log(a.indexOf("n"))
//lastIndexof
console.log(a.lastIndexOf("n"))
//PadEnd
let d="1234"
console.log(d.padEnd(10,"x"))
//padstart
let d1="chethan"
console.log(d1.padStart(10,"x"))
//repeat
console.log(b.repeat(5))
//slice
e="chethan"
console.log(e.slice(0,3))
console.log(e.slice(4))
console.log(e.slice(3,7))
console.log(e.slice(-1))
console.log(e.slice(-3,-1))

//substring
console.log(e.substring(0,2))
console.log(e.substring(2,6))
// console.log(e.substring(-1))-ve not work

//split
console.log(a.split(''))
e1='1234'
console.log(e1.split(''))
//toupperCase
console.log(a.toUpperCase())
//toLowerCase
console.log(a.toLowerCase())
//tostring
c2=1234
console.log(c2.toString())
console.log(a.toString())
//trimend
t="chet          "
console.log(t.trimEnd())
//trimStart
t1="            virat"
console.log(t1.trimStart())
//trim
t2="      Toxic     "
console.log(t2.trim())

/////////////////////
//Program
let me = "ravishastry";
let company = "dheecodinglab";
let address = "bangalore";

me_fi=me.slice(0,me.length/2)
me_se=me.slice(me.length/2)
// console.log(me_se)
me_fin=me_fi.concat(company).concat(me_se)
console.log(me_fin)
me_co=me_fin.slice(0,me_fin.length/2)
me_cos=me_fin.slice(me_fin.length/2)
// console.log(me_co)
me_add=me_co.concat(address).concat(me_cos)
console.log(me_add)
addm=me_add.repeat(5)
console.log(addm)
y_f=addm.slice(0,addm.length/2)
x_s=addm.slice(addm.length/2)
finnal=y_f.concat(me.toUpperCase()).concat(x_s)
console.log(finnal)
console.log(finnal.length)
//o/p=ravisdheecodbangaloreinglabhastryravisdheecodbangaloreinglabhastryravisdheecodbangRAVISHASTRYaloreinglabhastryravisdheecodbangaloreinglabhastryravisdheecodbangaloreinglabhastry