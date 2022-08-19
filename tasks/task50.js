const GeneratorArrays = (items,length) => {
    let result = []
    let abc = "abcdefghijklmnopqrstuvwxyz"
    let numbs = '1234567890'
    if(items === 'string') {
        while (result.length < length) {
            result.push(abc[Math.floor(Math.random() * abc.length)]);
        }

    }
    if(items === 'numbers') {
        while (result.length < length) {
            result.push(Number(numbs[Math.floor(Math.random() * numbs.length)]));
        }
    }
    return result
}
console.log(GeneratorArrays('numbers',100))