let camelize = (str) => {
  let arrStr = str.split("-");
  let arrs = arrStr.map((el) => el[0].toUpperCase() + el.slice(1));
  return arrs;
};

camelize("background-color");
