function schoolRegister(someInput) {
    let schoolRegister = {};
    let extractor = a => Number(a.split(': ')[1]) ? Number(a.split(': ')[1]) : a.split(': ')[1]
    for (const row of someInput) {
        const [nameData, gradeData, averageScoreData] = row.split(', ');
        const [name, grade, averageScore] = [extractor(nameData), extractor(gradeData)+1, extractor(averageScoreData)];

        if (averageScore < 3) {
            continue;
        }

        const student = {'name': name, 'averageScore': averageScore};

        if (!schoolRegister[grade]) {
            schoolRegister[grade] = [];
        }
        schoolRegister[grade].push(student);
    }

    for (const grade in schoolRegister) {

        const studentsData = schoolRegister[grade];
        const names = studentsData.map(a=> a.name);
        const allScores = studentsData.map(a=> a.averageScore);
        const averageScore = allScores.reduce((a,b)=> a+b) / allScores.length;

        console.log(`${grade} Grade`);
        console.log(`List of students: ${names.join(', ')}`);
        console.log(`Average annual score from last year: ${averageScore.toFixed(2)}`);
        console.log();
    }

}

schoolRegister([
        "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ]
)


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                              5.\tSchool Register
In this problem, you have to arrange all students by grade. You as the secretary of the school principal 
will process students and store them into a school register before the new school year hits. 
As a draft, you have a list of all the students from last year but mixed. Keep in mind that if a 
student has a lower score than 3, he does not go into the next class. As a result of your work, 
you have to print the entire school register sorted in ascending order by grade already filled 
with all the students from last year in the format:
\`{nextGrade} Grade
List of students: {All students in that grade}
Average annual score from last year: {average annual score on the entire class from last year}\`
And empty row {console.log}
The input will be an array with strings, each containing a student's name, last year's grade, 
and an annual score. The average annual score from last year should be formatted to the second decimal point.


____________________________________________________________________________________________
Example

Input
[
"Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]


Output
9 Grade
List of students: Mark, Daryl
Average annual score from last year: 5.35

10 Grade
List of students: Ethan, Joey, Bill
Average annual score from last year: 5.52

11 Grade
List of students: Steven, Philip, Gavin
Average annual score from last year: 4.42

12 Grade
List of students: Bob, Peter
Average annual score from last year: 5.02


```