// Chronometer.js

class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
    // ... your code goes here
  }
  startClick(printTime) {
  
    this.intervalId = setInterval(()=>{
      this.currentTime++
      // console.log(this.currentTime)
      if (printTime) {
        printTime()
      }
    } , 10)
   
  }
  getMinutes() {
    return Math.floor(this.currentTime/100/60)
    // return Math.floor(this.currentTime/60)
  }
  getSeconds() {
    console.log(Math.floor(this.currentTime/10))
    return Math.floor(this.currentTime/100)
    // return this.currentTime%60
  }
  getMiliseconds() {
    return this.currentTime
  }
  twoDigitsNumber(num) {
    const timeStr = "0" + num;
    return timeStr.slice(-2);
  }
  stopClick() {
    clearInterval(this.intervalId)
  }
  resetClick() {
    this.currentTime = 0
  }
  splitClick() {
    const seconds = this.getSeconds();
    const minutes = this.getMinutes();
    const miliseconds = this.getMiliseconds()

    return this.twoDigitsNumber(minutes) + ":" + this.twoDigitsNumber(seconds) + ":" + this.twoDigitsNumber(miliseconds)  
  }
}
