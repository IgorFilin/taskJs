let count = (a) => {
  a = String(a);
  let arrs = [];
  let arr = a.split("");
  for (key in arr) {
    arrs.push(parseInt(arr[key]));
  }
  console.log(`${arrs[0]} ${arrs[1]}`);
};
count(23);

// Вывели 2 числа через проблем из двузначного числа
