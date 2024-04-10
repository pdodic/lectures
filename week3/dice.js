// This is a helpful function to generate a random number from 1 to 6
const pickRandomNumber = function() {
  return Math.floor(Math.random() * 6) + 1;
}

// Your code goes here...
function onDocumentLoaded() {
  //Code here
  const link = document.querySelector("a")
  link.addEventListener("click", rollTheDice)
}

function rollTheDice() {
  console.log("Rolling the dice")
  event.preventDefault()
  let n1 = pickRandomNumber()
  let n2 = pickRandomNumber()
  let images = document.querySelectorAll("#dice img")
  images[0].src = "images/" + n1 + ".png"
  images[1].src = "images/" + n2 + ".png"
}

const appleLink = document.querySelector("#roll")
appleLink.addEventListener("click", onDocumentLoaded)

document.addEventListener("DOMContentLoaded", onDocumentLoaded)