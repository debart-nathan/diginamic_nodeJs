// MODULE HTTP/HTTPS
// 2 facettes: création de requêtes ET de serveur

// CREATION DE REQUETE (CLIENT)
const https = require('https');

const url = 'https://raw.githubusercontent.com/torvalds/linux/master/MAINTAINERS';
let count = 0;

// ENVOI D'UNE REQUETE AVEC OBJET D'OPTION
const request = https.request({
    protocol: 'https:',
    host: 'raw.githubusercontent.com',
    path: '/torvalds/linux/master/MAINTAINERS',
    method: 'GET'
});
request.setHeader('Accept', 'application/json');
request.end();

request.on('response', res => {
    console.log(
        res.headers['Content-Type']
    );
});

// ENVOI D'UNE REQUETE AVEC URL
https.get(url, res => {

    res.on('data', data => {
        count++;
        const ko = data.length / 1024;
        console.log(
            'Paquet n°%d: %iKo',
            count, ko
        );
    });

});