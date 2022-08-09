//document.getElementById("count-el").innerText = 5


// let myName = "shweta"
// let greeting = "Hi,my name is "
// let myGreeting = greeting + myName + "!"
// console.log(myGreeting)


// let welcomeEl = document.getElementById("welcome-el")

// let myName = "Shweta"
// let greeting = "Welcome to the store "
 



let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0 
function increment(){
        count += 1  
        countEl.textContent = count
  }

function save() {

      let countStr = count + "-"
       saveEl.textContent += countStr
       countEl.textContent = 0
       count = 0
}

























//let myAge = 18

//console.log(myAge)

//let count = 5*7 
//console.log(count)

//function increment() {
  //  console.log("The button was clicked")
//}


//  let lap1 = 34
//  let lap2 = 33
//  let lap3 = 36

// function logLapTime(){
//        let totalTime = lap1+ lap2 + lap3
//        console.log(totalTime)
// }
// logLapTime()
