function bookShelf(someInput) {
    let shelf = {};
    const addShelf = ' -> '

    let findGenre = (name) => {
        for (const data in shelf) {
            if (Object.keys(shelf[data])[0] === name) {
                return data
            }
        }
    }

    for (const row of someInput) {
        if (row.includes(addShelf)) {
            const [shelfId, genre] = row.split(addShelf)
            if (!shelf[shelfId]) {
                shelf[shelfId] = {};
                shelf[shelfId][genre] = [];
            }
        } else if (row.includes(': ')) {
            const [bookName, [authorName, genreName]] = [row.split(': ')[0], row.split(': ')[1].split(', ')];
            const shelfId = findGenre(genreName);

            if (shelf[shelfId]) {
                if (!shelf[shelfId][genreName]) {
                    shelf[shelfId][genreName] = [];
                }
                let book = {'title': bookName, 'author': authorName, 'genre': genreName};
                shelf[shelfId][genreName].push(book);
            }
        }
    }

    let findLength = a => Object.values(a)[0].length;
    let sortedResult = Object.entries(shelf).sort((a, b) => findLength(b[1]) - findLength(a[1]))
        .map(a => [a[0], ...Object.entries(a[1])]);

    for (const shelf of sortedResult) {
        const [shelfID, genre, books] = [shelf[0], shelf[1][0], shelf[1][1]]

        const sortedBooks = books
            .sort((a, b) => a.title.localeCompare(b.title))
            .map(b => `--> ${b.title}: ${b.author}`);

        console.log(`${shelfID} ${genre}: ${books.length}`);
        console.log(sortedBooks.join('\n'));
    }
}

bookShelf(['1 -> history',
    '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery',
    '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history']
);




//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               11.\tBook Shelf
Write a function that stores information about shelves and the books on the shelves. 
Each shelf has an Id and a genre of books that can be on it. Each book has a title, an author, 
and a genre. The input comes as an array of strings. They will be in the format:
"{shelf id} -> {shelf genre}" – create a shelf if the id is not taken.
"{book title}: {book author}, {book genre}" – if a shelf with that genre exists, add the book to the shelf.
After finishing reading input, sort the shelves by a count of books in it in descending. 
For each shelf sort the books by title in ascending. Then print them in the following format.
"{shelfOne id} {shelf genre}: {books count}
--> {bookOne title}: {bookOne author}
--> {bookTwo title}: {bookTwo author}
…
{shelfTwo id} {shelf genre}: {books count}
…"

____________________________________________________________________________________________
Example

Input
['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi',
 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi'
 , 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance',
  'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history']


Output
3 sci-fi: 3
--> Future of Dawn: Aiden Rose
--> Losing Dreams: Gail Starr
--> Name of Earth: Jo Bell
1 history: 2
--> Lions and Rats: Gabe Roads
--> Pilots of Stone: Brook Jay
2 mystery: 1
--> Child of Silver: Bruce Rich


```