'use strict';

//task 1
function task1() {
    let a = 1,
        b = 1,
        c, d;
    //Префиксная форма инкремента
    c = ++a;
    console.log(c); // a = 2; c = 2.
    //Постфиксная форма инкремента
    d = b++;
    console.log(d); // d = 1; b = 2.
    //Префиксная форма инкремента
    c = 2 + ++a;
    console.log(c); // a = 3; c = 5.
    //Постфиксная форма инкремента
    d = 2 + b++;
    console.log(d); // b = 3; d = 4.
    console.log(a); // 3
    console.log(b); // 3
}

//task 2

function task2() {
    let a = 2; 
    let x = 1 + (a *= 2);
    console.log(a); // a = 4, т.к. оператор "*=" умножает переменную "а" на заданное число
    console.log(x); // x = 5, т.к (a *= 2) в скобках, высший приоритет действия, далее 1 + 4 = 5.
}

//task 3
function task3() {
    let a = parseInt(prompt('Задайте первое число от -100 до 100: '));
    let b = parseInt(prompt('Задайте второе число от -100 до 100: '));
    if (isNaN(a) || isNaN(b)) {
        alert('Задайте число!');
        task3();
        return;            
    }
    if (a >= 0 && b >= 0) {
        alert('Разность чисел равна: ' + (a - b));
    } else if (a < 0 && b < 0) {
        alert('Произведение чисел равно: ' + (a * b));
    } else {
        alert('Сумма чисел равна: ' + (a + b));
    }
}

//task 4

function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

//task 5

function mathOperation(a, b, operation) {
    switch(operation){
        case sum:
            return sum(a, b);
        case sub:
            return sub(a, b);
        case multiplication:
            return multiplication(a, b);
        case division:
            return division(a, b);
    }
}

//task 6

function task6() {
    function getSymbolBeforeLastSymbol(arg) {
        let sumDepositStr = String(arg);
        let symbol = Number(sumDepositStr.charAt(sumDepositStr.length - 2));
        if (symbol !== "") {
            return Number(symbol);
        }
        return null;
    }

    function rightCase(arg) {
        let beforeLastSymbol = getSymbolBeforeLastSymbol(arg);
        if (beforeLastSymbol == 1) {
            return 'рублей';
        }
        let sumDepositStr = String(arg);
        let lastSymbol = Number(sumDepositStr.charAt(sumDepositStr.length - 1));
        switch(lastSymbol) {
            case 0:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                return 'рублей';
            case 1:
                return 'рубль';
            case 2:
            case 3:
            case 4:
                return 'рубля';
        }
    }


    let sumDeposit = parseInt(prompt('Введите вносимую на депозит сумму: '));
    alert(`Ваша сумма в ${sumDeposit} ${rightCase(sumDeposit)} успешно зачислена.`);
}