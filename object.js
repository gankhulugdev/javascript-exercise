/*//1 Create object
const person = {};
person.firstName = "Gankhulug";
person.lastName = "Bayarsaikhan";
person.occupation = "Student";
//2 Access object via dot and bracket notations
console.log(person.firstName);
console.log(person['firstName']);
console.log(person.lastName);
console.log(person['lastName']);
console.log(person.occupation);
console.log(person['occupation']);
//3 Add hobby
person.hobby = "Breakdance";

//print before remove occupation
console.log(person);

//4 Remove occupation
delete person.occupation;

console.log(person);
*/
/*
const students = ["A", 20, "B", 23, "C"];
//1 remove C
students.pop();
console.log(students);
//2 remove A
students.shift();
console.log(students);
//3 add ["A1" , "A2"]
students.unshift(["A1", "A2"]);
console.log(students);
//4 add true
students.push(true);
console.log(students);
//5 replace "B" with "U"
students[students.indexOf("B")] = "U";
console.log(students);
*/

function findGreaterNum(a, b) {
    let grt = 0;
    if (typeof(a) == typeof(2) && typeof(b) == typeof(2)) {
        if (a > b) {
            grt = a;
        } else if (a < b) {
            grt = b;
        } else {
            console.log("bitgii adil too oruulaad bai.");
            return;
        }
        console.log(`"The greater number of ${a} and ${b} is ${grt}" when I pass ${a} and ${b} as arguments`);
    }else{
        console.log("Number oruulaachee bitgii String oruulaad bai.")
    }    
}

findGreaterNum(6, 6);