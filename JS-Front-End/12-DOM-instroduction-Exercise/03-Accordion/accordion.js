function toggle() {
    const buttonElement = document.querySelector('.button');
    const textElement = document.getElementById('extra');

    if (buttonElement.textContent === 'More') {
        console.log(1)
        buttonElement.textContent = 'Less';
        textElement.style.display = 'block';
    }  else if (buttonElement.textContent === 'Less'){
        buttonElement.textContent = 'More';
        textElement.style.display = 'none';
    }
}

//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                    3.\tAccordion
An HTML file is given and your task is to show more/less information. By clicking the [More] button, 
it should reveal the content of a hidden div and changes the text of the button to [Less]. 
When the same link is clicked again (now reading Less), hide the div and change the text of the link to More. 
Link action should be toggleable (you should be able to click the button an infinite amount of times).


!! CHECK PICTURE

```