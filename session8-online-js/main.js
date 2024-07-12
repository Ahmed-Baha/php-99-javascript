// let name1="ahmed";
// let city="cairo";
// alert ("my name is "+name1+" and im form "+city);
//  let n1 =parseInt(prompt("n1"));
//  let n2 =parseInt(prompt("n2"));
  
//     alert("n1+n2="+(n1+n2))
 
//     alert("n1*n2="+(n1*n2))
 
//     alert("n1/n2="+(n1/n2))
 
//     alert("n1-n2="+(n1-n2))
 


// let n1 =parseInt(prompt("n1"));
//  let n2 =parseInt(prompt("n2"));
  
//     alert("n1+n2="+(n1+n2)+"n1*n2="+(n1*n2)+"n1/n2="+(n1/n2)+"n1-n2="+(n1-n2))
let n1 =+prompt("N1=") , n2=+prompt("N2=");
let results= `
${n1} + ${n2} = ${n1+n2} \n
${n1} * ${n2} = ${n1*n2} \n
${n1} - ${n2} = ${n1-n2} \n
${n1} / ${n2} = ${n1/n2} \n
${n1} % ${n2} = ${n1%n2} \n `;
alert(results)