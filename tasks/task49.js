
function counter () {

    return () => {
        let count = 0
        console.log(++count)
    }
}

let countFn = counter()
countFn()
countFn()
countFn()