// // Math
// console.log(Math.abs(-2));
// console.log(Math.sign(-10));

// console.log(Math.max);
// //Number
// console.log(Number.parseInt('55'));
// console.log(Number.parseFloat('55.1'));

// //String
// let word = "Hello"
// console.log(word.includes("Hel"));
// //Arrow function
// const find = (num) => {
//     console.log(num)
// }

// find(3);

//1
const students = [
    "Mandahaa", "Anar", "Huluguu", "Dee", "Ziggy", "Tsatsaa", "Jaagii", "Muugii", "Zoe", "Meg", "Jamia"
]

const randomPick = () => {
    const rand = Math.round(Math.random() * students.length);
    console.log(rand);
    console.log(students[rand])
}

randomPick();
//2

const nearestNumber = (val) => {
    let division = val / 5;
    division = Math.round(division);
    console.log(division * 5);
}

nearestNumber(32.6);


