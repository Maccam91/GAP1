const playWords = ["red","blue","yellow","green","orange","violet","indigo","cat","dog","bird","quick","zebra","loop","Houston","Texas","713","832",
"nine","money","league","challenge","slow","pink","complete","mvp","javaScript"]

const playZone = document.getElementById('playArea')

const promptDisplay = document.getElementById('prompt')

let music = document.getElementById('bgmusic');
music.volume = .05;

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

async function renderNewPrompt() {
 const prompt = await newPrompt(6,playWords)
promptDisplay.innerHTML = ''
prompt.split('').forEach(character => {
  const characterSpan = document.createElement('span')
  characterSpan.innerText = character
  promptDisplay.appendChild(characterSpan)
})
playZone.value= null;
roundsComplete()
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

   let round = 0;
     
   function roundsComplete() {
   round += 1;
   document.getElementById("round").innerHTML='Round   '+round;
   }
   