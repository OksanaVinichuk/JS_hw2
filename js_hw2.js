// 1. --створити масив та вивести його в консоль:
//    - з 5 числових значень
//    - з 5 стічкових значень
//    - з 5 значень стрічкового, числового та булевого типу
let numArray = [4, 27, 93, 34, 8];
console.log(numArray);
let strArray = ['Hello', 'cool', 'Okten', 'Web', 'University'];
console.log(strArray);
let someArray = ['javaScript', 'is', true, 'challenge', 2020];
console.log(someArray);

// 2. -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let newArray = [];
newArray[0] = "Learn";
newArray[1] = "JavaScript";
newArray[2] = "for"
newArray[3] = 6;
newArray[4] = "months";
console.log(newArray);

// 3. - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write('<div>Text</div>')
}
;
// 4. - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write('<div>Text' + i + '</div>')
}
;
// 5. - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 20) {
    document.write('<h1>Lorem ipsum</h1>');
    i++
}
// 6. - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let j = 0;
while (j < 20) {
    document.write('<h1>Lorem ipsum' + j + '</h1>');
    j++
}
// 7. - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let tenArray = [2, 7, 8, 9, 12, 48, 3, 6, 10, 27];
for (let i = 0; i < tenArray.length; i++) {
    console.log(tenArray[i]);
}

// 8. - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let stringArray = ['Oksana', 'Andrii', 'Vlad', 'Orest', 'Liubov', 'Liubomyr', 'Hanna' , 'Mykola', 'Bohdan', 'Viktoriia'];
for (let i = 0; i < stringArray.length; i++) {
    console.log(stringArray[i]);}

// 9. - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.







// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
let minutes=[]
for(let i=0;i<=60;i++){
    console.log(${i} sec)
    if(i==60){
        for(let min = 1;min<=1.20;min=min+0.01){
            console.log(${min} );
        }
    }
}