const time2Millisecond = (h, m, s) => (h * 3600 + m * 60 + s) * 1000;


console.log(time2Millisecond(1, 20, 30))