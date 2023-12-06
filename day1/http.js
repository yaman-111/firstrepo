const http =require('http');
const server= http.createServer((req, res)=>{
if(req.url==='/'){
    res.end('Welcome to home page');
}
if(req.url==='/contact-us'){
    res.end('email: yamansharma2359@gmail.com');
}
res.end(`<h1>oops the page you look for doesn't exist</h1>
<a href="/">go to home page</a>`);
})
server.listen(5000)