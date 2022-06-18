let arr = ["Игорь", "Филин", 28];
arr.splice(3, 0, "Скоро будет программистом");
console.log(arr);
//
let arr = ["Игорь", "Филин", 28];
let newArr = arr.slice(2, 3);
console.log(newArr);
//
let arr = ["Игорь", "Филин", 28];
let arr2 = ["Разработчик", "Начинающий", "Джуниор"];

let arrs = arr.concat(arr2[1], arr2[0]);
arrs = arrs.join("-");
console.log(arrs);
//
let arrs = ["Игорь", "Филин", 28];
arrs.forEach((item, index, array) => {
  console.log(`${item} имеет индекс ${index} в массиве ${array}`);
});
//
let arrs = ["Игорь", "Филин", 28];
console.log(arrs.includes(28));
//
let arrObj = [
  { id: 1, name: "Igor" },
  { id: 2, name: "Ivan" },
  { id: 3, name: "Alisa" },
];

arrObj.find((el) => {
  if (el.id == 3) {
    return console.log(el.name); //Метод find ищет один (первый попавшийся) элемент, на котором функция-колбэк вернёт true.
  }
});
//
let arr = ["Игорь", "Филин", 28];

let arrObj = [
  { id: 1, name: "Igor" },
  { id: 2, name: "Ivan" },
  { id: 3, name: "Alisa" },
  { id: 3, name: "Ivangay" },
];

arrObj.filter((el) => {
  if (el.name[0] == "I") {
    return console.log(el.name);
  }
});
//
let arrObj = [
  { id: 1, name: "Igor" },
  { id: 2, name: "Ivan" },
  { id: 3, name: "Alisa" },
  { id: 3, name: "Ivangay" },
];

let arrs = arrObj.filter((el) => el.name[0] == "I");

console.log(arrs);
//
let arrObj = [
  { id: 1, name: "Igor" },
  { id: 2, name: "Ivan" },
  { id: 3, name: "Alisa" },
  { id: 3, name: "Ivangay" },
];

let arrs = [];
arrObj.map((el) => {
  if (el.id == 3) {
    return arrs.push(el);
  }
});

console.log(arrs);
//
let sravnenie = (a, b) => {
  return a - b;
}; //функция сравнения чисел

let a = [5, 4, 3, 7, 8, 9, 2];

a.sort(sravnenie);

console.log(a);
//
let arr = [1, 2, 3, 4, 5];
arr.reverse();

alert(arr); // 5,4,3,2,1
//
let arrs = [1, 4, 6, 7, 23, 43];
let arrSum = arrs.reduce((el, current) => el + current, 0);
console.log(arrSum);
//
let arrs = [1, 4, 6, 7, 23, 43];
let Obj = { id: 4, name: "Igor" };
console.log(Array.isArray(Obj)); // тру если массив, фалс если нет,ОЧ ПОЛЕЗНО!
//
