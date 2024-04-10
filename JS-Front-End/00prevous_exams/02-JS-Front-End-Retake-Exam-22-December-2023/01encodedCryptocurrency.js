function encodedCryptocurrency(someInput) {
    let message = someInput.shift();

    let command = someInput.shift();

    while (command !== 'Buy') {

        if (command.includes('TakeEven')) {
            const evenCharacter = message.split('').map((char, i) => i % 2 === 0 ? char : '');
            message = evenCharacter.filter(l => l !== '').join('');
            console.log(message);

        } else if (command.includes('ChangeAll?')) {
            const [_, substring, replacement] = command.split('?');

            if (substring && replacement) {
                while (message.includes(substring)) {
                    message = message.replace(substring, replacement);
                }
                console.log(message);
            }


        } else if (command.includes('Reverse?')) {
            const substring = command.replace('Reverse?', '');

            if (message.includes(substring)) {
                const reversedSubstring = substring.split('').reverse().join('');
                message = message.replace(substring, '') + reversedSubstring;
                console.log(message);
            } else {
                console.log('error')
            }

        }

        command = someInput.shift();
    }

    console.log(`The cryptocurrency is: ${message}`);
}

encodedCryptocurrency((["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",
    "TakeEven",
    "Reverse?!nzahc",
    "ChangeAll?m?g",
    "Reverse?adshk",
    "ChangeAll?z?i",
    "Buy"])
)

// encodedCryptocurrency((["PZDfA2PkAsakhnefZ7aZ",
//     "TakeEven",
//     "TakeEven",
//     "TakeEven",
//     "ChangeAll?Z?X",
//     "ChangeAll?A?R",
//     "Reverse?PRX",
//     "Buy"])
// )
