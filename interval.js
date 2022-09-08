
const emitter = new (require('events')).EventEmitter();
let count = 0;
emitter.on("loop", () => {
    count++;
    setTimeout(() => {
        console.log(count);
        emitter.emit("loop");
    }, 1000);
});
emitter.emit("loop");
