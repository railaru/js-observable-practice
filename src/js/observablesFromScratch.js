import { Observable, of } from "rxjs";


export default function observablesFromScratch() {

    const source$ = new Observable(observer => {
        console.log('creating observable');

        observer.next('hello world');
        observer.next('another value');

        observer.error(new Error('Error'));

        setTimeout(() => {
            observer.next('yet another value');
            observer.complete();
        }, 2000);
    })

    source$
        .subscribe(x => {
        console.log(x);
    },
    err => console.log(err),
        () => {
            console.log('finished');
        }
    );
}
