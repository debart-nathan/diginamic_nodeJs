console.log(`Je suis dans module.js`);


let c = "salut je vient du module.js"


function test(){
    console.log(`salut je suis une fonction de module.js`);
}


//on peut partager des elements avec d'autre fichier avec "module.exports{...}"
module.exports={
    test,
    c

}