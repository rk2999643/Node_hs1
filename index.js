const http = require("http");
// const { url } = require("inspector");

const app = http.createServer((request,response)=>{
   const url =req.url;
   console.log(url);
   if(url === '/'){


    response.write("<html>")
    response.write("<head><title>Handson 1 </title></head>")
    response.write("<body>")
    response.write("<h2> What is Node/</h2>")
    response.write("<p>Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser</p>")
    response.write("<body>")
    response.write("</html>")
    response.end();
   }
   if(url==="/json"){
    response.write(JSON.stringify([
    { node:  " What is Node"},    
   { defination:   "Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser"}  
   ]))
   }
   response.end();
})

const server = http.createServer(app)
server.listen(9002,()=>{
   console.log("success");
});