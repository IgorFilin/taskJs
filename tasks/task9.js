let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = [];

for (el in users) {
  let i = users[el];
  let obj = {};
  obj.fullname = `${i.name} ${i.surname}`;
  obj.id = i.id;
  usersMapped.push(obj);
}

console.log(usersMapped);
