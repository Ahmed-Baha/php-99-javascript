const tasks = [];
const tasksListElement= document.getElementById("tasks-list")

const addBtn = document.getElementById("add")
const inputTask= document.getElementById("input-task")


// function render(tasks){
//     tasks.forRach(elemnt =>{
//         const newTask= document.createElemnt("li")
//         tasksListElement.appendChild(newTask)
//     })
// }
function render(){
    tasksListElement.innerHTML= "";
    tasks.forEach((element)=>{
        const newTask= document.createElement("li")
        newTask.innerText=element;
        tasksListElement.appendChild(newTask)
    })
}
const handelNewTask=()=>{
    const task = inputTask.value
    inputTask.value=""
    tasks.push(task)
    render()
}
addBtn.addEventListener("click",handelNewTask)
inputTask.addEventListener("keydown",(event)=>{
    if(event.key=="Enter"){
        handelNewTask()
    }
})
