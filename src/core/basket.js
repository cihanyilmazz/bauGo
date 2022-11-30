import {EventEmitter} from "events"

let emitter = new EventEmitter();
let key = "basket";
export function getOrDefine() {
    let items = localStorage.getItem(key);
    if (items == null) {
        items = [];
        localUpdate(items);
        return
    }
    return JSON.parse(items);
}
export function add(item) {
    let items = getOrDefine();
    if (!existData(item.id)) {
        items.push(item);
        localUpdate(items);
        emitter.emit("basket");
        
        return;
    }

}
export function remove(id) {
    let items = getOrDefine()
    let indexOf = items.findIndex(course => course.id === id);
    if (indexOf < 0) {
        throw new Error("Kurs Bulunamadı");
    }
    items.splice(indexOf, 1);
    localUpdate(items);
    console.log("looo")
    emitter.emit("basket");
}

export function existData(id) {
    let items = getOrDefine();
    let check = items.findIndex(x => x.id === id);
    if (check >= 0) {
        return true
    }
    else {
        return false
    }
}
export function cleaningBasket(){
    localStorage.removeItem(key)
}
function localUpdate(items) {
    localStorage.setItem(key, JSON.stringify(items))
}

export function trackBasket(fn){
    emitter.addListener("basket",fn)
}
export function unTrackBasket(fn){
    emitter.removeListener("basket",fn)
}