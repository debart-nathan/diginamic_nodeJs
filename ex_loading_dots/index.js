const EventEmitter = require('events');
const fs = require("fs");
const path = require('path');



const emitter = new EventEmitter
let param;


emitter.on("loadingStart", () => {
    loading(param.dotNumber, param.dotInterval);
});

emitter.on("addDot", () => {
    process.stdout.write(".")
})

emitter.on("loadingEnd", (interval) => {
    clearInterval(interval);
    emitter.removeAllListeners();
    process.exit(0)
})


function loading(nbPoint, timePoint) {
    let iter = 0;
    const load = setInterval(function (){
        emitter.emit("addDot");
        if (++iter == nbPoint) {
            emitter.emit("loadingEnd",load);
        }
    }, timePoint);
}


fs.readFile(path.resolve() + path.sep + "time.json", async (err, data) => {
    if (err) return console.error(err);
    param = JSON.parse(String(data))
    emitter.emit("loadingStart")
});