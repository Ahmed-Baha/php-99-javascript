// const tasks = [];
// const tasksListElement= document.getElementById("tasks-list")

// const addBtn = document.getElementById("add")
// const inputTask= document.getElementById("input-task")


// // function render(tasks){
// //     tasks.forRach(elemnt =>{
// //         const newTask= document.createElemnt("li")
// //         tasksListElement.appendChild(newTask)
// //     })
// // }
// function render(){
//     tasksListElement.innerHTML= "";
//     tasks.forEach((element)=>{
//         const newTask= document.createElement("li")
//         newTask.innerText=element;
//         tasksListElement.appendChild(newTask)
//     })
// }
// const handelNewTask=()=>{
//     const task = inputTask.value
//     inputTask.value=""
//     tasks.push(task)
//     render()
// }
// addBtn.addEventListener("click",handelNewTask)
// inputTask.addEventListener("keydown",(event)=>{
//     if(event.key=="Enter"){
//         handelNewTask()
//     }
// })
//!-------------------------------dom at home
//&------part one-----------------
// console.log(document.getElementById(`headhead`).innerText)
// console.log(document.getElementById(`headhead`).style.color=`red`)
//&------part two--------------------
// console.log(document.getElementsByClassName(`main`));
// const element =document.getElementsByClassName(`main`)
//^ for (const iterator of element) {
//     iterator.style.color=`red`
//     console.log(iterator);
// }
//!second choice!
//  const elements = document.querySelectorAll('.main')
// console.log(elements)
//&-----part three---------------
// let elem= document.getElementById(`result`)
// elem.innerText=`hello there from js`
// elem.style.color=`red`
// elem.style.backgroundColor=`blue`
//?example(Forof)
// let todoTasks=[`ahmed`,`bahaa`,`eldin`]
// const ulElements=document.getElementById(`ulElements`)
//^ for (const iterator of todoTasks) {
    // ulElements.innerHTML +=`<li>${iterator}</li>`
    // }
//?foreach
    // let todoTasks=[`ahmed`,`bahaa`,`eldin`]
    //^ todoTasks.forEach((item,index)=>{
    //    document.getElementById(`ulElements`).innerHTML+=`<li>${item}</li>`
    //     console.log(item);
    //     console.log(index);
          
    // })
    //---------same as the up ""call back function""
    //^  todoTasks.forEach(function(item,index){
    //     console.log(item);
    //     console.log(index);
    // })
//&-------part four----(Create element)--------
const body=document.body
let divElement=document.createElement('div')
    console.log(divElement);
    divElement.innerText='hi there from js'
    body.appendChild(divElement)
    divElement.className='mainDiv'
    let h1Element=document.createElement(`h1`)
    h1Element.innerText='hey from js'
    // divElement.appendChild(h1Element)    //?   <---could be commented and could will run normally (appendchild use for only one element)
    let h2Element=document.createElement(`h1`)
    h2Element.innerText='hey from js again'
    // divElement.append(h1Element,h2Element)    //?because here it point on the same reference shollow copy...it will take only one of them 
document.querySelector(`#an`).href=`http://127.0.0.1`
h1Element.classList.add(`1`)
// const btn1=document.getElementById(`btn1`)   //? --->the callbck function is used once to show the inputs
let visible=false       //&----> or we could use display none and display block to manipulate css
btn1.addEventListener(`click`,()=>{console.log(`clicked`);
if(visible){  
    divElement.innerHTML=``   
}else{
    divElement.append(h1Element,h2Element)   
    }    visible=!visible
}) 
