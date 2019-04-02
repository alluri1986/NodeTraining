const fs = require('fs');

const requestHandler = (req,res) => {

    const url = req.url;
    const method = req.method;

    if(url ==='/')
    {
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit" name="submit" text="Submit"/>Submit</button></form></body>');
        res.write('</html>')
        return res.end();
    }

    if(url === '/message' && method === 'POST')
    {
        const body = [];
        req.on('data',()=>
        {
            body.push();
        });

        req.on('end',()=>
        {
            const parsedBody = Buffer.concat(body).toString();    
            console.log(parsedBody);
        })
        
        fs.writeFile('message.txt','hello Pratap',(err)=>{
            console.log('File Uploaded');
            res.statusCode = 302;
            res.setHeader('Location','/');
            return res.end();
        });

    }

    res.setHeader('Content-Type','test/html');
    res.write('<html>')
    res.write('<head><title>My First Page </title></head>')
    res.write('<body><h1>Hello from Node JS Server</h1></body>');
    res.write('</html>')
    res.end();

}


module.exports = {
    handler: requestHandler,
    someText: 'Some hard coded text'
}

