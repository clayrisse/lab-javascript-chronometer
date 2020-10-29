//---index.js

const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes()
  printSeconds()
  printMilliseconds()
}

function printMinutes() {
  // ... your code goes here
  let minutes = chronometer.twoDigitsNumber(chronometer.getMinutes())
  minDec.innerHTML = minutes[0]
  minUni.innerHTML = minutes[1]

}

function printSeconds() {
  let seconds = chronometer.twoDigitsNumber(chronometer.getSeconds())
  secDec.innerHTML = seconds[0]
  secUni.innerHTML = seconds[1]
}

// ==> BONUS
function printMilliseconds() {
  let miliseconds = chronometer.twoDigitsNumber(chronometer.getMiliseconds())
  milDec.innerHTML = miliseconds[0]
  milUni.innerHTML = miliseconds[1]
}

function printSplit() {
  const splitList = document.querySelector('#splits')
  const theLi = document.createElement("li")
  const newTime = document.createTextNode(`${chronometer.splitClick()}`)
  theLi.appendChild(newTime)
  splitList.appendChild(theLi)
}

function clearSplits() {
  const splitList = document.querySelector('#splits-container ol')
  const theLi = document.createElement("li")
  console.log(theLi)
  splitList.innerHTML = ``
}

function setStopBtn() {
  btnLeft.innerHTML = 'STOP';
  btnLeft.setAttribute("class", "btn stop")
}

function setSplitBtn() {
  btnRight.innerHTML = 'SPLIT';
  btnRight.setAttribute("class", "btn split")
}

function setStartBtn() {
  btnLeft.innerHTML = 'START';
  btnLeft.setAttribute("class", "btn start")
}

function setResetBtn() {
  btnRight.innerHTML = 'RESET';
  btnRight.setAttribute("class", "btn reset")
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (  btnLeft.innerHTML === 'START') {
    chronometer.startClick(printTime)
    setStopBtn() 
    setSplitBtn()  
 } else if (btnLeft.innerHTML ==='STOP'){
    chronometer.stopClick()
    setStartBtn()
    setResetBtn()
 }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (  btnRight.innerHTML === 'SPLIT') {
    printSplit()
  } else if (  btnRight.innerHTML === 'RESET') {
    chronometer.resetClick();//changes and resets time
    printTime()//reprints time to 00:00
    setResetBtn()
    clearSplits()
  } 
});
