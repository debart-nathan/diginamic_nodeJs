// MODULE HTTP
// 2 facettes: création de requêtes ET de serveur

// CREATION DE SERVEUR
const http = require('http');
const server = http.createServer();

server.listen(4000, 'localhost');

server.on('request', (req, res) => {
    if (req.url == '/')
        res.end();
});




// CHROME: https://perdu.com

// REQUETE

const req = {
    url: 'https://perdu.com',
    headers: {
        'Accept': 'text/html; charset=utf-8'
    },
    body: {}
};

// REPONSE DU SERVEUR

const res = {
    headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Content-Length': 789
    },
    body: {
        content: '<html><head>...</head><body>...</body></html>'
    }
};