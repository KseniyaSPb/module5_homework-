/* Задание 1.

Напишите программу, которая работала бы следующим образом: в prompt вводится значение. С помощью унарного плюса (арифметический оператор) 
необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number.
Если это число, то вывести в консоль чётное оно или нечётное.
Если передано не число, выведите: «Упс, кажется, вы ошиблись».
*NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения.*/


let num = +prompt("введите значение");
if (typeof num !== Number) {
    console.log("Упс, кажется, вы ошиблись")
} 
else if (isNaN(num) === true) {
    console.log('Числом не является')
}
else if (num % 2 === 0) {
    console.log('Число четное')
} 
else {
    console.log('Число нечетное')
} 