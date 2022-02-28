var Array = ["Abbas","Ahmed","Rizvi","Shama","Nasir","Ali","Rafat"];
// The Old Methode Access in Array
const a = Array[0];
const b = Array[2];

console.log(a);
console.log(b);

// New ES6 Model (Desturctring)
const  [a1,b1,c1] = Array;
console.log(a1);
// ",," This Skipe the elements in between the comma
const [a2,,c2, ...rest] = Array;
console.log(rest);
// Print the whole array using "..." i.e ...array, ...Num
const newArray = [...Array];
console.log(newArray);

// Destructing in Multi-Dimension Array
var multiArray = [["Abbas","Ahmed","Rizvi","Shama","Nasir","Ali","Rafat"],[65,34,3535,3434,545,335]];
//printing whole multiArray
const newMultiArray = [...multiArray];
console.log(newMultiArray);

const [one, two ] = multiArray;
// print multiarray in destructing
console.log("This is the First Index of Multi-D Array: "+one);
console.log("This is the second Index of Multi-D Array: "+two);

//Destructing of array in Function
function deStructingFunction(a,b)
{
    return[a+b,a*b];
}

const [sum,muliply] = deStructingFunction(50,30);

console.log(sum);
console.log(muliply);