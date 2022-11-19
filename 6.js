/*Задание 6.

Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в 
массиве одинаковые.*/

let arr2 = [1, 2, 3, 4, 5];

for (let i=0; i<=arr2.length; i++){
    
    let check = arr2.every.function(elem) {
        if (elem === Number) {
            return true;
        } else {
            return false;
        }
        if (elem === String) {
            return true;
        } else {
            return false;
        } 
        if (elem === Boolean) {
            return true;
        } else {
            return false;
        }
        if (elem === Object) {
            return true;
        } else {
            return false;
    } if (elem === NaN) {
        return true;
    } else {
        return false;
        
    console.log(check);
    } 
}
}