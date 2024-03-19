function meeting(someInput) {
    let log = [];
    let schedule = {};

    for (const record of someInput) {
        let [day, name] = record.split(' ');

        if (!(day in schedule)) {
            schedule[day] = name;
            log.push(`Scheduled for ${day}`)
        } else {
            log.push(`Conflict on ${day}!`)
        }
    }

    for (const record in schedule) {
        log.push(`${record} -> ${schedule[record]}`);
    }

    console.log(log.join('\n'));
}

meeting(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               6.\tMeetings
Write a function that manages meeting appointments. The input comes as an array of strings. 
Each string contains a weekday and person’s name. For each successful meeting, print a message. 
If you receive the same weekday twice, the meeting cannot be scheduled so print a conflicting message. 
In the end, print a list of all successful meetings. 





____________________________________________________________________________________________
Example

Input
['Monday Peter',
 'Wednesday Bill',
 'Monday Tim',
 'Friday Tim']


Output
Scheduled for Monday
Scheduled for Wednesday
Conflict on Monday!
Scheduled for Friday
Monday -> Peter
Wednesday -> Bill
Friday -> Tim

```