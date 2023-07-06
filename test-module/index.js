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

const myPath = '/dwaps/coco/java.php';

// print path only
console.log(path.dirname(myPath))

// print extension
console.log(path.extname(myPath));

//see path separator of system
console.log(path.sep);

//create a path with correct separator
console.log(path.join('dwaps', 'coco', 'pedro.php'))

// relative dir
console.log(path.resolve())

// ...


/**
 * URL
 * 
 */

const url = "https://perdu.com/ghkl?eval=java&lab=php&eval^json#lab1"

const myUrl = new URL(url);


console.log(myUrl.protocol);// https:
console.log(myUrl.pathname);// ghjkl
console.log(myUrl.hash);// #lab1

console.log(myUrl.searchParams);// return map object {key => value}

console.log(myUrl.toString());
console.log(String(myUrl));

//...

/**
 * Module FS
 * 
 */

const fs = require("fs");

fs.readFile(__filename, (err, data) => {
    if (err) return console.error(err);
    //console.log(String(data)); //affiche le buffer
});

fs.readFile(__filename, (err, data) => {
    if (err) return console.error(err);
    //convertir le buffer (data) en string est seulement utile en local
    //console.log(String(data)); //affiche le fichier
});

/** exercice
 * Écrire un programme qui copie un fichier si il existe dans un nouveau fichier
 */

function copyIfExist(fd) {
    fs.readFile(fd, (err, data) => {
        if (err) return console.error(err);
        //convertir le buffer (data) en string est seulement utile en local
        fs.writeFile(`${fd}-copie`, data, (err,) => {
            if (err) return console.error(err);
        });
    });
}

//you can also use fs.copyFile(file) but you have to do the verification that file exist before it 
//note that copyFile is faster



/** exercice
 * redirecting the log
 */

const { Console } = require('console');
const logger = new Console(
    //createWriteStream est ouvert tout le long du programme
    fs.createWriteStream("./stdout.log"),
    fs.createWriteStream("./stderr.log")
);

logger.log('Salut les amis');
logger.error('Oups !');


/**
 * Events
 * 
 */


//event peut être utilisé 
//pour déclenché des appel
//pour réagir a des événement system
//pour géré les entré sortie entre application et module nodes


//class généralement nommé EventEmitter
const EventEmitter = require('events');
const emitter = new EventEmitter();

//custom event but no listener
emitter.emit('FILE_OPENED');

//listener
emitter.on('FILE_OPENED', () => {
    console.log("le fichier a bien été ouvert")
});

//event that is listened on so it is handled
emitter.emit('FILE_OPENED');

//on peu avoir plus de 1 listener
emitter.on('FILE_OPENED', () => {
    console.log("le fichier a bien déjà été ouvert")
});

emitter.emit('FILE_OPENED');

//once est un listener qui ne peut être utiliser qu'une fois
emitter.once('FILE_OPENED', () => {
    console.log("le fichier a bien déjà été ouvert")
});

emitter.emit('FILE_OPENED')
emitter.emit('FILE_OPENED')

//creation of our own class EventEmitter

class EventEmitter2 {
    constructor() {
        this.eventList = [];
    }
    on(event, handler) {
        const eventListenerList = this.eventList[event]
        if (typeof eventListenerList != "undefined") {
            this.eventList[event].push({ type: "on", handler: handler })
        } else {
            this.eventList[event] = [{ type: "on", handler: handler }]
        }
    }
    once(event, handler) {
        const eventListenerList = this.eventList[event]
        if (typeof eventListenerList != "undefined") {
            this.eventList[event].push({ type: "once", handler: handler })
        } else {
            this.eventList[event] = [{ type: "once", handler: handler }]
        }
    }

    emit(event) {
        const eventListenerList = this.eventList[event]
        if (typeof eventListenerList != "undefined") {
            eventListenerList.forEach((handler, index, object) => {
                handler.handler();
                if (handler.type == "once") {
                    object.splice(index, 1);
                }
            });
        }
    }

}

const emitter2 = new EventEmitter2

console.log(`first event2`);
emitter2.emit('FILE_OPENED2');

emitter2.on('FILE_OPENED2', () => {
    console.log("le fichier a bien été ouvert 2")
});

console.log(`second event2`);
emitter2.emit('FILE_OPENED2');

emitter2.once('FILE_OPENED2', () => {
    console.log("le fichier a bien déjà été ouvert 2")
});

console.log(`third event2`);
emitter2.emit('FILE_OPENED2');

console.log(`fourth event2`);
emitter2.emit('FILE_OPENED2');