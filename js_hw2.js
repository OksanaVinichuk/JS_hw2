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

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let newArray=[];
newArray[0]="Learn";
newArray[1]="JavaScript";
newArray[2]="for"
newArray[3]=6;
newArray[4]="months";
console.log(newArray);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
    for (let i=0; i<=10; i++)
{document.write('<div>Text</div>')};
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i=0;
while (i<20)
{document.write('<h1>Lorem ipsum</h1>' ) };
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.