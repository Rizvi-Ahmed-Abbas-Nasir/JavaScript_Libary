// Functions
function myFunction()
{
  let array = ["Ahmed Abbas","Abbas","Rizvi","Nasir","Hussain"];
  
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
  }

}
// Function call
myFunction("Shama","Fatima");

//Declare your variable here 
var myGloble = 10;

function funct1()
{
  // Assign 5 to oopsGloble here
  oopsGloble = 5;

}

// only change code above this line 
function fun2()
{
  var output = "";
  if(typeof myGloble != "undefined"){
    output += "myGloble: "+myGloble; 
  }
  if(typeof oopsGloble != "undefined"){
    output += "oopsGloble: "+oopsGloble;
  }
  console.log(output);

}
// Function Call
funct1();
fun2();

var string_Name = 'a';

console.log(typeof(string_Name));

function timeFives(num){
  return num * 5;
}

console.log(timeFives(10));

function nextInLine(arr,item){
  arr.push(item);
  return item;
}

var testArr = [1,2,3,4,5];

console.log("Before "+ JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After " +JSON.stringify(testArr));