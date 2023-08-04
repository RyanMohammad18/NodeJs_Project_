/* 
** Title: Uptime monitoring Application
** Title: Restful api to monitor up and down time of user defined links

*/


//dependencies
const http = require('http');

//app object = module scafolding
const app ={};

// configuration

app.config = {
    port: 3000
};

//create server
app.createServer = () =>{
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, ()=>{
        console.log(`listening to port ${app.config.port}` );

    });

};

//handle request server

app.handleReqRes = (req,res) =>{
    res.end('Hello Worldsss');
}

app.createServer();