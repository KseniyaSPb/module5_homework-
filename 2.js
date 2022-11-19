/*Задание 2.

Дана переменная x, которая может принимать любое значение. Написать программу, которая в зависимости от типа данных 
x выводит в консоль сообщение вида: «x — число».
Опишите три случая: когда х = числу, строке или логическому типу. В других случаях выводите сообщение: «Тип x не определён».
Примечание: в этом задании использовать promt не нужно.*/

let x;

if (typeof x === Number) {
    console.log("This is Number")
}
else if (typeof x === String){
    console.log("This is String")
}
else if(typeof x ===Boolean){
    console.log("This is Boolin ")
}
else {
    console.log("X type is undefined")
}