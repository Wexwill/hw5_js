    // Task 1 

console.log('Task 1');

function ramka() {
    var group = prompt('Введите номер группы'),
        name = prompt('Введите ФИО'),
        hw = ('*Домашняя работа: Функции');
        student = ('*Выполнил студент гр.: '),
        star = ('*'),
        lengthstudent = student.length + group.length + star.length,
        lengthname = name.length,
        lengthname1 = lengthstudent - lengthname,
        array1 = [],
        array2 = [],
        array3 = [],
        array4 = [],
        a = 0,
        b = 0,
        c = 0,
        d = 0;
    
    for (; a < lengthstudent; a++) {
        array1.push('*');
    }
    for (; b < lengthname + 2; b++) {
        array2.push('*');
    }
    for (; c < lengthstudent - 25; c++) {
        array3.push('');
    }
    for (; d < lengthname1 - 1; d++) {
        array4.push('');
    }

    var array1l = array1.join(''),
        array2l = array2.join(''),
        array3l = array3.join(' '),
        array4l = array4.join(' ');

    if (a < b) {
        console.log(array2l);
    } else {
        console.log(array1l);
    }

    console.log(hw + array3.join(' ') + star);
    console.log(student + group + star);
    console.log(star + name + array4l + star);

    if (a < b) {
        console.log(array2l);
    } else {
        console.log(array1l);
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
