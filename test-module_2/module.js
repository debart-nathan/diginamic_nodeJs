console.log(`Je suis dans module.js`);


let c = "salut je vient du module.js"


function test(){
    console.log(`salut je suis une fonction de module.js`);
}


//on peut partager des elements avec d'autre fichier avec "module.exports{...}"
exports.test = test;
exports.c = c;

/**
 *  [!] exports est un alias de module.exports
 *      exports = x
 *      et module.exports = x
 *      écrase ce lien et seul la valeur de module.exports compte.
 *      il faut donc faire attention a leurs utilisation.
 */