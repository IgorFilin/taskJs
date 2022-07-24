function toCamelCase(str) {
  let arr = str.split("");
  for (el in arr) {
    // console.log(arr[el]);
    if (arr[el] == "_") {
      console.log(arr[el]);
    }
  }
}
//   if (arr[0].toLowerCase() == arr[0]) {
//     for (i = 1; i < arr.length; i++) {
//       let arrI = arr[i];
//       arr[i] = arrI[0].toUpperCase() + arrI.slice(1);
//     }
//     arr = arr.join("");
//     return console.log(arr);
//   } else if (arr[0].toUpperCase == arr[0]) {
//     console.log(arr);
//   }
// }

toCamelCase("The_Stealth_Warrior");
