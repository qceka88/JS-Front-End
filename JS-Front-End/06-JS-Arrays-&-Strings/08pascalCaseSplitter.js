function splitter(text) {
    let result = text.split(/(?=[A-Z][a-z]+)/);

    console.log(result.join(', '));

}

splitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
splitter('HoldTheDoor');
splitter('ThisIsSoAnnoyingToDo');


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               8.\tPascal-Case Splitter
You will receive a single string. 
This string is written in PascalCase format. Your task here is to split this string by every word in it. 
Print them joined by comma and space.



____________________________________________________________________________________________
Example_01

Input
'HoldTheDoor'

Output
Hold, The, Door

```