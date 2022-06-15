let arr = [1, 2, 3, 4];
let item = 5;

function nextInLine(arr, item) {
  arr.push(item);
  console.log(arr);
  let x = arr.shift();
  return console.log(x);
}
nextInLine(arr, item);
console.log(arr);

//Принцип очереди, удаление первого элемента и удаление последннего
