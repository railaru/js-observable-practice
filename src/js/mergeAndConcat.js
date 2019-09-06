import {map, mapTo, take} from 'rxjs/operators';
import {concat, interval, merge, range} from 'rxjs';

export default function mergeAndConcat() {

    //
    //merge runs at the same time, while concat runs one after another

    // //emit every 2.5 seconds
    //     const first = interval(2500);
    // //emit every 2 seconds
    //     const second = interval(2000);
    // //emit every 1.5 seconds
    //     const third = interval(1500);
    // //emit every 1 second
    //     const fourth = interval(1000);
    //
    // //emit outputs from one observable
    //     const example = merge(
    //         first.pipe(mapTo('FIRST!')),
    //         second.pipe(mapTo('SECOND!')),
    //         third.pipe(mapTo('THIRD')),
    //         fourth.pipe(mapTo('FOURTH'))
    //     );
    // //output: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
    //     const subscribe = example.subscribe(val => console.log(val));

    const source$ = range(0, 5)
        .pipe(
          map(v => 'source 1: ' + v)
        );

    const source2$ = range(6, 11)
        .pipe(
            map(v => 'source 2: ' + v)
        );

    concat(source$, source2$)
        .subscribe(val => console.log(val));

}


