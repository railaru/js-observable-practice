import {from, interval} from "rxjs";
import {map, pluck, take} from "rxjs/operators";
import axios from "axios";
import {fromPromise} from "rxjs/internal-compatibility";

export default function mapAndPluck() {

    const source$ = interval(1000)
        .pipe(
            take(10),
            map(v => v * v)
        )

    source$.subscribe(v => console.log(v));

    const source2$ = from(['john', 'bob', 'tom'])
        .pipe(
            map(v => v.toUpperCase()),
            map(v => 'I am ' + v)
        );

    source2$.subscribe(v => console.log(v));

    function getUser(username) {
        return axios.get(`https://api.github.com/users/railaru`)
    }

    const userData = fromPromise(getUser('railaru'))
        .subscribe(
            res => {
                console.log(res);
            },
            err => console.log(err));

    const users = [
        {name: 'Will', age: 34},
        {name: 'Bill', age: 35},
        {name: 'Bob', age: 36}
    ]

    const users$ = from(users);

    users$.pipe(
        pluck('user')
    )

    users$.subscribe(x => console.log(x))

}
