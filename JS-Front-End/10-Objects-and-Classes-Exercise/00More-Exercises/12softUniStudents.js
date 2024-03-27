function university(someInput) {
    let register = {};
    let log = [];

    for (const row of someInput) {
        if (row.includes(': ')) {
            const [courseName, courseCapacity] = row.split(': ');

            if (!register.hasOwnProperty(courseName)) {
                register[courseName] = {'capacity': 0, 'students': []};
            }
            register[courseName].capacity += Number(courseCapacity);
        } else if (row.includes('joins')) {
            let [name, credits, email, course] = [...row.match(/(\w+)\[(\d+)\] with email (\S+) joins (\S+)/)].splice(1);
            if (register[course] && register[course]['capacity'] > 0) {
                let student = {'name': name, 'credits': credits, 'email': email};
                register[course].students.push(student);
                register[course].capacity -= 1;
            }
        }
    }

    let sortedResult = Object.entries(register)
        .sort((a, b) => b[1].students.length - a[1].students.length)

    for (const info of sortedResult) {
        const [course, capacity, studentsGroup] = [info[0], info[1].capacity, info[1].students];
        let sortedStudents = Object.entries(studentsGroup)
            .sort((a, b) => b[1].credits - a[1].credits)
            .map(a => `--- ${a[1].credits}: ${a[1].name}, ${a[1].email}`);

        log.push(`${course}: ${capacity} places left`);
        if (sortedStudents.length > 0) {
            log.push(...sortedStudents);
        }

    }
    console.log(log.join('\n'));
}


university(['JavaBasics  15',
    'user1[26] with email user1@user.com joins JavaBasics',
    'user2[36] with email user11@user.com joins JavaBasics',
    'user2[36] with email user11@user.com joins JavaBasics',
    'JavaBasics: 5',
    'C#Advanced: 5',
    'user1[26] with email user1@user.com joins C#Advanced',
    'user2[36] with email user11@user.com joins C#Advanced',
    'user3[6] with email user3@user.com joins C#Advanced',
    'C#Advanced: 1',
    'JSCore: 8',
    'user23[62] with email user23@user.com joins JSCore']
);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               12.\tSoftUni Students
Write a function that stores the students that signed up for different courses at SoftUni. 
For each course, you have to store the name, the capacity, and the students that are in it.
 For each student store the username, the email, and their credits. The input will come as 
 an array of strings. The strings will be in some of the following formats:
"{course name}: {capacity}" – add the course with that capacity. If the course exists, 
add the capacity to the existing one
"{username}[{credits count}] with email {email} joins {course name}" – add the student if 
the course exists (each student can be in multiple courses) and if there are places left 
(count of students are less than the capacity)
Finally, you should sort the courses by the count of students in descending. 
Each course should have its students sorted by credits in descending.
Output
Print the result in the format:
"{course one}: {places left} places left
--- {credits}: {username one}, {email one}

____________________________________________________________________________________________
Example

Input
['JavaBasics: 15',
'user1[26] with email user1@user.com joins JavaBasics',
'user2[36] with email user11@user.com joins JavaBasics',
'JavaBasics: 5',
'C#Advanced: 5',
'user1[26] with email user1@user.com joins C#Advanced',
'user2[36] with email user11@user.com joins C#Advanced',
'user3[6] with email user3@user.com joins C#Advanced',
'C#Advanced: 1',
'JSCore: 8',
'user23[62] with email user23@user.com joins JSCore']


Output
C#Advanced: 3 places left
--- 36: user2, user11@user.com
--- 26: user1, user1@user.com
--- 6: user3, user3@user.com
JavaBasics: 18 places left
--- 36: user2, user11@user.com
--- 26: user1, user1@user.com
JSCore: 7 places left
--- 62: user23, user23@user.com


```