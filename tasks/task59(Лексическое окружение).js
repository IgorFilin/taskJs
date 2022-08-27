// Следующий код создаёт массив из стрелков (shooters).
//
//     Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не так…

function makeArmy() {
    let shooters = [];
    console.log(shooters)
    for (let j = 0; j < 10; j++) {
        let shooter = function () { // функция shooter
            return console.log(j); // должна выводить порядковый номер
        }
        shooters.push(shooter)
    }

    return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
