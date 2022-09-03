// setTimeout(()=> {
//     console.log(1)
//     setTimeout(()=> {
//         console.log(2)
//         setTimeout(()=> {
//             console.log(3)
//         },1000)
//     },1000)
// },1000)

// Promise.resolve(setTimeout(() => console.log(1), 1000))
//     .then(() => setTimeout(() => console.log(2), 2000))
//     .then(() => setTimeout(() => console.log(3), 3000))


// const Foo = async () => {
//     await wait
//     t(1000)
//     console.log(1)
//     await wait(1000)
//     console.log(2)
//     await wait(1000)
//     console.log(3)
// }
//
// Foo()

// function wait(data) {
//     return new Promise((resolve) => (setTimeout(() => {
//         resolve()
//     }, data)))
// }

const findUserInDB = (id) => {
    const users = [{id: 1, name: 'Igor', age: 28}, {id: 2, name: 'Vasya', age: 34}, {id: 3, name: 'Alisa', age: 24}]
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(u => u.id === id)
            if (user) {
                resolve(user)
            } else if (user === undefined) {
                reject('User not found')
            }

        },1000)
    })
}

// findUserInDB(1)
//     .then(user => {
//         console.log(user)
//         return user
//     })
//     .then(user => {
//         console.log(user.name)
//         return user.name
//     })
//     .catch(err => console.warn(err))
//

// const FooAsync  = async () => {
//    const user =  await findUserInDB(2)
//     console.log(user)
//     const userName = await user.name
//     console.log(userName)
// }
//
// FooAsync()