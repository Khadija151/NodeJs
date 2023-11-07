const fs =  require("fs");
const os = require("os");


// Blocking   Sync
//see behaviour it will print 1,blockingResult,3
console.log(1);
const blockingResult = fs.readFileSync('./contacts.txt','utf-8');
console.log(blockingResult);
console.log(3)

// Non Blocking Async
// actually it should do 1,3 and blockingResult(asynchronously)
console.log(1)
fs.readFile('./contacts.txt','utf-8', (err,nonBlockingResult)=>{console.log(nonBlockingResult)});
console.log(3)


// Default thread size 4
// we can increase upto cores, means cpus, depends machines to machiens, or how many cpu cores on server you are buying
console.log(os.cpus().lenght)

