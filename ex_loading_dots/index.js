const EventEmitter = require('events');




const emitter = new EventEmitter
let param;
const {dotNumber=3, dotInterval=100} = require("./config.json")


emitter.on("loadingStart", () => {
    loading(dotNumber, dotInterval);
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



emitter.emit("loadingStart")
