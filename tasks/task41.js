function basicOp(operation, value1, value2)
{   toString(value1)
    toString(value2)
   return eval(`${value2}${operation}${value1}`)
}

console.log(basicOp('+',2,2))