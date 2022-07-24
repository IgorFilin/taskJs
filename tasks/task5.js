let camelize = (str) => {
  let arrStr = str.split("-");
  let arrs = arrStr.map((el) => el[0].toUpperCase() + el.slice(1));
  arrs = arrs.join("");
  return console.log(arrs);
};

//slice(1) удаляет 1 элемент в строке и добавляет отсальные
//slice() вставляет полный элемент
