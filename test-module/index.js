console.log("YEAH")

const car = {
    name: "Peugeot",
    year: 2021
}

console.log("La voiture %s", car.name);


// import a non default module
const path = require('path');

//see doc of module
console.log(path);

/**
 *  MODULE PATH
 * 
 */

const myPath='/dwaps/coco/java.php';

// print path only
console.log(path.dirname(myPath))

// print extension
console.log(path.extname(myPath));

//see path separator of system
console.log(path.sep);

//create a path with correct separator
console.log(path.join('dwaps','coco','pedro.php'))

// relative dir
console.log(path.resolve())

// ...


/**
 * URL
 * 
 */

const url = "https://perdu.com/ghkl?eval=java&lab=php&eval^json#lab1"

const myUrl=new URL(url);


console.log(myUrl.protocol);// https:
console.log(myUrl.pathname);// ghjkl
console.log(myUrl.hash);// #lab1

console.log(myUrl.searchParams);// return map object {key => value}

console.log(myUrl.toString());
console.log(String(myUrl));

//...