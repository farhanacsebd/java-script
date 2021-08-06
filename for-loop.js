// for (var i = 20; i > 0; i--) {
//     console.log(i);
// }




// for (let i = 1; i < 10; i = i + 2) {
//     console.log(i)
// }

/* for (let i = 0; i < 30; i++) {
    console.log(i);
    if (i == 8) {
        break;
    }
} */

var number = [21, 98, 45, 53, 76, 8, 21, 145, 77, 101];
for (let i = 0; i < number.length; i++) {
    var numbers = number[i];

    if (numbers > 90) {
        continue;
    }
    console.log(numbers);
}