const sum = (...args) => args.reduce((acc, cur) => acc + cur, 0);
console.log(sum(1, 2, 3, 4, 5));
