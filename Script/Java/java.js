//1.Заполнить массив А случайными числами (диазпазон на ваше усмотрение). Заменить каждый элемент массива с нечетным индексом на ноль.


var arr = [];
arr.length = 10;
console.log(arr, 'arrStart')
for(i = 0; i < arr.length; i+=2){
    arr[i] = Math.round(Math.random() * 60);
}
for(i= 1; i < arr.length; i+=2){
    arr[i] = 0;
}
console.log(arr, 'arrFinish');

//2.Заполнить массив размерностью n значениями с клавиатуры. Если введенное значение пользователя не число, или отрицательное значение, то запросить повторный ввод данных.



