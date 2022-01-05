console.log("JS Loaded")

const playWords = ["red","blue","yellow","green","orange","violet","indigo"]
console.log(playWords)

const playZone = document.getElementById('playerzone')
console.log(playZone)

const promptDisplay = document.getElementById('prompt')
console.log(promptDisplay.innerText)

let music = document.getElementById('bgmusic');
music.volume = .05;

function newPrompt(length,x) {
    let result = [];
        
    for ( let i = 0; i < length; i++ ) {
      const randomWords = (Math.floor(Math.random() * 
 playWords.length));
 result.push(x[randomWords])
   }
   return result.join(',');
   }
newPrompt(3,playWords)


function playerInput(){
    inputArea = playZone.value;
    inputAreaArray = inputArea.split('');


}






































// const startButton = document.getElementById('start')
// console.log(startButton)
// startButton.addEventListener('click',startGame())
// function startGame() {
//   console.log("start");
//   if(startButton.style.display === "none") {
//       startButton.style.display = "block";
//   } else {
//       startButton.style.display = "none";
//   }
//  playZone.style.display === "block";
// }