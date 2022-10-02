const XOCounter = (str) => {
    let amount_X = 0;
    let amount_O = 0;
    let result = str.toLowerCase();

    for (let i = 0; i < result.length; i++) {
        if (result[i] === 'x')
        amount_X++;

        if (result[i] === 'o')
        amount_O++;
    }


    return (amount_O === amount_X) ? true : false;
}



console.log(XOCounter("XOXOXo"));

