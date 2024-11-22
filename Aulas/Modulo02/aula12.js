function addSquares (a, b) {

    const square = (x) => { // Arrow function
        return x * x;
    }

    let sqrA = square(a);
    let sqrB = square(b);
    return sqrA + sqrB;
}

console.log(addSquares(2, 3));