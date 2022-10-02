const array1 = [1, 2, 3];
const array2 = [2, 1, 4, 2];



const findUnion = (arr1, arr2) => {
    const result = [];

    arr1.forEach((number) => {
        if(!result.includes(number)){   // arr1.forEach((number) => !result.includes(number) && result.push(number))
            result.push(number);
        }
        
    });

    arr2.forEach((number) => {
        if (!result.includes(number)) {
            result.push(number);
        }

    });

    return result;
}

console.log(findUnion(array1, array2));

