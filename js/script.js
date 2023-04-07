/*                                             */

function createElement(tag, className) {
    const element = document.createElement(tag);
    element.className = className;
    return element;
};

/*                    CREATE ELEMENT AND APPEND                         */

const wrapper = createElement('div', 'wrapper');
const gameContainer = createElement('div', 'game__container');
const gameField = createElement('div', 'game__field');

const gameList_3 = createElement('div', 'game__list game__list_3');
const gameList_4 = createElement('div', 'show game__list game__list_4');
const gameList_5 = createElement('div', 'game__list game__list_5');
const gameList_6 = createElement('div', 'game__list game__list_6');
const gameList_7 = createElement('div', 'game__list game__list_7');
const gameList_8 = createElement('div', 'game__list game__list_8');

const gameInfo = createElement('div', 'game__info');
const volumeOn = createElement('img', 'volume volume__on');
const volumeOff = createElement('img', 'volume volume__off');
const volumeAnimation = createElement('video', 'volume volume__anim');
const volumeAnimationReverse = createElement('video', 'volume volume__anim_reverse');
const moves = createElement('p', 'moves');
const movesValue = createElement('span', 'moves-value');
const time = createElement('p', 'time');
const timeValue = createElement('span', 'time-value');
const gameButtons = createElement('div', 'game__buttons');
const shuffleBtn = createElement('button', 'btn btn__shuffle');
const stopBtn = createElement('button', 'btn btn__stop');
const safeBtn = createElement('button', 'btn btn__safe');
const loadBtn = createElement('button', 'btn btn__load');
const resultBtn = createElement('button', 'btn btn__result');
const rulesBtn = createElement('button', 'btn btn__rules');

const rules = createElement('div', 'rules');
const rulesCross = createElement('img', 'rules__cross');
const rulesList = createElement('ul', 'rules__list');
const rulesItem_1 = createElement('li', 'rules__item rules__item_1');
const rulesItem_2 = createElement('li', 'rules__item rules__item_2');
const rulesItem_3 = createElement('li', 'rules__item rules__item_3');
const rulesItem_4 = createElement('li', 'rules__item rules__item_4');
const rulesItem_5 = createElement('li', 'rules__item rules__item_5');
const rulesItem_6 = createElement('li', 'rules__item rules__item_6');

const audioBackground = createElement('audio', 'audio');

let results = createElement('div', 'game__results results');
let titleResult = createElement('h2', 'results__title');
let resultsList_3 = createElement('div', 'results__list');

let resultsItem_1 = createElement('input', 'results__item results__item_1');
let resultsItem_2 = createElement('input', 'results__item results__item_2');
let resultsItem_3 = createElement('input', 'results__item results__item_3');
let resultsItem_4 = createElement('input', 'results__item results__item_4');
let resultsItem_5 = createElement('input', 'results__item results__item_5');
let resultsItem_6 = createElement('input', 'results__item results__item_6');
let resultsItem_7 = createElement('input', 'results__item results__item_7');
let resultsItem_8 = createElement('input', 'results__item results__item_8');
let resultsItem_9 = createElement('input', 'results__item results__item_9');
let resultsItem_10 = createElement('input', 'results__item results__item_10');

resultsList_3.append(resultsItem_1);
resultsList_3.append(resultsItem_2);
resultsList_3.append(resultsItem_3);
resultsList_3.append(resultsItem_4);
resultsList_3.append(resultsItem_5);
resultsList_3.append(resultsItem_6);
resultsList_3.append(resultsItem_7);
resultsList_3.append(resultsItem_8);
resultsList_3.append(resultsItem_9);
resultsList_3.append(resultsItem_10);

let resultsList_4 = resultsList_3.cloneNode(true);
let resultsList_5 = resultsList_3.cloneNode(true);
let resultsList_6 = resultsList_3.cloneNode(true);
let resultsList_7 = resultsList_3.cloneNode(true);
let resultsList_8 = resultsList_3.cloneNode(true);

let wowContainer = createElement('div', 'wow');
let text_wow = createElement('p', 'text__wow');
let gameSize = createElement('div', 'game__size');
let frameSize = createElement('p', 'frame-size');
let frameSizeValue = createElement('span', 'frame-size-value');
let otherSizes = createElement('div', 'other-size');
let sizeBtn_3 = createElement('button', 'btn-size size_3');
let sizeBtn_4 = createElement('button', 'underline btn-size size_4');
let sizeBtn_5 = createElement('button', 'btn-size size_5');
let sizeBtn_6 = createElement('button', 'btn-size size_6');
let sizeBtn_7 = createElement('button', 'btn-size size_7');
let sizeBtn_8 = createElement('button', 'btn-size size_8');

volumeOff.src = 'assets/png/volume-off.png';
volumeAnimationReverse.src = 'assets/video/reverse.mp4';
volumeAnimation.src = 'assets/video/volume.mp4';
volumeOn.src = 'assets/png/volume-on.png';
moves.textContent = 'Moves:';
movesValue.textContent = 0;
time.textContent = 'Time:';
timeValue.textContent = '0:00';
shuffleBtn.textContent = 'Shuffle and start'
stopBtn.textContent = 'Stop'
safeBtn.textContent = 'Safe'
loadBtn.textContent = 'Load'
resultBtn.textContent = 'Result';
titleResult.textContent = 'Results';
rulesBtn.textContent = 'Rules';
frameSize.textContent = 'Frame size:'
frameSizeValue.textContent = '4x4';
otherSizes.textContent = 'Other sizes:';
sizeBtn_3.textContent = '3x3';
sizeBtn_4.textContent = '4x4';
sizeBtn_5.textContent = '5x5';
sizeBtn_6.textContent = '6x6';
sizeBtn_7.textContent = '7x7';
sizeBtn_8.textContent = '8x8';
audioBackground.src = 'assets/audio/background.mp3';
audioBackground.autoplay = 'autoplay';
audioBackground.volume = .1;

rulesItem_1.textContent = 'Чтобы начать игру, нажмите на кнопку "Shuffle and start"';
rulesItem_2.textContent = 'Чтобы остановить игру, нажмите на кнопку "Stop"';
rulesItem_3.textContent = 'Чтобы сохранить игру, нажмите на кнопку "Safe"';
rulesItem_4.textContent = 'Чтобы загрузить последнюю игру, нажмите на кнопку "Stop" затем нажмите на кнопку "Load"!';
rulesItem_5.textContent = 'Чтобы посмотреть таблицу результатов, нажмите на кнопку "Result"';
rulesItem_6.textContent = 'Чтобы перейти на другое поле, нажмите на соответствующую нужного размера кнопку поля "Other sizes"';
rulesCross.src = 'assets/svg/cross.svg';

document.body.append(wrapper);
wrapper.append(audioBackground);
wrapper.append(gameContainer);
gameContainer.append(gameField);

gameField.append(gameList_3);
gameField.append(gameList_4);
gameField.append(gameList_5);
gameField.append(gameList_6);
gameField.append(gameList_7);
gameField.append(gameList_8);

gameContainer.append(gameInfo);

gameInfo.append(volumeOn);
gameInfo.append(volumeAnimationReverse);
gameInfo.append(volumeAnimation);
gameInfo.append(volumeOff);
gameInfo.append(moves);

moves.append(movesValue);
gameInfo.append(time);
time.append(timeValue);

gameContainer.append(gameButtons);
gameButtons.append(shuffleBtn); 
gameButtons.append(stopBtn);
gameButtons.append(safeBtn); 
gameButtons.append(loadBtn);
gameButtons.append(resultBtn);
gameButtons.append(rulesBtn);
results.append(titleResult);

results.append(resultsList_3);
results.append(resultsList_4);
results.append(resultsList_5);
results.append(resultsList_6);
results.append(resultsList_7);
results.append(resultsList_8);

wrapper.append(results);
wowContainer.append(text_wow);
gameField.append(wowContainer);
gameContainer.append(gameSize);
gameSize.append(frameSize);
frameSize.append(frameSizeValue);
gameSize.append(otherSizes);

otherSizes.append(sizeBtn_3);
otherSizes.append(sizeBtn_4);
otherSizes.append(sizeBtn_5);
otherSizes.append(sizeBtn_6);
otherSizes.append(sizeBtn_7);
otherSizes.append(sizeBtn_8);

rules.append(rulesList);
rules.append(rulesCross);
rulesList.append(rulesItem_1);
rulesList.append(rulesItem_2);
rulesList.append(rulesItem_3);
rulesList.append(rulesItem_4);
rulesList.append(rulesItem_5);
rulesList.append(rulesItem_6);

wrapper.append(rules);

resultsList_3.classList.add('results__list_3');
resultsList_4.classList.add('results__list_4');
resultsList_5.classList.add('results__list_5');
resultsList_6.classList.add('results__list_6');
resultsList_7.classList.add('results__list_7');
resultsList_8.classList.add('results__list_8');

/*  FILL GAME CONTAINERS WITH ELEMENTS  */

function fillContainerItems(quantityItems, container) {
    const values = new Array(quantityItems).fill(0).map((_item, index) => index + 1);
    for (let val of values) {
        let item = createElement('button', `game__item game__item_${val}`);
        item.textContent = `${val}`;
        item.dataset.matrixId = val;
        container.append(item);
    };
    return container;
};
fillContainerItems(9, gameList_3); fillContainerItems(16, gameList_4); fillContainerItems(25, gameList_5);
fillContainerItems(36, gameList_6); fillContainerItems(49, gameList_7); fillContainerItems(64, gameList_8);

/*  DELETE LAST ITEM IN EVERY GAME CONTAINERS  */

const itemNodes_3 = Array.from(document.querySelectorAll('.game__list_3 .game__item'));
const itemNodes_4 = Array.from(document.querySelectorAll('.game__list_4 .game__item'));
const itemNodes_5 = Array.from(document.querySelectorAll('.game__list_5 .game__item'));
const itemNodes_6 = Array.from(document.querySelectorAll('.game__list_6 .game__item'));
const itemNodes_7 = Array.from(document.querySelectorAll('.game__list_7 .game__item'));
const itemNodes_8 = Array.from(document.querySelectorAll('.game__list_8 .game__item'));

function deleteLastItem(itemNodes, drop) {
    let countItems = itemNodes.length;
    itemNodes[countItems - 1].style.opacity = '0';
    itemNodes[countItems - 1].ondragover = allowDrop;
    itemNodes[countItems - 1].ondrop = drop;
};

deleteLastItem(itemNodes_3, drop_3); deleteLastItem(itemNodes_4, drop_4);
deleteLastItem(itemNodes_5, drop_5); deleteLastItem(itemNodes_6, drop_6);
deleteLastItem(itemNodes_7, drop_7); deleteLastItem(itemNodes_8, drop_8);

/*  CREATE MATRIXES  */

function createMatrix(itemNodes, emptyMatrix) {
    return getMatrix(itemNodes.map(item => +item.dataset.matrixId), emptyMatrix);
};

let matrix_3 = createMatrix(itemNodes_3, [[], [], []]);
let matrix_4 = createMatrix(itemNodes_4, [[], [], [], []]);
let matrix_5 = createMatrix(itemNodes_5, [[], [], [], [], []]);
let matrix_6 = createMatrix(itemNodes_6, [[], [], [], [], [], []]);
let matrix_7 = createMatrix(itemNodes_7, [[], [], [], [], [], [], []]);
let matrix_8 = createMatrix(itemNodes_8, [[], [], [], [], [], [], [], []]);

function getMatrix(arr, matrix, x = 0, y = 0) {
    for (let i = 0; i < arr.length; i++) {
        if (x >= matrix.length) {
            y++;
            x = 0;
        }
        matrix[y][x] = arr[i];
        x++;
    };
    return matrix;
};

/*  SET POSITIONS  */

function setPositionItems(matrix, itemNodes) {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            const value = matrix[y][x];
            const node = itemNodes[value - 1];
            setNodeStyles(node, x, y);
        }
    }
};

function setNodeStyles(node, x, y) {
    const shiftPs = 100;
    node.style.transform = `translate3D(${x * shiftPs}%, ${y * shiftPs}%, 0)`;
};

/*  ABILITY TO DRAG AND DROP  */

function allowDrop(event) {
    event.preventDefault();
};

function giveOpportunityToMove(itemNodes) {
    itemNodes.forEach(item => {
        item.draggable = true;
        item.ondragstart = drag;
    });
};
giveOpportunityToMove(itemNodes_3);
giveOpportunityToMove(itemNodes_4);
giveOpportunityToMove(itemNodes_5);
giveOpportunityToMove(itemNodes_6);
giveOpportunityToMove(itemNodes_7);
giveOpportunityToMove(itemNodes_8);

function drag(event) {
    event.dataTransfer.setData('dataset.matrixId', event.target.dataset.matrixId);
};

function transferElements(matrix, itemNodes, winFlatArr, length) {
    let itemId = event.dataTransfer.getData('dataset.matrixId');
    if (!itemId) {
        return;
    };
    const blankNumber = length;
    const buttonNumber = Number(itemId);
    const buttonCoords = findCoordinatesByNumber(buttonNumber, matrix);
    const blankCoords = findCoordinatesByNumber(blankNumber, matrix);
    const isValid = isValidForSwap(buttonCoords, blankCoords);

    if (isValid) {
        swap(blankCoords, buttonCoords, matrix, winFlatArr);
        setPositionItems(matrix, itemNodes);
        if (shuffleBtn.disabled === true) movesValue.textContent = +movesValue.textContent + 1;
        move.play();
    } else {
        noclick.play();
    };
}

function drop_3(event) { transferElements(matrix_3, itemNodes_3, winFlatArr_3, 9) };
function drop_4(event) { transferElements(matrix_4, itemNodes_4, winFlatArr_4, 16) };
function drop_5(event) { transferElements(matrix_5, itemNodes_5, winFlatArr_5, 25) };
function drop_6(event) { transferElements(matrix_6, itemNodes_6, winFlatArr_6, 36) };
function drop_7(event) { transferElements(matrix_7, itemNodes_7, winFlatArr_7, 49) };
function drop_8(event) { transferElements(matrix_8, itemNodes_8, winFlatArr_8, 64) };

/*  MOVING GAME ELEMENTS BY CLICK  */

function moveGameElementByClick(e, className, matrix, itemNodes, lengthMatrix) {
    const buttonNode = e.target.closest(`${className} .game__item`);
    if (!buttonNode) {
        return;
    };
    const blankNumber = lengthMatrix;
    const buttonNumber = Number(buttonNode.dataset.matrixId);
    const buttonCoords = findCoordinatesByNumber(buttonNumber, matrix);
    const blankCoords = findCoordinatesByNumber(blankNumber, matrix);
    const isValid = isValidForSwap(buttonCoords, blankCoords);
    if (isValid) {
        swap(blankCoords, buttonCoords, matrix, winFlatArr_3);
        setPositionItems(matrix, itemNodes);
        if (shuffleBtn.disabled === true) movesValue.textContent++;
        move.play();
    } else {
        noclick.play();
    };
}

gameList_3.addEventListener('click', (e) => { moveGameElementByClick(e, '.game__list_3', matrix_3, itemNodes_3, 9) });
gameList_4.addEventListener('click', (e) => { moveGameElementByClick(e, '.game__list_4', matrix_4, itemNodes_4, 16) });
gameList_5.addEventListener('click', (e) => { moveGameElementByClick(e, '.game__list_5', matrix_5, itemNodes_5, 25) });
gameList_6.addEventListener('click', (e) => { moveGameElementByClick(e, '.game__list_6', matrix_6, itemNodes_6, 36) });
gameList_7.addEventListener('click', (e) => { moveGameElementByClick(e, '.game__list_7', matrix_7, itemNodes_7, 49) });
gameList_8.addEventListener('click', (e) => { moveGameElementByClick(e, '.game__list_8', matrix_8, itemNodes_8, 64) });

function findCoordinatesByNumber(number, matrix) {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] === number) {
                return { x, y };
            }
        }
    };
    return null;
};

function isValidForSwap(coords1, coords2) {
    const diffX = Math.abs(coords1.x - coords2.x);
    const diffY = Math.abs(coords1.y - coords2.y);

    return (diffX === 1 || diffY === 1) && (coords1.x === coords2.x || coords1.y === coords2.y);
};

function swap(coords1, coords2, matrix, winFlatArr) {
    const coords1Number = matrix[coords1.y][coords1.x];
    matrix[coords1.y][coords1.x] = matrix[coords2.y][coords2.x];
    matrix[coords2.y][coords2.x] = coords1Number;

    if (isWon(matrix, winFlatArr)) {
        addWonClass();
    };
};

/*  IF WILL WIN  */

const winFlatArr_3 = new Array(9).fill(0).map((_item, index) => index + 1);
const winFlatArr_4 = new Array(16).fill(0).map((_item, index) => index + 1);
const winFlatArr_5 = new Array(25).fill(0).map((_item, index) => index + 1);
const winFlatArr_6 = new Array(36).fill(0).map((_item, index) => index + 1);
const winFlatArr_7 = new Array(49).fill(0).map((_item, index) => index + 1);
const winFlatArr_8 = new Array(64).fill(0).map((_item, index) => index + 1);

function isWon(matrix, winFlatArr) {
    const flatMatrix = matrix.flat();
    for (let i = 0; i < winFlatArr.length; i++) {
        if (flatMatrix[i] !== winFlatArr[i]) {
            return false;
        }
    }
    return true;
};

/*  FILLING IN THE RESULTS WITH 5:00 TIME  */

let resultsElements_3 = Array.from(document.querySelectorAll('.results__list_3 .results__item'));
let resultsElements_4 = Array.from(document.querySelectorAll('.results__list_4 .results__item'));
let resultsElements_5 = Array.from(document.querySelectorAll('.results__list_5 .results__item'));
let resultsElements_6 = Array.from(document.querySelectorAll('.results__list_6 .results__item'));
let resultsElements_7 = Array.from(document.querySelectorAll('.results__list_7 .results__item'));
let resultsElements_8 = Array.from(document.querySelectorAll('.results__list_8 .results__item'));

resultsElements_3.forEach(item => item.value === '' ? item.value = '5:00' : item.value);
resultsElements_4.forEach(item => item.value === '' ? item.value = '5:00' : item.value);
resultsElements_5.forEach(item => item.value === '' ? item.value = '5:00' : item.value);
resultsElements_6.forEach(item => item.value === '' ? item.value = '5:00' : item.value);
resultsElements_7.forEach(item => item.value === '' ? item.value = '5:00' : item.value);
resultsElements_8.forEach(item => item.value === '' ? item.value = '5:00' : item.value);

let resultItems = Array.from(document.querySelectorAll('.results__item'));

function distributeResults(resultsElements) {
    let valuesElements = [];
    resultsElements.forEach(item => valuesElements.push(item.value));
    valuesElements.push(timeValue.textContent);
    valuesElements = valuesElements.sort();
    valuesElements.pop();
    for (let i = 0; i < resultsElements.length; i++) {
        resultsElements[i].value = valuesElements[i];
    };
};

function addWonClass() {
    setTimeout(function () {
        wowContainer.style.opacity = '1';
        wowContainer.style.zIndex = '1';
        text_wow.textContent = `Hurray! You have solved the puzzle for ${timeValue.textContent} and ${movesValue.textContent} moves!!`;
        win.play();

        if (frameSizeValue.textContent === '3x3') distributeResults(resultsElements_3);
        if (frameSizeValue.textContent === '4x4') distributeResults(resultsElements_4);
        if (frameSizeValue.textContent === '5x5') distributeResults(resultsElements_5);
        if (frameSizeValue.textContent === '6x6') distributeResults(resultsElements_6);
        if (frameSizeValue.textContent === '7x7') distributeResults(resultsElements_7);
        if (frameSizeValue.textContent === '8x8') distributeResults(resultsElements_8);

        for (let i = 0; i < resultItems.length; i++) {
            localStorage.setItem(`item${i}`, resultItems[i].value);
        }

        setTimeout(function () {
            wowContainer.style.opacity = '0';
            wowContainer.style.zIndex = '-1';
        }, 10000)
    }, 1000);
};

function getLocalStorage() {
    for (let i = 0; i < resultItems.length; i++) {
        if (localStorage.getItem(`item${i}`)) {
            resultItems[i].value = localStorage.getItem(`item${i}`);
        };
    }
};
window.addEventListener('load', getLocalStorage);

/*                                             */

function checkAvailability(arr, q) {
    let sum = 0;
    let emptyItemPosition = 0;
    let copy = arr.slice(0);
    let isPossible;

    const res = [];
    for (let i = 0; i < copy.length; i += q) {
        const chunk = copy.slice(i, i + q);
        res.push(chunk);
    };

    res.forEach((item, index) => item.includes(q ** 2) ? emptyItemPosition = index + 1 : emptyItemPosition);
    copy.forEach((item, index) => item === q ** 2 ? copy.splice(index, 1) : item);

    for (let i = 0; i < copy.length; i++) {
        for (let j = i + 1; j < copy.length; j++) {
            if (copy[i] > copy[j]) {
                sum++;
            };
        };
    };
    if (arr.length % 2 !== 0) {
        isPossible = sum % 2 === 0;
    } else {
        isPossible = (sum + emptyItemPosition) % 2 === 0;
    }
    console.log('Решаемая сборка:', isPossible);
    return isPossible;
};

function shuffleArray_3(arr) {
    arr = arr.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);

    if (checkAvailability(arr, 3)) {
        matrix_3 = getMatrix(arr, [[], [], []]);
        setPositionItems(matrix_3, itemNodes_3);
    } else {
        shuffleArray_3(arr);
    }
};
function shuffleArray_4(arr) {
    arr = arr.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);

    if (checkAvailability(arr, 4)) {
        matrix_4 = getMatrix(arr, [[], [], [], []]);
        return setPositionItems(matrix_4, itemNodes_4);
    } else {
        return shuffleArray_4(arr);
    }
};
function shuffleArray_5(arr) {
    arr = arr.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);

    if (checkAvailability(arr, 5)) {
        matrix_5 = getMatrix(arr, [[], [], [], [], []]);
        return setPositionItems(matrix_5, itemNodes_5);
    } else {
        return shuffleArray_5(arr);
    }
};
function shuffleArray_6(arr) {
    arr = arr.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);

    if (checkAvailability(arr, 6)) {
        matrix_6 = getMatrix(arr, [[], [], [], [], [], []]);
        return setPositionItems(matrix_6, itemNodes_6);
    } else {
        return shuffleArray_6(arr);
    }
};
function shuffleArray_7(arr) {
    arr = arr.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);

    if (checkAvailability(arr, 7)) {
        matrix_7 = getMatrix(arr, [[], [], [], [], [], [], []]);
        return setPositionItems(matrix_7, itemNodes_7);
    } else {
        return shuffleArray_7(arr);
    }
};
function shuffleArray_8(arr) {
    arr = arr.map(value => ({ value, sort: Math.random() })).sort((a, b) => a.sort - b.sort).map(({ value }) => value);

    if (checkAvailability(arr, 8)) {
        matrix_8 = getMatrix(arr, [[], [], [], [], [], [], [], []]);
        return setPositionItems(matrix_8, itemNodes_8);
    } else {
        return shuffleArray_8(arr);
    }
};
shuffleArray_4(matrix_4.flat());

let btns = document.querySelectorAll('.btn');

stopBtn.disabled = true;
let timer;

shuffleBtn.addEventListener('click', () => {
    timeValue.textContent = '0:00';
    movesValue.textContent = 0;
    shuffleBtn.disabled = true;
    safeBtn.disabled = false;
    stopBtn.disabled = false;
    shuffleElements.play();
    Array.from(document.querySelectorAll('.game__item')).forEach(item => item.style.pointerEvents = 'painted');

    if (gameList_3.classList.contains('show')) shuffleArray_3(matrix_3.flat());
    if (gameList_4.classList.contains('show')) shuffleArray_4(matrix_4.flat());
    if (gameList_5.classList.contains('show')) shuffleArray_5(matrix_5.flat());
    if (gameList_6.classList.contains('show')) shuffleArray_6(matrix_6.flat());
    if (gameList_7.classList.contains('show')) shuffleArray_7(matrix_7.flat());
    if (gameList_8.classList.contains('show')) shuffleArray_8(matrix_8.flat());

    let sec = 1;
    let min = 0;
    timer = setInterval(function () {
        if (
            sec === 0 || sec === 1 || sec === 2 ||
            sec === 3 || sec === 4 || sec === 5 ||
            sec === 6 || sec === 7 || sec === 8 ||
            sec === 9
        ) {
            timeValue.textContent = `${min}:0${sec}`;
        } else {
            timeValue.textContent = `${min}:${sec}`;
        }
        sec++;
        if (sec % 60 === 0) {
            sec = 0;
            min++;
        };
    }, 1000);

    shuffleBtn.style.opacity = '1';

    stopBtn.addEventListener('click', () => {
        clearInterval(timer);
        shuffleBtn.disabled = false;
        stopBtn.disabled = true;
        movesValue.textContent = 0;
    });

    btnsSizes.forEach(item => {
        item.addEventListener('click', () => {
            clearInterval(timer);
            movesValue.textContent = '0:00';
            timeValue.textContent = '0:00';
        });
    });

});

stopBtn.addEventListener('click', () => {
    clearInterval(timer);
    timeValue.textContent = '0:00';
    movesValue.textContent = 0;
    loadBtn.disabled = false;
    stopGame.play();
    stopBtn.style.opacity = '1';
    Array.from(document.querySelectorAll('.game__item')).forEach(item => item.style.pointerEvents = 'none');
    timeValue.textContent = timeValue.textContent;
    backgroundMusic.pause();
});

/*  ACTIONS WHEN CLICK ON THE SIZE BUTTONS  */

function changeContentWithClickBtnSize(size, gameList, sizeBtn, functionShuffle, matrix) {
    frameSizeValue.textContent = size;
    gameList.classList.add('show');
    sizeBtn.classList.add('underline');
    functionShuffle(matrix.flat());
}

const btnsSizes = document.querySelectorAll('.btn-size');
const elements = document.querySelectorAll('.game__list');

btnsSizes.forEach(item => item.addEventListener('click', () => {
    btnsSizes.forEach(item => item.classList.remove('underline'));
    elements.forEach(item => item.classList.remove('show'));
    shuffleBtn.disabled = false;
    movesValue.textContent = 0;
}));

sizeBtn_3.addEventListener('click', () => {
    changeContentWithClickBtnSize('3x3', gameList_3, sizeBtn_3, shuffleArray_3, matrix_3)
});
sizeBtn_4.addEventListener('click', () => {
    changeContentWithClickBtnSize('4x4', gameList_4, sizeBtn_4, shuffleArray_4, matrix_4)
});
sizeBtn_5.addEventListener('click', () => {
    changeContentWithClickBtnSize('5x5', gameList_5, sizeBtn_5, shuffleArray_5, matrix_5)
});
sizeBtn_6.addEventListener('click', () => {
    changeContentWithClickBtnSize('6x6', gameList_6, sizeBtn_6, shuffleArray_6, matrix_6)
});
sizeBtn_7.addEventListener('click', () => {
    changeContentWithClickBtnSize('7x7', gameList_7, sizeBtn_7, shuffleArray_7, matrix_7)
});
sizeBtn_8.addEventListener('click', () => {
    changeContentWithClickBtnSize('8x8', gameList_8, sizeBtn_8, shuffleArray_8, matrix_8)
});

/*  AUDIO  */

const win = new Audio('assets/audio/win.mp3');
const move = new Audio('assets/audio/translate.mp3');
const noclick = new Audio('assets/audio/nope.mp3');
const backgroundMusic = new Audio('assets/audio/background.mp3');
const shuffleElements = new Audio('assets/audio/shuffle.mp3');
const stopGame = new Audio('assets/audio/stop.mp3');
const knife = new Audio('assets/audio/hover.mp3');

win.volume = .8;
move.volume = .2;
noclick.volume = .2;
shuffleElements.volume = .2;
stopGame.volume = .2;
knife.volume = .2;

btnsSizes.forEach(item => {
    item.onmouseover = function () {
        knife.play();
    };
});

btns.forEach(item => {
    item.onmouseover = function () {
        knife.play();
    };
});

resultBtn.addEventListener('click', () => {
    setTimeout(function () {
        results.style.top = '0';
        setTimeout(function () {
            results.style.top = '-100%';
        }, 3000)
    }, 200);
});

volumeOn.addEventListener('click', () => {

    backgroundMusic.volume = 0;
    win.volume = 0;
    move.volume = 0;
    noclick.volume = 0;
    shuffleElements.volume = 0;
    stopGame.volume = 0;
    knife.volume = 0;

    volumeOn.style.zIndex = '1'
    volumeAnimation.style.zIndex = '2';
    volumeAnimation.play();
    setTimeout(function () {
        volumeAnimation.style.zIndex = '-1';
        volumeOff.style.zIndex = '2'
    }, 1600)
});

volumeOff.addEventListener('click', () => {
    backgroundMusic.volume = .1;
    win.volume = .8;
    move.volume = .2;
    noclick.volume = .2;
    shuffleElements.volume = .2;
    stopGame.volume = .2;
    knife.volume = .2;

    volumeAnimationReverse.style.zIndex = '2';
    volumeAnimationReverse.play();
    volumeOff.style.zIndex = '-1'
    setTimeout(function () {
        volumeOn.style.zIndex = '2'
        volumeAnimationReverse.style.zIndex = '-1';
    }, 2500)
});

/*  SAVE GAME PROGRESS IN LOCAL STORAGE */

let gameElements = Array.from(document.querySelectorAll('.game__item'));
safeBtn.addEventListener('click', () => {
    loadBtn.disabled = false;
    gameElements.forEach((item, index) => {
        localStorage.setItem(`progress_${index}`, JSON.stringify(item.style.transform));
    });
    localStorage.setItem('matrix_3', JSON.stringify(matrix_3));
    localStorage.setItem('matrix_4', JSON.stringify(matrix_4));
    localStorage.setItem('matrix_5', JSON.stringify(matrix_5));
    localStorage.setItem('matrix_6', JSON.stringify(matrix_6));
    localStorage.setItem('matrix_7', JSON.stringify(matrix_7));
    localStorage.setItem('matrix_8', JSON.stringify(matrix_8));
    localStorage.setItem('time', timeValue.textContent);
    localStorage.setItem('move', movesValue.textContent);
});

loadBtn.addEventListener('click', () => {
    stopBtn.disabled = false;
    loadBtn.disabled = true;
    shuffleBtn.disabled = true;
    clearInterval(timer);
    Array.from(document.querySelectorAll('.game__item')).forEach(item => {
        item.addEventListener('click', () => {
            moveGameElementByClick(e, '.game__list_3', matrix_3, itemNodes_3, 9);
            moveGameElementByClick(e, '.game__list_4', matrix_4, itemNodes_4, 16);
            moveGameElementByClick(e, '.game__list_5', matrix_5, itemNodes_5, 25);
            moveGameElementByClick(e, '.game__list_6', matrix_6, itemNodes_6, 36);
            moveGameElementByClick(e, '.game__list_7', matrix_7, itemNodes_7, 49);
            moveGameElementByClick(e, '.game__list_8', matrix_8, itemNodes_8, 64);
        })
    });
    gameElements.forEach((item, index) => {
        item.style.transform = JSON.parse(localStorage.getItem(`progress_${index}`));
    });
    matrix_3 = JSON.parse(localStorage.getItem('matrix_3'));
    matrix_4 = JSON.parse(localStorage.getItem('matrix_4'));
    matrix_5 = JSON.parse(localStorage.getItem('matrix_5'));
    matrix_6 = JSON.parse(localStorage.getItem('matrix_6'));
    matrix_7 = JSON.parse(localStorage.getItem('matrix_7'));
    matrix_8 = JSON.parse(localStorage.getItem('matrix_8'));
    timeValue.textContent = localStorage.getItem('time');
    movesValue.textContent = localStorage.getItem('move');
    Array.from(document.querySelectorAll('.game__item')).forEach(item => item.style.pointerEvents = 'painted');
    let sec = +timeValue.textContent.split(':')[1] + 1;
    console.log(sec)
    let min = timeValue.textContent.split(':')[0];
    timer = setInterval(function () {
        if (
            sec === 0 || sec === 1 || sec === 2 ||
            sec === 3 || sec === 4 || sec === 5 ||
            sec === 6 || sec === 7 || sec === 8 ||
            sec === 9
        ) {
            timeValue.textContent = `${min}:0${sec}`;
        } else {
            timeValue.textContent = `${min}:${sec}`;
        }
        sec++;
        if (sec % 60 === 0) {
            sec = 0;
            min++;
        };
    }, 1000);
    stopBtn.addEventListener('click', () => {
        clearInterval(timer);
        shuffleBtn.disabled = false;
        stopBtn.disabled = true;
        movesValue.textContent = 0;
    });
});

rulesBtn.addEventListener('click', () => {
    rules.style.top = '0px';
});

rulesCross.addEventListener('click', () => {
    rules.style.top = '-100%';
});