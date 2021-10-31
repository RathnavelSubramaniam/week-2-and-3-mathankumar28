//Array flattenr activity
// Define a function arrayFlattener with a 2 dimensional array as parameter:
// example of 2 dimensional array: [1,[2,3],4,5]
function arrayFlattener(){
  var arr=[1,[2,3],4,5];
  return arr;
}
//Return a new 1 dimensional array like, [1,2,3,4]

//your code here
//uncomment next line one by one, then check the console for results
console.log(arr.flat())

//don't change this line
if (typeof module !== "undefined") {
  module.exports = {
    arrayFlattener,
  };
}
