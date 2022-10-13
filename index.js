const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms)) // sleep function
const phrases = ['design','code', 'watch Netflix'] // words to type
const el = document.getElementById("typewriter") // get the element

// time in ms

let sleepTime = 100 

// index of the current phrase

let curPhraseIndex = 0 

const writeLoop = async () => { 

    let curWord = phrases[curPhraseIndex]

  for (let i = 0; i < curWord.length; i++) // loop through the letters of the current word
   {
    el.textContent += phrases[curPhraseIndex][i] // add a letter
    await sleep(sleepTime) // wait for 100ms
  }
  await sleep(sleepTime * 10) // wait for 1000ms
  for (let i = curWord.length; i >= 0; i--) // loop through the letters of the current word
   {
    el.textContent = el.textContent.slice(0, i) // remove a letter
    await sleep(sleepTime) // wait for 100ms
  }
  curPhraseIndex = (curPhraseIndex + 1) % phrases.length // go to the next word
  await sleep(sleepTime * 5) // wait for 500ms
  writeLoop() // loop
} 

writeLoop() // start the loop
