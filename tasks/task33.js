function repeatStr (n, s) {
 let NewStr = ''
 while (n > 0){
  n--
  NewStr = NewStr + s
 }
 return NewStr
}

console.log(repeatStr(10,'Igor'))