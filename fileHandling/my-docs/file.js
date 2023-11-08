const fs = require('fs');


// this was a synchronous call, wana write and create file 
//fs.writeFileSync('./test.txt',"Hey there");

//Async
fs.writeFile("./test.txt", "Khadija Ishaq", (err)=>{})

 // both above appears same, if we don't know blocking non-blocikng requests


 // worked fine
  const result = fs.readFileSync("./contacts.txt", "utf-8");
  console.log(result);

 //now Async one
 //threw error
 fs.readFile("./contacts.txt", "utf-8")

// the above does not returns result but expect  a call back with error or result

fs.readFile("./contacts.txt", "utf-8", (err,result)=>{
    if(err){
        console.log("Error ",err);
    }
    else{
        console.log("Result ",result);
    }
})

//same  sync for file write also expects a call back with error 


//write overwrites on a file, but append will next add the content or append, it also has both sync and async

fs. appendFileSync("./contacts.txt", new Date().getDate().toLocaleString())
fs. appendFileSync("./contacts.txt", ` a new append\n`)

//it'll create a copy of test file with name copy
fs.cpSync('./test.txt','./copy.txt');

// now delete copy file
fs.unlinkSync('./copy.txt')
// to see all stats of a file
console.log(fs.statSync("./test.txt"));
// to create a folder
fs.mkdirSync('my-docs');

fs.mkdirSync('my-docs/a/b', {recursive: true})

