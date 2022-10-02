const positiveSum = (numbers) => {
    let sum = 0;

    numbers.forEach((number) => {
        if (number > 0)
            sum += number;
    })

    return sum;

}
console.log(positiveSum([-2, 3.2, 4, 1, -5, -2, 83]))