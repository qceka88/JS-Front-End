function string(word, text) {
    let words = text.split(' ');
    for (const element of words) {
        if (element.toLowerCase() === word.toLowerCase()) {
            console.log(word);
            return;
        }
    }
    console.log(`${word} not found!`)
}

string('javascript', 'JavaScript is the best programming language');
string('python', 'JavaScript i s the best programming language');