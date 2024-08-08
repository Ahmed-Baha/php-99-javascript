

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

// const body =document.body 

// let divELemnt = document.createElement("div")
// let h1ELemnt = document.createElement("h1")
// let imgELemnt = document.createElement("img")
// imgELemnt.style.width=(`500px`)
// imgELemnt.src ="../session 3 proj/milk and honey.jpg"
// h1ELemnt.innerText= "hi form js"

// divELemnt.appendChild(h1ELemnt)
// body.append(divELemnt,imgELemnt)

    
// const body =document.body 
// let divELemnt = document.createElement("div")
// let h1ELemnt = document.createElement("h1")
// h1ELemnt.innerText= "hi form js"
// divELemnt.innerHTML = ("<h1>helloo theree </h1>")
// body.append(divELemnt)


// !-------------------------------------------------


//!FUNCTIONS(arguments,arguments)

// function add(num1,num2){
//     num1=1
//     num2=0
// return num1+num2
// }
// var n1=5 ,n2=8
// let r=add(n1,n2)
// console.log(n1);
// console.log(n2);
// console.log(r);

//!----------------

// function fact(num){
//     if(num==0 ||num==1){
//         return 1;
//     }
//     let f = 1;
//     for(let i=2;i <= num ; i++)
//         {f *=i}
//     return f 
// }
// let m=fact(7)
// console.log(m);

//!--------------------------

// function prime(num){
//     if(num==0|| num==1){
//         return ('not prime')
//     }
//     for(let i=2;i<num;i++)
//     {if(num%i===0){
//         return(`not prime`)
//     }
//     return(`prime`)
//     }
// }
// console.log( prime(3));

//!```````````````````` function rokam 5eshn
// function rokam(pass){
//     if (pass<35){
//         console.log(`خشن`);
//     }
//    else if (60>pass&&pass>=35){
//         console.log(`متوسط`);
//     }
//     else if (80>pass&&pass>=60){
//         console.log(`ناعم`);
//     }
//    else if (100>=pass&&pass>=80){
//         console.log(`ناعم جدا `);
//     }
// }

// let r= rokam(100)
// console.log(r);

// //?------------------------- Arrays
// let name1=['uuu']
// let names=[name1,'usef','mahmoud','ahmed']
// console.log(typeof names[1]);
// console.log(typeof names);
// console.log(names[1]);
// console.log(names);
// // delete names[3]
// console.log(names);
// for (let index = 0; index < names.length; index++) {
//     let haga = names[index];
//     console.log(haga);
//     }
//     //!push add to end -data structure-
//     names.push('lasddklfa')
    
//     console.log(names);
//     //!pop remove from end -data structure-
//     names.pop()
//     //!shift remove frm the begging - big O of n-
//     //!unshift add to begging -big O of n-
//     //!splice remove or replace from the array(star,the number of integers to remove,add things to array)
//     //!slice cut piece from the array (start from,before the end)
     
// const transactions =[];
// let balance =1000;
// while(true){
// let choice = +prompt('enter 1 to deposit,2 for withdraw,0 for end')
// if(choice==1){
//     let amount = +prompt('enter amount')
//     balance += amount
//     transactions.push(amount)
// }
// else if(choice==2){
//     let amount = +prompt('enter amount')
//     balance -= amount
//     transactions.push(-amount)

// } 
// else {
//     break
// }
// }

// let message =`your balance is ${balance} \n`
// //? for of to show the inputs of the arrays 
// //? we could use for in to show the index of the array -replace of with in-
// for (const iterator of transactions) {
//     message+=`transaction :${iterator}\n`
// }
// alert(message)

//----------------------------wanted to make the up code as functions but i can't
// let transactions=[]

// function makeTransaction(oldTransactions){

//     console.log(oldTransactions)
// }
// while(1){
//  let endTransaction=   makeTransaction(transactions)

// }s
//!----------------------------------session 19-7-2024
//?object
//use const because it store in the heep (permative data type vs non permative data type) 
const stu={ 
    name:`ahmed`,
    address:`october`,
    job:`student`,
    phone: [`015151`,`651561`],
    info() {
        console.log(`my name is ${this.name} and i live in ${this.address} and iam ${this.job}`)
    }
};
//! to access or to change
stu.info()
stu.name=`3esa`
let x=stu.name
console.log(x);