const http = require('http');
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to my home page')
    }
    if(req.url === '/about') {
        res.end('This is about page')
    }

    else {
        res.end(`
        <h1>Oobs!</h1>
        
        <p>We can't seem to find the  page are looking for </p>
        
        <a href="/">back to home</a>`)
    }
})

server.listen(5000)