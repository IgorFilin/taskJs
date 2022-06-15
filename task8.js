let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let user = [vasya, petya, masha];

let names = user.map((el) => el.name);

console.log(names);
