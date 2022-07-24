// Проверка на гласные буквы, удаляяем их
function disemvowel(str) {
  let glass = "aeioOuI";
  for (i in str) {
    if (glass.includes(str[i])) {
      let x = str[i];
      str = str.replaceAll(x, ""); // для поиска всех совпадений нужно использовать регулятрое выражение с флагом g
    }
  }
  return console.log(str);
}

disemvowel("No offense but,\nYour writing is among the worst I've ever read");
