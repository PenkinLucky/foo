// Создать двумерный массив, заполненный случайными числами в любом диапазоне.
// Найти колонку, где сумма элементов наименьшая.
// Найти колонку, где сумма элементов найбольшая.
// В одномерном массиве произвести такую замену:
// 1 элемент поменять с 2
// 3 элемент поменять с 4
// 5 элемент поменять с 6 и тд
// Если массив непарный - последний элемент не трогать.

// было 1 2 3 4 5 6, 7, должно стать: 2 1 4 3 6 5, 7


var longRow = 4 ;
var longColumn = 3;
var mass = new Array(longRow);

var maxRowIndex = 0;
var minRowIndex = 0;

for(var i = 0; i< longRow; i++){
    mass[i] = new Array(longColumn);

    for(var j = 0; j< longColumn; j++){
        mass[i][j] = Math.round(Math.random()*5);
    }

}

console.log(mass[0][0], 'mass[i][j] mass');
console.log(mass, 'mass[i][j] mass');