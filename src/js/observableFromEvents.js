import {from, fromEvent} from "rxjs";

export default function observablesFromEvents() {

    const btn = document.getElementById('btn');
    const btnStream$ = fromEvent(btn, 'click');
    btnStream$.subscribe( e => {
        console.log(e);
    },  err => {
        console.log(err);
    },  () => {
        console.log('completed');
    })

    const input = document.getElementById('input');
    const output = document.getElementById('output');
    const inputStream$ = fromEvent(input, 'keydown');
    inputStream$.subscribe( e => {
        console.log(e.currentTarget.value);
        output.innerHTML += e.currentTarget.value + '<br>';
    },  err => {
        console.log(err);
    },  () => {
        console.log('completed');
    })

    const moveStream$ = fromEvent(document, 'mousemove');
    moveStream$.subscribe( e => {
        //console.log(e);
        output.innerHTML = `X: ${e.clientX} Y: ${e.clientY}`
    },  err => {
        console.log(err);
    },  () => {
        console.log('completed');
    })

}
