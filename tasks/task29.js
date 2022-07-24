let count = 1
function grow(x){
 x.map(el=> {
  count = el * count
 })
return count
}

console.log(grow([1, 2, 3, 4]))