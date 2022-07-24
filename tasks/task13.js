function isIsogram(str) {
  str = str.toLowerCase(); // возвел строку в нижний регистр
  arr = str.split(""); // засплитил строку в массив
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      //двумя циклами сравнил элементы массива не сравнивая 1 эл с 1 эл
      if (arr[i] == arr[j]) return false;
    }
  }
  return true;
}
isIsogram("Dermatoglyphics");
