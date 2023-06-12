function solve(first, second, third) {
    let sumOfTheLength = first.length + second.length + third.length;
    console.log(sumOfTheLength);
    let averageLength =Math.floor( sumOfTheLength/3);
    console.log(averageLength);
}
solve ('chocolate', 'ice cream', 'cake');