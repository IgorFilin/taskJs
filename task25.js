function digitize(n) {
    return n.toString().split('').map(el => parseInt(el)).reverse()
}

console.log(digitize(348597))