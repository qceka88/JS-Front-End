function movies(someInput) {
    const movieLibray = [];
    let checkCommand = (a, c) => a.includes(c.trim()) ? a.split(c) : [false, false]
    let findMovie = (a) => movieLibray.find(x => x.name === a)


    for (const row of someInput) {
        let addMovieName = checkCommand(row, 'addMovie ').pop();

        if (addMovieName) {
            const movie = {'name': addMovieName};
            movieLibray.push(movie);

            continue;
        }

        const [dirMovieName, directorName] = checkCommand(row, ' directedBy ');
        if (directorName) {
            const movie = findMovie(dirMovieName);
            if (movie) {
                movie.director = directorName;

                continue;
            }
        }

        const [dateMovieName, date] = checkCommand(row, ' onDate ');
        if (date) {
            const movie = findMovie(dateMovieName);
            if (movie) {
                movie.date = date;
            }
        }


    }

    const filteredMovies = movieLibray.filter(m => m.name && m.director && m.date);

    for (const movie of filteredMovies) {
        const result = JSON.stringify(movie);
        console.log(result);
    }

}

movies([
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
    ]
);


//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               4.\tMovies
Write a function that stores information about movies inside an array. 
The movie's object info must be name, director, and date. You can receive several types of input:
•\t"addMovie {movie name}" – add the movie
•\t"{movie name} directedBy {director}" – check if the movie exists and then add the director
•\t"{movie name} onDate {date}" – check if the movie exists and then add the date
At the end print all the movies that have all the info 
(if the movie has no director, name, or date, don’t print it) in JSON format.

____________________________________________________________________________________________
Example

Input
[
'addMovie Fast and Furious',
'addMovie Godfather',
'Inception directedBy Christopher Nolan',
'Godfather directedBy Francis Ford Coppola',
'Godfather onDate 29.07.2018',
'Fast and Furious onDate 30.07.2018',
'Batman onDate 01.08.2018',
'Fast and Furious directedBy Rob Cohen'
]

Output
{"name":"Fast and Furious","date":"30.07.2018","director":"Rob Cohen"}
{"name":"Godfather","director":"Francis Ford Coppola","date":"29.07.2018"}


```