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