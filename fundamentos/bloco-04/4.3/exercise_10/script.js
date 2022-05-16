let n = 887;

if (n == 1) {
    console.log("1 não é número primo nem composto.");
} else {
    let flag = true;

    for (let i = 2; i <= n - 1; i++) {
        if (n % i == 0) {
            flag = false;
            break;
        }
    }

    if (flag == true) {
        console.log(n + " é primo");
    } else {
        console.log(n + " não é primo");
    }
}
