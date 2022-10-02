const numbers = [10, 14, 1, 31, 2];
// .map return array
const numberSquaredArray = numbers.map((number, index) => {
    return index;
})

console.log(numberSquaredArray)

// .foreach return nothing

//.filter return array

//.sort 
const sortedAscending = numbers.sort((num1, num2) => {
    console.log(num1, num2);
})