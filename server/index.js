const http = require('http');
const fs = require('fs');
const url = require('url');
// npm i url


// it will create a web server for us (a baisc serve, without any express or something)
const myServer = http.createServer((req, res)=>{
    console.log(req.headers); 
    console.log("A new request recieved");
    // logging request and then sending response
    const log = `${Date.now()} ": Request recieved from url " ${req.url}\n`;
    
    const myUrl = url.parse(req.url)
    const urlWithParsedQuery = url.parse(req.url,true);
    console.log(myUrl);
    console.log(urlWithParsedQuery)
    console.log(myUrl.pathname);
    

    // it should be non blocking means async
    fs.appendFile("./logs.txt", log, (err, result)=>{
        switch(urlWithParsedQuery.pathname){
            case("/"):
            res.end("HomePage");
            //we can send html as well, which we call server side rendering
            break;

            case("/about"):
            const name =  urlWithParsedQuery.query.name;
            res.end(`Hello ${name}`);
            break;

            case("/search"):
            const search = urlWithParsedQuery.query.search_query;
            res.end(`Here are your search results for ${search}`)
            break;

            default:
                res.end("404 Not Found");

        }
    })

});

// it takes a call function request listerner which can process out incoming request

// we must listen the server on some door, which is port, 
//a call back is optional to check if everthing works then we can have something 
myServer.listen(8000, ()=>{
 console.log(" Server started successfully on port 8000");
})