const findNthLargest = (input) => {
    const data = input[0].sort((num1, num2) => {
        if (num1 < num2) return 1;
        else return -1;
    })

    const n = input[1];
    return data[n - 1];


}

console.log(findNthLargest([[203, 201, 402, 4891, 20, -2], 3]));