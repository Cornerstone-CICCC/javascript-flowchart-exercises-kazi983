let name = "Kazi";
let mark = 60;

let grade = null;

if (mark >= 80) {
    grade = "A";
} else if (mark >= 60) {
    grade = "B";
} else if (mark >= 40) {
    grade = "C";
} else {
    grade = "No grade";
}

console.log(`${name}: Grade - ${grade}`)