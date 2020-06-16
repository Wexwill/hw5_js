    // Task 1 

console.log('Task 1');

function ramka() {
    let array = [],
        length = 0,
        strLength = 0;

    array.push('* Домашняя работа: Функции')
    array.push('* Выполнил: студент гр. ' + prompt('Введите номер группы'));
    array.push('* ' + prompt('Введите ФИО'));

    for (let i = 0; i < array.length; i++) {
        strLength = array[i].length;
        if (length < strLength) length = strLength;
    }

    array.unshift('*'.repeat(length));
    array.push('*'.repeat(length));

    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] + (' '.repeat(length - array[i].length) + '*');
        console.log(array[i]);
    }
}
ramka();
console.log('');

    // Task 2

console.log('Task 2');
function triangle () {
    var row = prompt('Введите количество рядов треугольника для задания 2'),
        array21 = [],
        array22 = [];

    for (let e = row; e > 0; e--) {

        for (var f = e; f >= 0; f--) {
            array22.push(' ');
        }
        for (let g = 0; g <= 1; g++) {
            array21.push('*');   
        }

        var array21l = array21.join(''),
            array22l = array22.join('');

        console.log(array22l + array21l.slice(1));

        var array22 = [];
    }
}
triangle();
console.log('');
