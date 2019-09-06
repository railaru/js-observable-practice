import axios from 'axios';
import { fromPromise } from "rxjs/internal-compatibility";
import {fromEvent} from "rxjs";

export default function observablesFomPromise() {

    const myPromise = new Promise((resolve, reject) => {

        console.log('creating promise');

        setTimeout(() => {
            console.log('hello from promise');
        }, 3000);
    })

    //vanilla js
    // myPromise.then(x => {
    //     console.log(x);
    // })

    const name = document.getElementById('name')
    const bio = document.getElementById('bio')
    const followers = document.getElementById('followers')
    const source$ = fromPromise(myPromise);
    source$.subscribe(x => console.log(x));

    function getUser(username) {
        return axios.get(`https://api.github.com/users/${username}`)
    }

    const inputSource$ = fromEvent(document.getElementById('nameInput'), 'keyup');
        inputSource$.subscribe((e) => {

            fromPromise(getUser(e.target.value))
                .subscribe(
                    res => {
                        console.log(res);
                        name.innerText = res.data.login;
                        bio.innerText = res.data.bio;
                        followers.innerText = res.data.followers;
                    },
                    err => console.log(err));

        });
}
