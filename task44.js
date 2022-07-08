function bmi(weight, height) {
    let result = weight/(height*height)
    if(result <= 18){
        return  'Underweight'
    }else if(result <= 25){
        return 'Normal'
    }else if(result <= 30){
        return 'Overweight'
    }else if(result > 30) {
        return 'Obese'
    }

}

bmi(175,100)