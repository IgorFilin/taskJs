function check(a, x) {
    for(let key in a){
        if(a[key] == x && typeof a[key] == string && typeof a[key] == number ) {
            return true
        }else return false
    }

console.log(check([1,2,'3'],3))