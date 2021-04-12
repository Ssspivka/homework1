// let admin;//first task!!!
// let name = "Василий";
// admin = name;
// alert(admin);
// console.log(admin);


// let n = prompt("Picture:", "№");//second task / first variant!!!
// if (n >= 1 && n <= 10) {
//    let pass = prompt("Type:", "png or jpg");

//    if (pass == 'png') {
//       pic.src = `image/${n}.png`;
//    } else if (pass == 'jpg') {
//       pic.src = `image/${n}.jpg`;
//    } else if (pass == '' || pass == null) {
//       alert('denied');
//    } else {
//       alert('incorrect resolution');
//    }

// } else {
//    alert("mistake (1-10)");
// }


// let n = prompt("Picture:", "№");//second task /second variant!!!
// let pass = prompt("Type:", "png or jpg");
// if (n >= 1 && n <= 10 && pass == 'png') {
//    pic.src = `image/${n}.png`;
// } else if (n >= 1 && n <= 10 && pass == 'jpg') {
//    pic.src = `image/${n}.jpg`;
// } else if (pass == '' || pass == null) {
//    alert('denied');
// } else {
//    alert("mistake (1-10)");
// }






//Разбор в классе
// let n = prompt("Введите номер картинки:");//вариант сделанный в классе!
// if (n >= 1 && n <= 11) {
//    let t = prompt("Введите тип файла:");
//    if (t == 'jpg' || t == 'png') {
//       pic.src = `images/${n}.${t}`;
//    } else { alert("Неверный тип файла"); }

// } else {
//    alert("Неверный номер (1-11)");
// }



//Разбор в классе
// let n = prompt("Picture:", "№");//second task /third vadiant that works incorrect((
// prompt("Type:", "png or jpg");

// if (n >= 1 && n <= 10) {
//    pic.src = `image/${n}.jpg`;
// } else {
//    alert("mistake (1-10)");
// }



//Разбор в классе
// x = prompt("Введите x:");
// y = prompt("Введите y:");

// if (x > y) alert(`${x} > ${y}`);
//    else if (x < y) alert(`${x} < ${y}`);
//         else alert(`${x} = ${y}`);








//Разбор в классе
// Циклы
// for
// while

// let s = "";

// for (i = 1; i <= 10; i++) {
//    s += `${i} `;
// }
// // alert(s); 

// p1.innerHTML = s;







//Разбор в классе
// let n, sum = 0;
// for (i = 1; i <= 3; i++) {

//    n = parseFloat(prompt(`Введите ${i}-е число:`));
//    // sum += +n;
//    sum += n;

// }

// alert(`Сумма = ${sum}`);

// Shift+Alt+F








//Разбор в классе

// let s = "", n = 1;

// while (n <= 10) {
//    s += `<img style="height: 200px" src="images/${n}.jpg">`;
//    n++;

// }
// pic3.innerHTML = s;





// let s = "";

// for (let i = 0; i <= 10; i += 2) {

//    s += `<img style="height: 200px" src="images/${i}.jpg">`;

//    for (let j = 1; j <= 11; j += 2) {

//       s += `<img style="height: 200px" src="images/${j}.jpg">`;

//    }
// }

// pic6.innerHTML = s;



// let s = "";

// for (let i = 0; i <= 10; i += 2) {

//    s += `<img style="height: 200px" src="images/${i}.jpg">`;

//    for (let j = 1; j <= 11; j += 2) {

//       s += `<img style="height: 200px" src="images/${j}.jpg">`;

//    }
// }

// pic6.innerHTML = s;





// let s1 = "", n1 = 1;

// while (n1 <= 11) {
//    s1 += `<img style="height: 200px" src="images/${n1}.png">`;
//    n1 += 2;
// }

// pic1.innerHTML = s1;


















//Разбор в классе
// start = prompt('Введити номер начальной картинки');
// finish = prompt('Введити номер конечной картинки');

// let resultString = '';
// for (i = start; i <= finish; i++) {
//    resultString += `<img style="height: 200px" src="images/${i}.jpg">`
// }

// res.innerHTML = resultString;

// Alt+Z



//  с 5 по 8 задать условие 









//Разбор в классе
// let s='', w=50;
// const MAX_WIDTH = 1000;

// while (w<=MAX_WIDTH) {
// s += `<img style="width: ${w}px" src="images/minsk.jpg">`; 
// //   w = w + 50;
//  w += 50;   
// }
// minsk.innerHTML = s;















//                                     Home Work


1.
// let userName = prompt("login");//task for the next lesson

// if (userName == "admin") {

//    let pass = prompt("password");

//    if (pass == '123321') {
//       alert("welcome");
//    } else if (pass == '' || pass == null) {
//       alert('denied');
//    } else {
//       alert('incorrect password');
//    }

// } else if (userName == '' || userName == null)
//    alert("access denied");
// else {
//    alert("unknown guest")
// }

2.
// let age = prompt('how old are u?', '28(example)');//task for the next lesson
// if (age >= 14 && age <= 90) {
//    prompt('Your age', [age]);
// }







3.
// let i = 0;

// while (i < 3) {

//    alert(`номер ${i}!`);
//    i++
// }












4.

// let s = "";
// for (i = 2; i <= 10; i += 2) {

//    s += (`${i} `);
//    alert(`номер ${i}!`);
// }

// pic2.innerHTML = s;




4.

// let s = "", n = 2;

// while (n <= 10) {
//    s += (`${n} `);
//    alert(`номер ${n}!`);
//    n += 2;
// }
// pic4.innerHTML = s;


4.
// for(i=2; i<=10; i++){
//     if(i % 2 == 0) alert(i);
// }




5.

// let s = "";
// for (i = 11; i >= 1; i -= 2) {

//    s += (`${i} `);
//    alert(`номер ${i}!`);
// }

// pic2.innerHTML = s;



5.

// let s = "", n = 11;

// while (n >= 1) {
//    s += (`${n} `);
//    alert(`номер ${n}!`);
//    n -= 2;
// }
// pic4.innerHTML = s;

5. //разобрали в классе
// for (i = 11; i >= 1; i -= 2){
//     if(i % 2 != 0) alert(i);
// }






6.

// let s1 = "", n1 = 1; s = "", n = 2;

// while (n1 <= 11 && n <= 10) {
//    s1 += `<img style="height: 200px; border: solid green" src="images/${n1}.jpg">`;
//    s += `<img style="height: 200px; border: solid blue" src="images/${n}.jpg">`;
//    n1 += 2;
//    n += 2;
// }

// pic1.innerHTML = s1 + s;



6//разобрали в классе

// let s = "", n = 1;

// while (n<=11) {
//     if (n % 2 == 0) {
//         s += `<img style="height: 200px; border: 3px solid green; margin: 5px" src="images/${n}.jpg">`;
//     } else {
//         s += `<img style="height: 200px; border: 3px solid blue; margin: 5px" src="images/${n}.jpg">`;

//     }
//     n++
// }
// box1.innerHTML = s;










6.1

// let s1 = "", n1 = 1; s = "", n = 0;//либо нулевая картинка тсутствует,либо если с 2-х начинать,то почему то на 9(нечётной картинке) заканчиваеться цикл!(надо спросить???)

// while (n1 <= 11 && n <= 10) {
//    s1 += `<img style="height: 200px; border: solid green" src="images/${n1}.jpg">`;
//    s += `<img style="height: 200px; border: solid blue" src="images/${n}.jpg">`;
//    n1 += 2;
//    n += 2;
// }

// pic1.innerHTML = s1 + s;


6.2
// let s1 = "", s = "", n1 = 1, n = 0;

// for (n1 <= 11; n <= 10;) {
//    s1 += `<img style="height: 200px; border: solid green" src="images/${n1}.jpg">`;
//    s += `<img style="height: 200px; border: solid blue" src="images/${n}.jpg">`;
//    n1 += 2;
//    n += 2;
// }
// pic1.innerHTML = s1 + s;





// let s1 = "", s = "", n1, n;//ПОЧЕМУ НЕ РАБОТАЕТ???

// for (n1 = 1; n1 <= 11; n1 += 2 && n = 0; n <= 10; n += 2) {
//    s1 += `<img style="height: 200px; border: solid green" src="images/${n1}.jpg">`;
//    s += `<img style="height: 200px; border: solid blue" src="images/${n}.jpg">`;


// }
// pic1.innerHTML = s1 + s;



7
// let s = "<table>...</table>";
// let rows = prompt('Сколько строк создать в таблице?', 0);
// let clmns = prompt('Сколько столбцов создать в таблице?', 0);
// for (let i = 0; i <= rows; i++) {
//    for (let n = 0; n <= clmns; n++) {
//       s += (`${n}`);
//    }
//    s += (`${i}`);
// }
// box.innerHTML = s;




7//разобрали в классе




// let x = prompt("Введите кол-во столбцов в таблице");
// let y = prompt("Введите кол-во строк в таблице");

// let n = 1;

// let tab = '<table><tbody>';

// for (i = 1; i <= y; i++) {
//    tab += '<tr>';// храниться тэйбл и тр
//    for (j = 1; j <= x; j++) {
//       tab += `<td>ячейка ${n}</td>`;
//       //<table><tr><td>ячейка 1</td>
//       n++
//    }
//    tab += '<tr>';
// }
// tab += '<tbody><table>';

// table1.innerHTML = tab;




// let x = prompt("Введите кол-во столбцов в таблице");
// let y = prompt("Введите кол-во строк в таблице");

// let n = 1;

// let tab = '<table><tbody>';

// for (i = 1; i <= y; i++) {
//     tab += '<tr>';// храниться тэйбл и тр
//     for (j = 1; j <= x; j++) {
//         tab += `<td><img style="height: 200px; border: solid blue" src="images/${n}.jpg"</td>`;
//         //<table><tr><td>ячейка 1</td>
//         n++
//     }
//     tab += '<tr>';
// }
// tab += '<tbody><table>';

// table1.innerHTML = tab;







// while

// let i = 0;
// while (i<=3) {
//     alert(i);
//     i++
// }


//do while
// let i = 0;
// do {
//     alert(i);
//     i++;
// } while (i<=3)








//switch


// let a = 2 + 2;
// switch (10) {
//     case 3:
//         alert('меньше чем надо');
//         break;

//     case 4:
//         alert('норма');
//         break;

//     case 5:
//         alert('больше чем надо');
//         break;

//         default:a
//         alert('неизвестное значение');
// }


// let a = 2 + 2;
// if (a < 4) {
//     alert('меньше чем надо');

// } else if (a == 4) {
//     alert('норма');
// } else if (a > 5) {
//     alert('больше чем надо');
// } else {
//     alert('неизвестное значение');
// }

// let b = prompt ("введите число:");//ljhfp,bhfnm
// let a = 2 + 2
// if (a < b) {
//     alert('меньше чем надо');

// } else if (a == b) {
//     alert('норма');
// } else if (a > b) {
//     alert('больше чем надо');
// } else {
//     alert('неизвестное значение');
// }



//полная форма if
// let age = prompt('Укажите возраст:');
// if (age >= 18) {
//    access = true
// } else {
//    access = false
// } alert(access);


//короткая форма

// let age = prompt('Укажите возраст:');

// let access = (age >=18) ? true : false;
// alert(access); 

//множественный выбор , тернарный if(разобрать получше)


// let age = prompt('Укажите возраст:', 18);
// let message = (age <= 14) ? 'вы - ребёнок' :
//    (age <= 19) ? 'вы - подросток' :
//       (age <= 28) ? 'вы - юноша' :
//          (age <= 100) ? 'вы - взрослый' :
//             'Вы старожил!'
// alert(message);



// let age = prompt('Укажите возраст:', 18);
// let message = (age <= 14) ? 'вы - ребёнок' :
//     (age <= 19) ? 'вы - подросток' :
//         (age <= 28) ? 'вы - юноша' :
//             (age <= 100) ? 'вы - взрослый' :
//                 'Вы старожил!'
// alert(message);


//доделать
// let age = prompt('Укажите возраст:');//полная форма ,доделать про буквы

// if (age <= 14) {
//    alert('вы - ребёнок');
// } else if (age <= 19) {
//    alert('вы - подросток');
// } else if (age <= 28) {
//    alert('вы - юноша');
// }
// else if (age <= 100) {
//    alert('вы - взрослый');
// } else {
//    alert('Вы старожил!');
// }

// let age = prompt('Укажите возраст:');

// if (age <= 14) alert('Вы - ребенок')
// else if (age <= 19) alert('Вы - подросток')
// else if (age <= 28) alert('Вы - юноша')
// else if (age <= 100) alert('Вы - взрослый')
// else alert('Вы - старожил');


// Math methods


// let x = 5;

// let y = 2 * Math.exp(x) + 1;
// // alert(y);



// let z = 1 * Math.log(x) / x;
// // alert(z);

// n = 3;

// if (x < z * z) {
//    w = x * y
// }
// else {
//    w = n * x + 2;
// }
// alert(w);






// https://msiter.ru/tutorials/javascript/js_math

// a = 1.774;
// x = -2.7;
// m = 5;
// n = 1;

// let y = Math.sqrt(a + Math.pow(n, 2) * Math.pow(x, 2)) / (a + x) * m;
// if (Math.abs(y) < 1) {
//    z = y + 1
// }
// else {
//    z = Math.sin(Math.pow(y, 2));
// }
// alert(z)









//Функции JS(Метод)

// function showMessage() {
//    alert("ВСЕМ ПРИВЕТ");
// } showMessage()
// showMessage()
// showMessage()



// function myPow(a) {
//     b = a * a;
//     return b;
// }
// alert(myPow(5));
// alert(myPow(8));
// alert(myPow(12));
// alert(myPow(3));
// alert(myPow(9));



//                                 Home work




// 1
// let a = prompt('Имя');

// function showMessage() {
//    alert(a);
// }
// showMessage()


//2

// function plus(x, n) {
//    let result = x;
//    for (i = 1; i < n; i++) {
//       result = x + n;
//    }
//    return result;
// }

// let x = parseFloat(prompt('x?'));
// let n = parseFloat(prompt('n?'));
// if (n < 1) {
//    alert('incorrect degree');
// } else {
//    alert(plus(x, n));
// }






//                               class work



// let userName = prompt('введите имя');
// sayHello(userName);
// function sayHello(n){
//    alert(`n)
// }





// let userName = prompt('введите имя');
// alert(sayHello(userName));
// function sayHello(n){
//    let s = `Привет, ${n} !`;
//    return s;
// }


// let userName = prompt('введите имя');
// alert(sayHello(userName));
// function sayHello(){
//    let s = `Привет, ${userName} !`;
//    return s;
// }



// 2 переделать домашнее под этот вариант
// function sum(x, y) {


//    return x + / * - y;
// }

// alert(sum(3,5));
// alert(sum(2,7));
// alert(sum(12,5.3));





//3
// let n = prompt('Сколько блоков?');
// let r = prompt('размер блоков?');

// newDiv(n, r);

// function newDiv(x, y) {

//    let res = '';
//    for (i = 1; i <= x; i++) {
//       res += `<div style="width: ${y}px; height: ${y}px; border: 1px solid red">




//       </div>`;



//    }

//    blocks.innerHTML = res;

// }



//Области видимости переменных!!! Глобальные и лркальные

//Как первая задача должна была выглядеть!!!

// userName = "Вася";

// function showMessage() {

//    let message = `Привет ${userName}!`;
//    alert(message);


// }
// showMessage();








// userName = "Вася";

// function showMessage() {

//     let message = `Привет ${userName}!`;//let здесь как локальная переменная,распознаёться только вглубь, но не наружу скобок функции...!!!Её область ограничена блоком, внутри которого она обьявлена.
//    alert(message);


// }
// showMessage();

// alert(message);






// x = 5+5 / 6+6 * 2.2 + 2.2;

// function f(n) {



//    return n + n;
// }
// //x = 10 / 12   *   4.4
// x = f(5) / f(6) * f(2.2);


// alert(x);






// 5!  =  1*2*3*4*5; - Факториал числа
//  C = (m! + n!) / (m+n);


// function f(x) {

//    let t = 1;

//    for (i = 1; i <= x; i++) {
//       t *= i;
//    }

//    return t;
// }

// let C = 0;
// let M = 5;
// let N = 3;
// C = (f(M) + f(N)) / f(M + N);
// alert(C);

//x = 10 / 12   *   4.4
// x = f(5) / f(6) * f(2.2);


// alert(x);



// 27.1
// function say() {
//    // alert('hello');

//    let n = myForm.mainMenu.value;
//    // alert(n);
//    myForm.mainMenu.value = `Привет, ${n}!`;
// }















// function say() {
//    // alert('hello');
//    let n = myForm.userName.value;
//    // alert(n);
//    myForm.userName.value = `Привет, ${n}!`;

// }

// Способы обьявления функции


// Function Declaretion

// function sum(a,b) {

// return a+b;
// }

// alert(sum(2, 3));

// Function Expression

// let sum =  function(a, b) {
// return a+b;



// }
// alert(sum(2, 4));









//button zadanie(check HTML)
// let sum = function(a, b){


//    alert(a+b);

// }










//                                 Массивы 

// 1й способ обьявления


// let arr = new Array();// пустой массив
// let arr1 = new Array();
// let arr2 = new Array(5);//массив из пяти элементов
// let arr4 = [5]//это не тоже самое что пример выше,это просто массив с числом 5
// let arr = new Array("Первое значение", "второе значение", "третье значение");//массив с заданными значениями



// 2й способ обьявления

// let arr1 = [];//пустой массив

// let fruits = ["apples", "orange", "grapes"];

// // ввод элементов в массив

// // arr[0] = 12;
// // alert(arr[0]);//12

// for (i = 0; i <= 3; i++) {
// alert(fruits[i]);
// }



// let menu = "Главное, о компании, Новости, Контакты, продукты";

// // split() - данный метод преобразует строку в массив

// let elems = menu.split(", ");

// let s = "";
// for (i = 0; i < elems.length; i++) {
//    s += `
//    <p style="color: red">${elems[i]}</p>
//    `;

// }
// myMenu.innerHTML = s;



// let styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// styles[Math.floor((styles.length - 1) / 2)] = "Классика";
// alert( styles.shift() );
// styles.unshift("Рэп", "Регги");


// function sumInput() {
//    let numbers = [];
//    while (true) {
//       let value = prompt('введите число', 0);
//       if (value === "" || value === null || !isFinite(value)) break;
//       numbers.push(+value);
//    }
//    let sum = 0;
//    for (let number of numbers) {
//       sum += number;
//    }
//    return sum;
// }
// alert(sumInput());



// let styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// styles.splice(1, 1, 'классика');
// alert(styles.shift());
// styles.unshift("Рэп", "Регги");

// alert(styles.shift());


// НИЧЕРТА НЕ ПОЛУЧИЛОСЬ
// function getMaxSubSum(arr) {
//    let maxSum = 0;

//    for (let i = 0; i < arr.length; i++) {
//       let sumFixedStart = 0;
//       for (let j = i; j < arr.length; j++) {
//          sumFixedStart += arr[j];
//          maxSum = Math.max(maxSum, sumFixedStart);
//       }
//    }
//    return maxSum;
// }

// arr = [] = prompt('Введите число');
// arr = [] = prompt('Введите число');
// arr = [] = prompt('Введите число');
// arr = [] = prompt('Введите число');
// arr = [] = prompt('Введите число');




// function getMaxSubSum(arr) {
//    let maxSum = 0; // если элементов не будет - возвращаем 0

//    for (let i = 0; i < arr.length; i++) {
//       let sumFixedStart = 0;
//       for (let j = i; j < arr.length; j++) {
//          sumFixedStart += arr[j];
//          maxSum = Math.max(maxSum, sumFixedStart);
//       }
//    }

//    return maxSum;
// }

// alert(getMaxSubSum([-1, 2, 3, -9])); // 5
// alert(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
// alert(getMaxSubSum([-2, -1, 1, 2])); // 3
// alert(getMaxSubSum([1, 2, 3])); // 6
// alert(getMaxSubSum([100, -9, 2, -3, 5])); // 100


















// a = 1.774;
// x = -2.7;
// m = 5;
// n = 1;

// let y = Math.sqrt(a + Math.pow(n, 2) * Math.pow(x, 2)) / (a + x) * m;
// if (Math.abs(y) < 1) {
//    z = y + 1
// }
// else {
//    z = Math.sin(Math.pow(y, 2));
// }
// alert(z);

//                                Homework

// d = new Array(5);
// for (i = 1; i <= 5; i++) {
//    d[i] = parseFloat(prompt("Введите d[" + i + "]:"));
// }
// max = d[1]; n = 1
// for (i = 1; i <= 5; i++) {
//    if (d[i] > max) { max = d[i]; n = i };
// }
// alert("Макс=" + max + "; Номер=" + n);


// d = new Array(5);
// i = 1;
// while (i <= 5) {
//    d[i] = parseFloat(prompt("Введите d[" + i + "]:"));
//    i++;
// }
// max = d[1]; n = 1;
// i = 1;
// while (i <= 5) {
//    if (d[i] > max) { max = d[i]; n = i };
//    i++
// }
// alert("Максимум=" + max + "; Номер=" + n);


// n=6; 
// d=12.55;
// а = [0.8, 4, -0.17, 2, 0.9, 1];

// n = d + Math.


// function setColors() {

//    cfg = new Array('violet', 'blue', 'turquoise', 'orange', 'black', 'snow')

//    cbg = new Array('red', 'cyan', 'green', 'yellow', 'peachpuff', 'white');
//    fg = Math.floor(Math.random() * cfg.length);
//    bg = Math.floor(Math.random() * cbg.length);
//    document.fgColor = cfg[fg];
//    document.bgColor = cbg[bg];
// }







//                            методы массива



//                            метод pop(удаляет элемент массива и сохраняет в присвоенную переменную(если таковая  обьявленна))     чуть выше это здесь)!!

// let fruits = ["apple", "orange", "grapes"];

// let end = fruits.pop();// поп не только удаляет  последний элемент, но и сохраняет его в переменную end!(то о чём говорилось чуть выше^)
// alert(end);
// alert(fruits);


//                            метод push(добавляет элемент в массив)

// let fruits = ["apple", "orange", "grapes"];

// fruits.push("tengerine");
// alert(fruits);


//                            методы shift


// let fruits = ["apple", "orange", "tengerine"];
// let start = fruits.shift();//"apple"
// alert(start);
// alert(fruits);



//                            unshift

// let fruits = ["apple", "orange"];
// let start = fruits.unshift("mango");
// alert(start);
// alert(fruits);


//                            split(преобразует строку в массив)
// let names = "маша, петя, марина, василий";
// let arr = names.split(", ");

// for(let i = 0; i < arr.length; i++){
//    alert(`вам сообщение: ${arr[i]}`);
// }



//                            join

// let arr = ["маша", "петя", "марина", "василий"];

// let names = arr.join(" | ");
// alert(names);




// //                            splice(может определённое кол-во элеметнов массива заменить на другие)

// //заменим в массиве числа 2,3 на 2.1 и 3.5.


// let arr = [1, 2, 3, 4, 5,];
// let cut = arr.splice(1,2,2.1,3.5);
// // 1 - начальный номер элемента массива для замены(число 2)
// // 2 - кол-во заменяемых элементов
// // 2.1 и 3.5 - новые элементы
// alert(cut);
// alert(arr);






//                               slice(коль-во копированных элементов не )

// let arr = ["ехали", "медведи", "на", "велосипеде"];
// let arr1 =  arr.slice(1,2);
// alert(arr1)
//  alert(arr);
// // 1 - начальный номер элемента массива для копирования.
// // 2 - кол-во копированных элементов минус 1.





//                          reverse

// let arr = [1,2,3];
// arr.reverse();
// alert(arr);





//                           concat()


// let arr = [1,2];
// let arr2 = ["masha","petja","lexa"]
// let arr1 = arr.concat(3,4,arr2,"Вася",true);

// alert(arr1);




//                          foreach(метод перебора элементов в массиве )



// let fruits = ["apple", "orange", "tengerine"];

// fruits.forEach(function(item, i, fruits) {
//    alert(`${i}: ${item} (массив ${fruits})`);
// } );


// i - порядковый номер элемента массива(начиная от нуля).
// item - элемент массива.

// //обычный перебор массива
// let fruits = ["apple", "orange", "tengerine"];


// for (i = 0; i < fruits.length; i++) {
//    alert(`${i}: ${fruits[i]} (массив ${fruits})`);
// }



// //обычный перебор массива 2ой способ =>>  item = fruits[i];
// let fruits = ["apple", "orange", "tengerine"];


// for (i = 0; i < fruits.length; i++) {
//    item = fruits[i];
//    alert(`${i}: ${item} (массив ${fruits})`);
// }







//                             упражнение


// 1. Обьявить в программе строку "минск - большой,чистый,город"
// 2.с помощью методов массива заменить в строке слова "большой, чистый",на "крупный и современный".
// 3. Вывести в браузер результирующую строку " минск крупный и современный город".


// let minsk1 = "минск - большой, чистый город";
// let arr = minsk1.split(" ");
// // alert(arr);

// let cut = arr.splice(2, 2,"крупный", "и", "современный");
// // alert(cut);
// // alert(arr);

// let minsk2 = arr.join(" | ");
// alert(minsk2);








//                       GitHub(хранилище файлов)бесплатный хостинг








let styles = ["джаз", "бдюз"];
styles.push("рок-н-ролл");           //Джаз, Блюз, Рок-н-Ролл
styles.splice(-2, 1, "классика");    //Джаз, Классика, Рок-н-Ролл
alert(styles);
let removed = styles.shift();        //Классика, Рок-н-Ролл
console.log(removed);
styles.unshift("рэп", "регги");      //Рэп, Регги, Классика, Рок-н-Ролл
alert(styles);









let styles = ["джаз", "бдюз", "Рэп", "Регги", "Классика", "Рок-н-Ролл"];


alert(styles.slice(-1));

