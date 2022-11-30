import {EventEmitter} from "events"

let emitter = new EventEmitter();
let key = "nightMode";
export function get() {
    let item = localStorage.getItem(key);
    return JSON.parse(item);
}
export function add(item) {
        localUpdate(item);
        emitter.emit("nightMode");
        return;
}
export function remove(item) {
    let beforeData = get()
    if (beforeData == null) {
        throw new Error("NightMode bulunamadı");
    }
    else{
        beforeData = item;
        localUpdate(beforeData);
        emitter.emit("nightMode");
    }
}

export function existData() {
    let beforeData = get();
    if (beforeData) {
        return true
    }
    else {
        return false
    }
}
export function cleaningBasket(){
    localStorage.removeItem(key)
}
function localUpdate(item) {
    localStorage.setItem(key, JSON.stringify(item))
}

export function trackNightMode(fn){
    emitter.addListener("nightMode",fn)
}
export function unTrackNightMode(fn){
    emitter.removeListener("nightMode",fn)
}