function solve(first, second, operator) {
    switch (operator) {
        case '+':
            console.log(first + second);
            break;
        case '-':
            console.log(first - second);
            break;
        case '*':
            console.log(first * second);
            break;
        case '/':
            console.log(first / second);
            break;
        case '%':
            console.log(first % second);
            break;
        case '**':
            console.log(first ** second);
            break;
    }
}
solve(3, 5.5, '*');