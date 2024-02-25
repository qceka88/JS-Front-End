function validityChecker(x01, y01, x02, y02) {

    let firstCheck = Math.sqrt((0 - x01) ** 2 + (0 - y01) ** 2);
    let secondCheck = Math.sqrt((0 - x02) ** 2 + (0 - y02) ** 2);
    let thirdCheck = Math.sqrt(((x02 - x01) ** 2) + ((y02 - y01) ** 2));

    if (Number.isInteger(firstCheck)) {
        console.log(`{${x01}, ${y01}} to {0, 0} is valid`);
    } else {
        console.log(`{${x01}, ${y01}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(secondCheck)) {
        console.log(`{${x02}, ${y02}} to {0, 0} is valid`);
    } else {
        console.log(`{${x02}, ${y02}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(thirdCheck)) {
        console.log(`{${x01}, ${y01}} to {${x02}, ${y02}} is valid`);
    } else {
        console.log(`{${x01}, ${y01}} to {${x02}, ${y02}} is invalid`);
    }

}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);
