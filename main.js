const playWords = ["red","blue","yellow","green","orange","violet","indigo","cat","dog","bird","quick","zebra","loop","Houston","Texas","713","832",
"nine","money","league","challenge","slow","pink","complete","mvp","javaScript","periwinkle","lavender","magic","the","gathering","dungeon",
"dragon","esport","Aatrox","Rengar","Reddit","bang",
"Pokemon","Haunter","Ash","wallet","steam","Epic","CAPS","LOCK","General","Assembly","axolotl","qi","zoolander","QWERTY"
,"shift","enter","command","alt","control","rainbow","2+2","foodie","computer","fish",
"lizard","vapor","wave","Lo-Fi","Michael","SNER","rick","water","fire","air","earth","mutant","witcher","8675309",
"rick","roll","never","gonna","give","you","up","turn","around","and","desert"]

const playZone = document.getElementById('playArea')

const promptDisplay = document.getElementById('prompt')
const startButton = document.getElementById('startGame')
const newRecord = document.getElementById('highScore')


let music = document.getElementById('bgmusic')
music.volume = .025
music.playbackRate= 1

let endMusic = new Audio('music/40 Purrple Cat - Ascent.wav')
endMusic.volume = .05
endMusic.loop = true

let roundTracker = 0

let round = 0

let roundTime = 0

startButton.addEventListener('click', ()=>{
  gameStarting()
  renderNewPrompt()
  setTimeout(() => { gameOver()} , 60000)
  playZone.focus()
})


let counter = document.getElementById('count').innerText

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

  if(correct){renderNewPrompt(); clearTimeout(roundTracker),resetTime()}

  if(correct|false){roundTracker = setTimeout(() => { gameOver()} , 60000);}

})

async function renderNewPrompt() {

const prompt = await newPrompt(round+1,playWords)

promptDisplay.innerHTML = ''

prompt.split('').forEach(character => {

  const characterSpan = document.createElement('span')

  characterSpan.innerText = character

  promptDisplay.appendChild(characterSpan)

})

playZone.value = null;

completedRound()

}

function newPrompt(length,x) {

    let result = [];
        
    for ( let i = 0; i < length; i++ ) {

    const randomWords = (Math.floor(Math.random() * playWords.length)); result.push(x[randomWords])}
    
    return result.join(' ');

   }  
     
function completedRound() {  

   round ++;

   document.getElementById("round").innerHTML='Round '+round;

   }

   function resetTime(){

    if(counter<=60){
  
      document.getElementById('count').innerText=0
    }
  }

  function gameStarting() {
    roundTime = setInterval(() => { document.getElementById('count').innerText++}, 1000)
    document.getElementById('startScreen').style.display='none'  
    document.getElementById('bgmusic').play();

    }

   function gameOver() {
    
    document.getElementById('gameOver').style.display ='block';
    document.getElementById('gameOver').innerText ="Game Over you've reached"+'  '+document.getElementById('round').innerText;
    document.getElementById('bgmusic').muted=true;
    setTimeout(() => {document.getElementById('gameOver').innerText = "refresh the page to play again"}, 5000)
    endMusic.play();
    
  }