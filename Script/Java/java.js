//1.Заполнить массив А случайными числами (диазпазон на ваше усмотрение). Заменить каждый элемент массива с нечетным индексом на ноль.
var arr = [];
arr.length = 10;
i = 0;
console.log(arr, 'arrStart')
console.log(i, 'iStart');
for(i = 0; i < arr.length; i+=2){
    arr[i] = Math.round(Math.random() * 60);
    console.log(arr,"arrMidle");
    console.log(i, 'iMidle');
}
for(i= 1; i < arr.length; i+=2){
    arr[i] = 0;
}
console.log(arr, 'arrFinish');
console.log(i, 'iFinish');