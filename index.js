// Code your solutions in this file

function writeCards(array, event) {
    const thankYou = [];

    for (var i = 0; i < array.length; i++) {
        thankYou.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }

    return thankYou;
}

console.log(writeCards(['Lisa', 'Kaitlin', 'Jan'], 'surprise'));

function countDown(num) {
    let count = 10;
    while (count >= 0) {
        console.log(count--);
    }
}