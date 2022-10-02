const findSumOf4_5 = (num) => {
    let sum = 0;
    if (num < 0)
        return 0;

    for (let i = 0; i <= num; i++) {
        if (i % 4 === 0 || i % 5 === 0)
            sum += i;

    }

    return sum;
}

console.log(findSumOf4_5(11));