'use strict'
/*Написать чистую функцию, проверяющую, что переданная ей фраза является палиндромом, с 
использованием рекурсии.
Массивы при решении не использовать.
При проверке должны игнорироваться:
 - регистр букв;
 - пробелы;
 - знаки препинания;
 - мягкие и твёрдые знаки;
 - разница между буквами "е" и "ё".*/

var string = prompt("Напишите слово");
function checkWord(string){
    string = string.toLowerCase();
    string = string.split(' ').join('');
    string = string.split('ё').join('е');
    string = string.split('ъ').join('ь');
    string = string.split(',').join('');
    string = string.split('.').join('');
    string = string.split('!').join('')
    string = string.split('?').join('');
    var strLen = string.length;
    if (strLen === 0 || strLen === 1) {
        return true;
    }
    if (string[0] === string[strLen - 1]) {
        return checkWord(string.slice(1, strLen-1));
    }
    return false;
}
alert(checkWord(string));























//var array = userInput.split('');
// for(var i = 0; i< vowels.length; i++){
//     var pos = 0;
//     var arr = [];
//     while (true) {
//         var found = array.indexOf(vowels[i], pos);
//         if (found == -1) break;
//         alert(found);
//         arr.push(pos);
//         console.log(arr);
//         pos = found +1;
//     }
// }
//console.log(array);
