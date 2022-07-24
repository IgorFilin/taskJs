function spinWords(string) {
  string = string.split(" "); // сделали массив из строки
  for (let i = 0; i < string.length; i++) {
    // перебрали массив на элементы ['Just', 'likee','the','name','of','this','Kata']
    if (string[i].length == 5 || string[i].length > 5) {
      string[i] = string[i].split("");
      string[i] = string[i].reverse("");
      string[i] = string[i].join("");
    }
  }
  string = string.join(" ");
  return string;
}

spinWords("Welcome");

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
