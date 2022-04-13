const http = require('http');


const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res)=>{
    console.log(req);

    res.writeHead(200, {'Content-Type': 'text/plain'});

    const persona = {
        'id': 1,
        'name': 'Juan'
    };
        
    res.write(JSON.stringify(persona));


    res.end();
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`);
});
