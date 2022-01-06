console.log("JS Loaded")

const playWords = ["red","blue","yellow","green","orange","violet","indigo","cat","dog","bird","quick","zebra","loop","Houston","Texas","713","832",
"nine","money","league","challenge","slow","pink","complete","mvp","javaScript"]
console.log(playWords)

const playZone = document.getElementById('playArea')
console.log(playZone)
playZone.addEventListener('input', () => {
  const arrayPrompt = promptDisplay.querySelectorAll('span')
  const promptValue = playZone.value.split('')
  let correct = true
  arrayPrompt.forEach((characterSpan, index) => {
    const character = promptValue[index]
    if (character == null) {
        characterSpan.classList.remove('correct')
        characterSpan.classList.remove('incorrect')
        correct = false
      } else if (character === characterSpan.innerText) {
        characterSpan.classList.add('correct')
        characterSpan.classList.remove('incorrect')
      } else {
        characterSpan.classList.remove('correct')
        characterSpan.classList.add('incorrect')
        correct = false
      }
    })
    if(correct) renderNewPrompt()
  
})

const promptDisplay = document.getElementById('prompt')
console.log(promptDisplay.innerText)

let music = document.getElementById('bgmusic');
music.volume = .05;

async function renderNewPrompt() {
 const prompt = await newPrompt(3,playWords)
promptDisplay.innerHTML = ''
prompt.split('').forEach(character => {
  const characterSpan = document.createElement('span')
  characterSpan.innerText = character
  promptDisplay.appendChild(characterSpan)
})
playZone.value= null
}

function newPrompt(length,x) {
    let result = [];
        
    for ( let i = 0; i < length; i++ ) {
      const randomWords = (Math.floor(Math.random() * 
 playWords.length));
 result.push(x[randomWords])
   }
   return result.join(' ');
   }
newPrompt(3,playWords)



// function playerInput(){
//     inputArea = playZone.value;
//     inputAreaArray = inputArea.split('');


// }






































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