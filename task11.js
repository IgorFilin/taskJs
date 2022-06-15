function caseInSwitch(val) {
  let answer = "";
  switch (val) {
    case 1:
      return (answer = "alpha");
      break;
    case 2:
      return (answer = "beta");
      break;
    case 3:
      return (answer = "gamma");
      break;
    case 4:
      return (answer = "delta");
      break;
  }

  return answer;
}

console.log(caseInSwitch(3));
