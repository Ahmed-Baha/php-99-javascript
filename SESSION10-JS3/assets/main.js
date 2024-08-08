// const transactions = [];
// let balance = 1000;

// while (true) {
//   let choose = +prompt(`enter 1 to deposit . 2 for withdraw, 0 for end`);
//   if (choose == 1) {
//       let amount = +prompt(`enter amount`);
//       transactions.push(amount);
//     } else if (choose == 2) {
//       let amount = +prompt(`enter amount`);
//     transactions.push(-amount);
//   } else {
//     break;
//   }
// //   break;
// }
// let message = ``;

// for (const amount of transactions) {
//   balance += amount;
//   message += `transaction with: ${balance} \n`;
// }
// alert(message)
// // `` backteck
function bank(transaction) {
    let choose= +prompt(`enter 1 to deposit . 2 for withdraw, 0 for end`)
    if (choose==1){
        let amount = +prompt(`enter amount`)
        transaction.push(amount);
    }else if(choose==2){
        let amount= +prompt(`enter prompt`)
        transaction.push(-amount);
    }else{
        return false;
    }
}
let transaction;


while (1){
    if (bank(transaction)==false){
        break;
    }
}
console.log(bank(tr));