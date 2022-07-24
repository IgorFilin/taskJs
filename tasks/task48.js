const dataUser = [{name:'dymuch', age:30},{name:'Sasha', age:32},{name:'Misha', age:28}]
dataUser.map(el => [...dataUser,el.salary = 3000,el.age = 1])
console.log(dataUser)




























// console.log(dataUser)
// for(let key in dataUser){
//   delete dataUser[key].age
// }
// console.log(dataUser)