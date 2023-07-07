const EventEmitter = require('events');
const fs = require("fs");
const path = require('path');



const emitter = new EventEmitter
let param;


emitter.on("load", () => {
    loading(param.dotNumber, param.dotInterval);
});

emitter.on("addDot", () => {
    process.stdout.write(".")
})

async function load(ms) {
    return new Promise(res => setTimeout(res, ms))
}


async function loading(nbPoint, timePoint) {
    for (let i = 0; i < nbPoint; i++) {
        await load(timePoint)
        emitter.emit("addDot");
    }
}


fs.readFile(path.resolve() + path.sep + "time.json", async (err, data) => {
    if (err) return console.error(err);
    param = JSON.parse(String(data))
    emitter.emit("load")
});