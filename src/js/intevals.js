import {interval, timer, range} from "rxjs";
import {take} from "rxjs/operators";

export default function intervals() {

    const source$ = interval(100)
        .pipe(
            take(5)
        )

    source$.subscribe(
        x => console.log(x),
            err => console.log(err),
        () => {
            console.log('intervals completed')
        }
        );

    const timerSource$ = timer(5000, 2000)
        .pipe(
            take(5)
        )

    timerSource$.subscribe(
        x => console.log(x),
        err => console.log(err),
        () => {
            console.log('timer completed')
        }
    );

    const rangeSource$ = range(25, 100)

    rangeSource$.subscribe(
        x => console.log(x),
        err => console.log(err),
        () => {
            console.log('range timer completed')
        }
    );
}
