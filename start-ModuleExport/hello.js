//const math = require('./math');

const {add, sub} =  require('./math')

console.log("Hello I'm node js", add);

console.log(window) //it'll give error but not in browser

console.log(alert("Hey")) //it'll give error but not in browser

//All DOM, window objects and UI work has been removed form node
// npm init, defined a script



console.log(sub(3,2))

