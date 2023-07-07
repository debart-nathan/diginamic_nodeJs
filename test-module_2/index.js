//créer custom module

const Module1 = (function () {
    let a = 'a';
    console.log(a);
})();


//ajouté des paramètres
const Module2 = (function (param) {
    let a = param;
    console.log(a);
})("param");

//une fonction par default renvoi undefined
//donc Module1 = undefined
//pour partager avec le rest du system on peu retourner un objet
const Module3 = (function () {
    let a = 'a';
    console.log(a);
    return {
        a: a
    };
})();


/**
 *  [!] un fichier est un module ils sont donc imperméable entre eux.
 *      C'est le cas car node ajoute un unique module wrapper autour de l'entièreté deu fichier.
 *      C'est comme ça qu'il nous envoi les variable globales tel que:
 *          le path du fichier,
 *          le module(fichier) lui même (var module),
 *          tous ce qui est demander par require...
 * 
 *  on peut partager des elements avec d'autre fichier avec "module.exports{...}"
 */


//on peut import module par leur fichier avec require

const extModule =require("./module");//Je suis dans module.js

console.log(extModule.c);//salut je vient du module.js
extModule.test()//salut je suis une fonction de module.js

const ExtModule2= require("./Module2")

const extModule2= new ExtModule2(1)

extModule2.talk();