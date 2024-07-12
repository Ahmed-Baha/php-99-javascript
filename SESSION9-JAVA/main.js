
let n1=prompt("enter first num")
let n2=prompt("enter second num")
let MaxNum=null;
if( n1 > n2 ){
    MaxNum=n1;
}
else if ( n2 > n1 ){
    MaxNum=n2;
}
else{
    MaxNum= "equal";
}

console.log(`Max nymber =${MaxNum}`);