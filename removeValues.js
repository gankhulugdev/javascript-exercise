//1. Write a function that removes the following values from an array

const removeVal = (arr) => {
    return arr.filter((item) => {
        if (item != false) {
            return item;
        }
    })

}
console.log(removeVal([29, null, 'test', 'value', '', NaN, 75, undefined, false]));

//2. Write a function that takes one parameter
const arr =  ['hey', 'hi', 'test', 'testing'] 

const removeMatch = (par) =>{
    return arr.filter((item) =>{
        if(item !==par){
            return item;
        }
    })
}

console.log(removeMatch("test"));