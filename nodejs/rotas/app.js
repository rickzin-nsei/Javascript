import http from 'http';

const PORT = 3000;

const server = http.createServer((request, Response) => {
    const url = request.url;
    const method = request.method;

    Response.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (url === '/') {
        Response.statuscode = 200;
        Response.end('<h1>Página Inicial</h1>');
    } else if (url === '/sobre' && method === 'GET') {
        Response.statuscode = 200;
        Response.end('<h1>Sobre nós</h1><p>Esta é uma aplicação de um exemplo com Node.js puro.</p>');
    } else if (url === '/contato') {
        Response.statuscode = 200;
        Response.end('<h1>fale conosco</h1>');
    } else {
        Response.statuscode = 404;
        Response.end('<h1>404 - Página não encontrada</h1>');
    } 
});

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});