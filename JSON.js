
const person =  {
    name : "John",
    age: 100,
    occupation: "Radio Host",
    smoking : true
}

const stringifiedPerson = JSON.stringify(person);

console.log(stringifiedPerson);

const parsedJSON = JSON.parse(stringifiedPerson);

console.log(parsedJSON);