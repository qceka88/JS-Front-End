function playlist(someInput) {
    const count = someInput.shift();
    const mySongs = [];
    const wish = someInput.pop();

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    for (let i = 0; i < count; i++) {
        const [type, name, time] = someInput.shift().split('_');

        const song = new Song(type, name, time);

        mySongs.push(song)
    }

    let output = wish === 'all' ? mySongs : mySongs.filter(a => a.typeList === wish);

    output.forEach(a => console.log(a.name));
}

playlist([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);

//////////////////////////////// TASK CONDITION ////////////////////////////////
```

                               9.\tSongs
Define a class Song, which holds the following information about songs: typeList, name, and time.
You will receive the input as an array.
The first element n will be the number of songs. Next n elements will be the 
songs data in the following format: "{typeList}_{name}_{time}", and the last 
element will be typeList / "all".
Print only the names of the songs, which have the same typeList (obtained as the last parameter). 
If the value of the last element is "all", print the names of all the songs.




____________________________________________________________________________________________
Example

Input
[3,
'favourite_DownTown_3:14',
'favourite_Kiss_4:16',
'favourite_Smooth Criminal_4:01',
'favourite']



Output
DownTown
Kiss
Smooth Criminal


```