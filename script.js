const body = document.querySelector('body');
let divFirst = document.createElement("div");
divFirst.classList.add("container");
let divSecond = document.createElement("div");
divSecond.classList.add("keyboard_bg");
let divThird = document.createElement("div");
divThird.classList.add("keyboard_buttons");

let language = document.createElement("p");
language.innerText = 'Для переключения языка комбинация: левыe Shift + Alt'
divFirst.appendChild(language);

let OS = document.createElement("p");
OS.innerText = 'Клавиатура создана в операционной системе Linux'
divFirst.appendChild(OS);

body.appendChild(divFirst);
divFirst.appendChild(divSecond);
divSecond.appendChild(divThird);

let rows = [];

for (let i = 1; i <= 5; i++) {
    rows[i] = document.createElement("div");
    rows[i].classList.add("row");
    divThird.appendChild(rows[i]);
}

let rowOne = [];
let rowTwo = [];
let rowThree = [];
let rowFour = [];
let rowFive = [];

for (let i = 1; i <= 14; i++) {
    rowOne[i] = document.createElement("div");
    rowOne[i].classList.add("key");
    divThird.firstChild.appendChild(rowOne[i]);
}

rowOne[1].innerHTML = '`';
rowOne[1].classList.add("key-color");
rowOne[1].classList.add("tilda-key");
rowOne[2].innerHTML = '1';
rowOne[3].innerHTML = '2';
rowOne[4].innerHTML = '3';
rowOne[5].innerHTML = '4';
rowOne[6].innerHTML = '5';
rowOne[7].innerHTML = '6';
rowOne[8].innerHTML = '7';
rowOne[9].innerHTML = '8';
rowOne[10].innerHTML = '9';
rowOne[11].innerHTML = '0';
rowOne[12].innerHTML = '-';
rowOne[13].innerHTML = '=';
rowOne[13].classList.add("equal");
rowOne[14].innerHTML = 'Backspace';
rowOne[14].classList.add("backspace");
rowOne[14].classList.add("key-color");



for (let i = 1; i <= 15; i++) {
    rowTwo[i] = document.createElement("div");
    rowTwo[i].classList.add("key");
    rows[2].appendChild(rowTwo[i]);
}

rowTwo[1].innerHTML = 'Tab';
rowTwo[1].classList.add("tab");
rowTwo[1].classList.add("key-color");
rowTwo[2].innerHTML = 'Q';
rowTwo[3].innerHTML = 'W';
rowTwo[4].innerHTML = 'E';
rowTwo[5].innerHTML = 'R';
rowTwo[6].innerHTML = 'T';
rowTwo[7].innerHTML = 'Y';
rowTwo[8].innerHTML = 'U';
rowTwo[9].innerHTML = 'I';
rowTwo[10].innerHTML = 'O';
rowTwo[11].innerHTML = 'P';
rowTwo[12].innerHTML = '[';
rowTwo[13].innerHTML = ']';
rowTwo[14].innerHTML = '\\';
rowTwo[15].innerHTML = 'DEL';
rowTwo[15].classList.add("del");
rowTwo[15].classList.add("key-color");

for (let i = 1; i <= 13; i++) {
    rowThree[i] = document.createElement("div");
    rowThree[i].classList.add("key");
    rows[3].appendChild(rowThree[i]);
}

rowThree[1].innerHTML = 'Caps Lock';
rowThree[1].classList.add("caps-lock");
rowThree[1].classList.add("key-color");
rowThree[2].innerHTML = 'A';
rowThree[3].innerHTML = 'S';
rowThree[4].innerHTML = 'D';
rowThree[5].innerHTML = 'F';
rowThree[6].innerHTML = 'G';
rowThree[7].innerHTML = 'H';
rowThree[8].innerHTML = 'J';
rowThree[9].innerHTML = 'K';
rowThree[10].innerHTML = 'L';
rowThree[11].innerHTML = ';';
rowThree[12].innerHTML = '\'';
rowThree[13].innerHTML = 'ENTER';
rowThree[13].classList.add("enter");
rowThree[13].classList.add("key-color");

for (let i = 1; i <= 13; i++) {
    rowFour[i] = document.createElement("div");
    rowFour[i].classList.add("key");
    rows[4].appendChild(rowFour[i]);
}

rowFour[1].innerHTML = 'Shift';
rowFour[1].classList.add("shift-left");
rowFour[1].classList.add("key-color");
rowFour[2].innerHTML = 'Z';
rowFour[3].innerHTML = 'X';
rowFour[4].innerHTML = 'C';
rowFour[5].innerHTML = 'V';
rowFour[6].innerHTML = 'B';
rowFour[7].innerHTML = 'N';
rowFour[8].innerHTML = 'M';
rowFour[9].innerHTML = ',';
rowFour[10].innerHTML = '.';
rowFour[11].innerHTML = '/';
rowFour[12].innerHTML = '▲';
rowFour[12].classList.add("arrow-top");
rowFour[12].classList.add("key-color");
rowFour[13].innerHTML = 'Shift';
rowFour[13].classList.add("shift-right");
rowFour[13].classList.add("key-color");

for (let i = 1; i <= 9; i++) {
    rowFive[i] = document.createElement("div");
    rowFive[i].classList.add("key");
    rows[5].appendChild(rowFive[i]);
}

rowFive[1].innerHTML = 'Ctrl';
rowFive[1].classList.add("fivpx");
rowFive[1].classList.add("ctrl-left");
rowFive[1].classList.add("key-color");
rowFive[2].innerHTML = 'Win';
rowFive[2].classList.add("fivpx");
rowFive[2].classList.add("metaLeft");
rowFive[2].classList.add("key-color");
rowFive[3].innerHTML = 'Alt';
rowFive[3].classList.add("fivpx");
rowFive[3].classList.add("altLeft");
rowFive[3].classList.add("key-color");
rowFive[4].innerHTML = '';
rowFive[4].classList.add("space");
rowFive[5].innerHTML = 'Alt';
rowFive[5].classList.add("Alt");
rowFive[5].classList.add("altRight");
rowFive[5].classList.add("key-color");
rowFive[6].innerHTML = '◄';
rowFive[6].classList.add("arrow-left");
rowFive[6].classList.add("key-color");
rowFive[7].innerHTML = '▼';
rowFive[7].classList.add("arrow-bottom");
rowFive[7].classList.add("key-color");
rowFive[8].innerHTML = '►';
rowFive[8].classList.add("arrow-right");
rowFive[8].classList.add("key-color");
rowFive[9].innerHTML = 'Ctrl';
rowFive[9].classList.add("ctrl-right");
rowFive[9].classList.add("key-color");

let input = document.createElement("textarea");
divFirst.appendChild(input);
input.classList.add("text");
input.setAttribute('type', 'text');
input.focus();
input.onblur = () => input.focus();
input.addEventListener('keydown', function (e) {
    if (e.code == 'Tab') {
        e.preventDefault();
        let start = input.selectionStart;
        let end = input.selectionEnd;

        input.value = input.value.substring(0, start)
            + '    '
            + input.value.substring(end, input.value.length);

        input.setSelectionRange(start + 4, end + 4)
    }
})

let arrowTop = document.querySelector('.arrow-top')
let arrowLeft = document.querySelector('.arrow-left')
let arrowBottom = document.querySelector('.arrow-bottom')
let arrowRight = document.querySelector('.arrow-right')


input.addEventListener('keydown', function (e) {
    if (e.code == 'ArrowUp') {
        e.preventDefault();
        let start = input.selectionStart;
        let end = input.selectionEnd;

        input.value = input.value.substring(0, start)
            + '▲'
            + input.value.substring(end, input.value.length);

        input.setSelectionRange(start + 1, end + 1)
    }
})

input.addEventListener('keydown', function (e) {
    if (e.code == 'ArrowLeft') {
        e.preventDefault();
        let start = input.selectionStart;
        let end = input.selectionEnd;

        input.value = input.value.substring(0, start)
            + '◄'
            + input.value.substring(end, input.value.length);

        input.setSelectionRange(start + 1, end + 1)
    }
})

input.addEventListener('keydown', function (e) {
    if (e.code == 'ArrowDown') {
        e.preventDefault();
        let start = input.selectionStart;
        let end = input.selectionEnd;

        input.value = input.value.substring(0, start)
            + '▼'
            + input.value.substring(end, input.value.length);

        input.setSelectionRange(start + 1, end + 1)
    }
})

input.addEventListener('keydown', function (e) {
    if (e.code == 'ArrowRight') {
        e.preventDefault();
        let start = input.selectionStart;
        let end = input.selectionEnd;

        input.value = input.value.substring(0, start)
            + '►'
            + input.value.substring(end, input.value.length);

        input.setSelectionRange(start + 1, end + 1)
    }
})


let keys = document.querySelectorAll('.key');
let tilda_key = document.querySelector('.tilda-key');
let equal = document.querySelector('.equal');
let del = document.querySelector('.del');
let caps_lock = document.querySelector('.caps-lock');
let shiftLeft = document.querySelector('.shift-left');
let shiftRight = document.querySelector('.shift-right');
let controlLeft = document.querySelector('.ctrl-left');
let controlRight = document.querySelector('.ctrl-right');
let metaLeft = document.querySelector('.metaLeft');
let altLeft = document.querySelector('.altLeft');
let altRight = document.querySelector('.altRight');
let space = document.querySelector('.space');

for (let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerText);
    keys[i].setAttribute('keyname', keys[i].innerText.toLowerCase())
}

window.addEventListener('keydown', function (e) {
    for (let i = 0; i < keys.length; i++) {
        let attribName = keys[i].getAttribute('keyname')
        console.log(e.key);

        if (e.code == 'Backquote') {
            tilda_key.classList.remove('remove');
            tilda_key.classList.add('active');
        }

        else if (e.code == 'Equal') {
            equal.classList.remove('remove');
            equal.classList.add('active');
        }

        else if (e.code == 'Delete') {
            del.classList.remove('remove');
            del.classList.add('active');
        }

        else if (e.code == 'CapsLock') {
            caps_lock.classList.remove('remove');
            caps_lock.classList.add('active');
        }

        else if (e.code == 'ShiftLeft') {
            shiftLeft.classList.remove('remove');
            shiftLeft.classList.add('active');
        }

        else if (e.code == 'ShiftRight') {
            shiftRight.classList.remove('remove');
            shiftRight.classList.add('active');
        }

        else if (e.code == 'ControlLeft') {
            controlLeft.classList.remove('remove');
            controlLeft.classList.add('active');
        }

        else if (e.code == 'ControlRight') {
            controlRight.classList.remove('remove');
            controlRight.classList.add('active');
        }

        else if (e.code == 'MetaLeft') {
            metaLeft.classList.remove('remove');
            metaLeft.classList.add('active');
        }

        else if (e.code == 'AltLeft') {
            altLeft.classList.remove('remove');
            altLeft.classList.add('active');
        }

        else if (e.code == 'AltRight') {
            altRight.classList.remove('remove');
            altRight.classList.add('active');
        }

        else if (e.code == 'Space') {
            space.classList.remove('remove');
            space.classList.add('active');
        }

        else if (e.code == 'ArrowLeft') {
            arrowLeft.classList.remove('remove');
            arrowLeft.classList.add('active');
        }

        else if (e.code == 'ArrowUp') {
            arrowTop.classList.remove('remove');
            arrowTop.classList.add('active');
        }

        else if (e.code == 'ArrowRight') {
            arrowRight.classList.remove('remove');
            arrowRight.classList.add('active');
        }

        else if (e.code == 'ArrowDown') {
            arrowBottom.classList.remove('remove');
            arrowBottom.classList.add('active');
        }

        else if (e.key.toLowerCase() == attribName.toLowerCase()) {
            keys[i].classList.remove('remove');
            keys[i].classList.add('active');
        }
    }


})


window.addEventListener('keyup', function (e) {
    for (let i = 0; i < keys.length; i++) {
        let attribName = keys[i].getAttribute('keyname')

        if (e.code == 'Backquote') {
            tilda_key.classList.remove('active');
            tilda_key.classList.add('remove');
        }

        else if (e.code == 'Equal') {
            equal.classList.remove('active');
            equal.classList.add('remove');
        }

        else if (e.code == 'Delete') {
            del.classList.remove('active');
            del.classList.add('remove');
        }

        else if (e.code == 'CapsLock') {
            caps_lock.classList.remove('active');
            caps_lock.classList.add('remove');
        }

        else if (e.code == 'ShiftLeft') {
            shiftLeft.classList.remove('active');
            shiftLeft.classList.add('remove');
        }

        else if (e.code == 'ShiftRight') {
            shiftRight.classList.remove('active');
            shiftRight.classList.add('remove');
        }

        else if (e.code == 'ControlLeft') {
            controlLeft.classList.remove('active');
            controlLeft.classList.add('remove');
        }

        else if (e.code == 'ControlRight') {
            controlRight.classList.remove('active');
            controlRight.classList.add('remove');
        }

        else if (e.code == 'MetaLeft') {
            metaLeft.classList.remove('active');
            metaLeft.classList.add('remove');
        }

        else if (e.code == 'AltLeft') {
            altLeft.classList.remove('active');
            altLeft.classList.add('remove');
        }

        else if (e.code == 'AltRight') {
            altRight.classList.remove('active');
            altRight.classList.add('remove');
        }

        else if (e.code == 'Space') {
            space.classList.remove('active');
            space.classList.add('remove');
        }

        else if (e.code == 'ArrowLeft') {
            arrowLeft.classList.remove('active');
            arrowLeft.classList.add('remove');
        }

        else if (e.code == 'ArrowUp') {
            arrowTop.classList.remove('active');
            arrowTop.classList.add('remove');
        }

        else if (e.code == 'ArrowRight') {
            arrowRight.classList.remove('active');
            arrowRight.classList.add('remove');
        }

        else if (e.code == 'ArrowDown') {
            arrowBottom.classList.remove('active');
            arrowBottom.classList.add('remove');
        }

        else if (e.key.toLowerCase() == attribName.toLowerCase()) {
            keys[i].classList.remove('active');
            keys[i].classList.add('remove');
        }
    }


})

window.addEventListener('mousedown', function (e) {
    for (let i = 0; i < keys.length; i++) {
        let attribName = keys[i].getAttribute('keyname')
        let start = input.selectionStart;
        let end = input.selectionEnd;

        if (e.target.classList.contains('shift-left')) {
            e.target.classList.remove('remove');
            e.target.classList.add('active');
        }

        else if (e.target.classList.contains('shift-right')) {
            e.target.classList.remove('remove');
            e.target.classList.add('active');
        }

        else if (e.target.classList.contains('altLeft')) {
            e.target.classList.remove('remove');
            e.target.classList.add('active');
        }

        else if (e.target.classList.contains('altRight')) {
            e.target.classList.remove('remove');
            e.target.classList.add('active');
        }

        else if (e.target.classList.contains('ctrl-left')) {
            e.target.classList.remove('remove');
            e.target.classList.add('active');
        }

        else if (e.target.classList.contains('ctrl-right')) {
            e.target.classList.remove('remove');
            e.target.classList.add('active');
        }

        else if (e.target.innerText == keys[i].innerText) {
            keys[i].classList.remove('remove');
            keys[i].classList.add('active');

            if (keys[i].innerText == 'Backspace') {
                let input_first_part = input.value.substring(0, start);
                let input_last_part = input.value.substring(end, input.value.length);
                let input_without_last_sumbol = input_first_part.slice(0, -1);
                input.value = input_without_last_sumbol + input_last_part;
                input.setSelectionRange(start - 1, end - 1)
            }

            if (keys[i].innerText == 'Tab') {
                input.value = input.value.substring(0, start)
                    + '    '
                    + input.value.substring(end, input.value.length);
                input.setSelectionRange(start + 4, end + 4)
            }

            if (keys[i].innerText == 'DEL') {
                let input_first_part = input.value.substring(0, start);
                let input_last_part = input.value.substring(end, input.value.length);
                let input_without_first_sumbol = input_last_part.slice(1);
                input.value = input_first_part + input_without_first_sumbol;
                input.setSelectionRange(start, end)
            }

            if (keys[i].innerText == '') {
                input.value = input.value.substring(0, start)
                    + ' '
                    + input.value.substring(end, input.value.length);
                input.setSelectionRange(start + 1, end + 1)
            }

            if (keys[i].innerText.length == 1) {
                input.value = input.value.substring(0, start)
                    + keys[i].innerText
                    + input.value.substring(end, input.value.length);
                input.setSelectionRange(start + 1, end + 1)
            }
        }

    }
})

window.addEventListener('mouseup', function (e) {
    for (let i = 0; i < keys.length; i++) {
        keys[i].classList.remove('active');
        keys[i].classList.add('remove');
    }


})
