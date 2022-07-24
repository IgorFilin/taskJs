function findNeedle(haystack) {
   for(let key in haystack) {
       if(haystack[key] ==="needle"){
           return "found the needle at position " + key
       }
   }
}



console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))