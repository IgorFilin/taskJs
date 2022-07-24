let count = 0
function countSheeps(arrayOfSheep) {
 arrayOfSheep.forEach(el => {
  if(el){
   count = count + el

  }
})
 return count
}

console.log(countSheeps([true,  true,  true,  false,
 true,  true,  true,  true ,
 true,  false, true,  false,
 true,  false, false, true ,
 true,  true,  true,  true ,
 false, false, true,  true]))