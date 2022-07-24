function longest(s1, s2) {
let arr = s1.split('').concat(s2.split(''))
    let arrSet = new Set(arr)
   let resultArr = Array.from(arrSet)
    return resultArr.sort().join('')
}

console.log(longest("xyaabbbccccdefww","xxxxyyyyabklmopq"))