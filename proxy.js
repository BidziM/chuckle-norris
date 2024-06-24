var http = require('http');

//create a server object:
http.createServer(async function (req, res) {
    try{
        res.setHeader('Access-Control-Allow-Origin', '*'); /* @dev First, read about security */
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Headers', 'content-type'); // Might be helpful
        res.setHeader('Content-Type', 'application/json');
        const d = await fetch("http://chuck.animalhotels.com/random", { method: 'GET', headers: { 'Content-Type': 'application/json' } })
        .then((response) => response.json())
        .catch(error => console.log(error))
        console.log(d)
        res.end(JSON.stringify(d));
    }catch(e){
        console.log(e)
    }

}).listen(8080); 