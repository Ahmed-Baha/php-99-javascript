

// console.log(document.getElementById("f-1").innerText="red")
// const todoTasks =['1','2','3']
// const element=document.getElementsByClassName("head")
// let phai=element
// console.log(element);
// for (const iterator of element) {
//     phai=iterator
// }
// for (const iterator of todoTasks) {
    
//     phai.innerHTML+=`<li>${iterator}</li>`  
// }

//!structuredclone!!

//!for each
// const todoTasks=["t1","t2","t3"]
// array.forEach(elemnt => {
    
// });

//! --------same code different ways ^_+-------

const body =document.body 

let divELemnt = document.createElement("div")
let h1ELemnt = document.createElement("h1")
let imgELemnt = document.createElement("img")
imgELemnt.style.width=(`500px`)
imgELemnt.src ="../session 3 proj/milk and honey.jpg"
h1ELemnt.innerText= "hi form js"

divELemnt.appendChild(h1ELemnt)
body.append(divELemnt,imgELemnt)

    
// const body =document.body 
// let divELemnt = document.createElement("div")
// let h1ELemnt = document.createElement("h1")
// h1ELemnt.innerText= "hi form js"
// divELemnt.innerHTML = ("<h1>helloo theree </h1>")
// body.append(divELemnt)


// -------------------------------------------------


