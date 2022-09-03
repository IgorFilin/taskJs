
let testPromise = new Promise((resolve,reject)=>{
    setTimeout(() => reject('testPromise'), 2000)
})
console.log(testPromise)
testPromise.catch((err)=> err)

console.log(testPromise)





// const rejectInSecond = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         reject(new Error('время истекло'))
//     }, 1000)
// })
// rejectInSecond.catch((err)=> err)



