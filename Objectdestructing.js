//Object Destructing 
const objectForDestructing = {
    Name: "Ahmed Abbas Rizvi",
    Id: 1124,
    Number: 993535353
}
// Use Curle Barsces'{}' Instead of Braces'[]'
const {Name, Id,Number} = objectForDestructing;
//print whole elemenst in object
const { ... rest } = objectForDestructing
console.log(Name);
console.log(rest);
