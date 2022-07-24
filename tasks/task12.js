let myObj = {
  name: "Igor",
  age: 28,
  country: "Russian",
};

function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else return "Not Found";
}
checkObj(myObj, "name");
