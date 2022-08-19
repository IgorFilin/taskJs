
function counter () {
    let count = 0
    return () => console.log(++count)
}

let countFn = counter()
countFn()
countFn()
countFn()