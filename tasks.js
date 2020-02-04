// #107
function findDegree(m) {
    let k = 0
    do {
        k += 1
    } while (4 ** k < m)
    console.log(`k = ${k}`)
}


// #243a
function sumOfSquares(num) {
    let numSqrt = Math.floor(Math.sqrt(num))

    for (let x = 1; x <= numSqrt; x++) {
        for (let y = 1; y <= numSqrt; y++) {
            if ((x ** 2 + y ** 2) === num) {
                console.log(`x = ${x}, y = ${y}`)
            }
        }
    }
}


// #243b
function sumOfSquaresUpdate(num) {
    let numSqrt = Math.floor(Math.sqrt(num))

    for (let x = 1; x <= numSqrt; x++) {
        for (let y = 1; y <= numSqrt; y++) {
            if ((x ** 2 + y ** 2) === num) {
                if (x >= y) {
                    console.log(`x = ${x}, y = ${y}`)
                }
            }
        }
    }
}
