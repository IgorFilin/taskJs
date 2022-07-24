const dataUserV2 = [
    [{name:'dymuch', age:30},{name:'Sasha', age:32},{name:'Misha', age:28}],
    [{name:'Alex', age:14},{name:'Petr', age:16},{name:'Valera', age:18}],
    [{name:'Nikita', age:20},{name:'Boris', age:22},{name:'Kolj', age:28}]
]


dataUserV2.forEach(el => el.map(elObj=> elObj.salary = 3000))
console.log(dataUserV2)









