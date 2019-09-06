import {of} from "rxjs";
import {mergeMap} from "rxjs/operators";

export default function mergeMapAndSwitchMap() {

    //WRONG WAY

    // of('hello ')
    //     .subscribe(v => {
    //         of(v + 'everyone')
    //             .subscribe(x => console.log(x));
    //     });

    //RIGHT WAY

    of('hello')
        .pipe(
            mergeMap(v => {
                return of(v + ' everyone');
            })
        )
        .subscribe(x => console.log(x));
}
