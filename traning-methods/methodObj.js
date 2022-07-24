let myObj = {
  fullName: "Igor",
};
let myFn = (str) => "full" + str;
let myName = myFn("Name");
console.log(myObj[myName]);
//

// Поиск в обьекте вместо If Else
function phoneticLookup(val) {
  let result = "";
  let lookup = new Object();
  lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };
  result = lookup[val];
  return console.log(result);
}
phoneticLookup("charlie");
//
