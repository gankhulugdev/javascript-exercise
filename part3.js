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


