function filterRange(arr, a, b) {
  return arr.filter((el) => a <= el && el <= b);
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered);
console.log(arr);
// по наблюдениям фильтр выводит массив данными, а мап только фалс
// и тру
