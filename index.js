let fs = require('fs');

let f1 = fs.readFile('file.txt', (err, data) => {
    if (err) {
      console.log('Error', err);
      return;
    }
    console.log(data.toString());
    });

// let f1 = fs.readFileSync('file.txt');
// console.log("" + data);

let data = "Hello World 2";

fs.writeFile('file.txt',data,(err)=>{
    if (err){
        console.log("Error",err);
        return;
    }
    console.log("Written : ", data );

})

fs.appendFile('file.txt'," class is going on",'utf-8',(err)=>{
    console.log("data appended");
})

fs.mkdir('dir1', (err)=>{
    if (err){
        console.log("error");
    }
    console.log("dir formed");
})

// fs.rmdir('dir1',{recursive : true},(err)=>{
//     console.log("dir1 removed");
// })

// fs.rename('file.txt','new_file.txt', (err)=>{
//     console.log("file name changed");
// })

// const p = "/home/syeda/node-pr/file.txt";
// const path = require("path");
// const new_p = "/home/syeda/node-pr/dir1";
// // const dirname = path.dirname(p);
// // const extension = path.extname(p);

// // console.log(dirname);
// // console.log(extension);

// fs.copyFile(path.dirname(p),path.dirname(new_p),(err)=>{
//     console.log("file copied");
// })

const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if(req.url == '/login'){
        fs.readFile('login.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('Error: Unable to load the page');
            } else {
                res.writeHead(200);
                res.write(data);
            }
            res.end();
        });
    }
    else{
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('Error: Unable to load the page');
            } else {
                res.writeHead(200);
                res.write(data);
            }
            res.end();
        });
    }
});

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
});