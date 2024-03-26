function browserHistory(browserInput, actionsData) {
    let browser = browserInput;

    for (const commandData of actionsData) {
        let [act, tab] = commandData.split(' ');

        if (act === 'Open') {
            browserInput['Open Tabs'].push(tab)
            browser['Browser Logs'].push(commandData);

        } else if (act === 'Close') {
            if (browser['Open Tabs'].includes(tab)) {
                browserInput['Open Tabs'] = browserInput['Open Tabs'].filter(a => a !== tab);
                browser['Recently Closed'].push(tab)
                browser['Browser Logs'].push(commandData);
            }
        } else if (act === 'Clear') {
            browserInput['Open Tabs'] = [];
            browser['Recently Closed'] = [];
            browser['Browser Logs'] = [];
        }

    }
    console.log(browser['Browser Name'])
    let browserDataKeys = Object.keys(browser);
    for (let i = 1; i < browserDataKeys.length; i++) {
        let [action, tabs] = [browserDataKeys[i], browser[browserDataKeys[i]]]
        console.log(`${action}: ${tabs.join(', ')}`)

    }

}

browserHistory({
        "Browser Name": "Google Chrome", "Open Tabs": ["Facebook", "YouTube", "Google Translate"],
        "Recently Closed": ["Yahoo", "Gmail"],
        "Browser Logs": ["Open YouTube", "Open Yahoo", "Open Google Translate", "Close Yahoo", "Open Gmail",
            "Close Gmail", "Open Facebook"]
    },
    ["Close Facebook", "Open StackOverFlow", "Open Google"]
);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               6.\tBrowser History
As input, you will receive two parameters: an object and a string array.
The object will be in format: 
{Browser Name}:{Name of the browser}, Open tabs:[…], Recently Closed: […], Browser Logs: […]. 
Your task is to fill in the object based on the actions we will get in the array of strings.
You can open any site in the world as many times as you like; if you do that add it to the open tabs.
You can close only these tabs you have opened already! If the current action 
contains a valid opened site, you should 
remove it from "Open Tabs" and put it into "Recently closed", otherwise don't do anything!
Browser Logs will hold every single Valid action, which you did (Open and Close).
There is a special case in which you can get an action that says: "Clear History and Cache". 
That means you should empty the whole object.
In the end, print the object in the format:
{Browser name}
Open Tabs: {[…]} // Joined by comma and space
Recently Closed: {[…]} // Joined by comma and space
Browser Logs: {[…]} // Joined by comma and space

____________________________________________________________________________________________
Example

Input
{"Browser Name":"Mozilla Firefox",
    "Open Tabs":["YouTube"],
    "Recently Closed":["Gmail", "Dropbox"],
    "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]


Output
Mozilla Firefox
Open Tabs: Twitter
Recently Closed: 
Browser Logs: Open Twitter

```