console.log("JS Loaded")

const playWords = ["red","blue","yellow","green","orange","violet","indigo"]
console.log(playWords)

const playZone = document.getElementById('playerzone')
console.log(playZone)

const promptDisplay = document.getElementById('prompt')
console.log(promptDisplay.innerText)

 let newPrompt = [""];
 let promptIndex = 0;

// function promptUp(){
//     promptDisplay.textContent = newPrompt;
//     newPrompt = playWords[promptIndex];
//     newPrompt.split('').forEach(char => {
//         const charSpan = document.createElement('span')
//         charSpan.innerText = char
//         promptDisplay.appendChild(charSpan)
//     })
//     if(newPrompt < playWords.length)
//     newPrompt.push(playWords++)
    
// }

function promptUpdate(){
    promptDisplay.textContent = newPrompt;
    newPrompt = playWords[promptIndex];
    newPrompt.split('').forEach(char => {
        const charSpan = document.createElement('span')
        charSpan.innerText = char
        promptDisplay.appendChild(charSpan)
    })
if (promptIndex < playWords.length -1)
promptIndex++;
else
promptIndex = 0;
}

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