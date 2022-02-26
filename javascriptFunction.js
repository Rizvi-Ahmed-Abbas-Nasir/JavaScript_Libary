// Pre-define Functions(readyMade function) in javascript 
// Push Function
// An Array 
var myArray = [`'Abbas",34,5,53,"Rizvi'`];

//Print Whole array 
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    
    console.log("The Whole Array: "+element);
    
}

// Example of push
myArray.push([99]);
//pushed in the myArray
console.log("This Will Push the Elements: "+myArray);
//Example of pop
myArray.pop();
//poped the last elements
console.log("This Will Pop the Elements: "+myArray);
// Another Example of pop
var popFunction = myArray.pop(4);
console.log("Another example of pop function: "+myArray);
// Example of shift
myArray.shift();
//shifted the first elements
console.log("This will shift the first elements: "+myArray);
// Example of unshift
myArray.unshift("Abbas");
//Unshifed the Elements
console.log("This will Unshift the first elements: "+myArray);