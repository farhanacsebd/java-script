let sum = 0;
for (let i = 0; i <= 3; i++) {
    sum = sum + i;
}
console.log(sum);

// delete any perameter
var student =

    { name: "Yo Mama", age: 17 };

console.log(student.name, student.age);


delete student["age"];

console.log(student.name, student.age);