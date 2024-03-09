function loadingBar(status) {
    let progress = status / 10;

    let loadProgress = x => `${x * 10}% [${'%'.repeat(x)}${'.'.repeat(10 - x)}]`;
    let message = a => a === 10 ? 'Completed!' : 'Still loading...'

    let result = `${loadProgress(progress)}\n${message(progress)}`;

    console.log(result);
}

loadingBar(30);
loadingBar(100);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               9. Loading Bar
You will receive a single number between 0 and 100, which is divided with 10 without residue (0, 10, 20, 30...). 
Your task is to create a function that visualizes a loading bar depending on the number you have received in the input.




____________________________________________________________________________________________
Example

Input
30


Output
30% [%%%.......]
Still loading...



```