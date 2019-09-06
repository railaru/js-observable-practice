import { from } from "rxjs";

export default function observablesFromArrays() {
    const numbers = [12, 43, 3, 643, 23, 67, 32];
    const numbers$ = from(numbers);

    numbers$.subscribe(
        v => {
            console.log(v);
        },
        err => {
            console.log(err);
        },
        () => {
            console.log('complete');
        }
    );

    const posts = [
        {
            title: 'Post one',
            body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
        },
        {
            title: 'Post two',
            body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
        },
        {
            title: 'Post three',
            body: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
        },
    ];
    const posts$ = from(posts);
    const postsOutput = document.getElementById('posts');

    posts$.subscribe(
        post => {
            console.log(post);
            postsOutput.innerHTML +=
                `<li>
                   <h3>${post.title}</h3>
                   <p>
                    ${post.body}     
                   </p>
                 </li>`
        },
        err => {
            console.log(err);
        },
        () => {
            console.log('complete');
        }
    );

    const set = new Set(['Hello', 44, {title: 'My title'}]);
    const set$ = from(set);

    set$.subscribe(
        set => {
            console.log(set);
        },
        err => {
            console.log(set);
        },
        () => {
            console.log('complete');
        }
    );

    const map = new Map([[1,2], [3,4], [5,6]]);
    const map$ = from(map);

    map$.subscribe(
        map => {
            console.log(map);
        },
        err => {
            console.log(map);
        },
        () => {
            console.log('complete');
        }
    );
}
