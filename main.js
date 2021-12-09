// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];

keys.forEach(function (key) {
  notes.push(document.getElementById(key));
})


// Write named functions that change the color of the keys below
function keyPlay(event) {
  event.style.backgroundColor = 'yellow';
}

function keyReturn(event) {
  event.style.backgroundColor = '';
}


//Testing key events for document

document.onkeydown = keyBoardDown;
document.onkeyup = keyBoardUp;

function keyBoardDown(event) {
  let myKey = event.code;

  switch (myKey) {
    case 'KeyA':
      keyPlay(notes[0]);
      break;
    case 'KeyS':
      keyPlay(notes[1]);
      break;
    case 'KeyD':
      keyPlay(notes[2]);
      break;
    case 'KeyF':
      keyPlay(notes[3]);
      break;
    case 'KeyG':
      keyPlay(notes[4]);
      break;
    case 'KeyH':
      keyPlay(notes[5]);
      break;
    case 'KeyJ':
      keyPlay(notes[6]);
      break;
    case 'KeyK':
      keyPlay(notes[7]);
      break;
    case 'KeyW':
      keyPlay(notes[8]);
      break;
    case 'KeyE':
      keyPlay(notes[9]);
      break;
    case 'KeyR':
      keyPlay(notes[10]);
      break;
    case 'KeyT':
      keyPlay(notes[11]);
      break;
    case 'KeyY':
      keyPlay(notes[12]);
      break;
    default:
      break;
  }
}

function keyBoardUp(event) {

  let myKey = event.code;

  switch (myKey) {
    case 'KeyA':
      keyReturn(notes[0]);
      break;
    case 'KeyS':
      keyReturn(notes[1]);
      break;
    case 'KeyD':
      keyReturn(notes[2]);
      break;
    case 'KeyF':
      keyReturn(notes[3]);
      break;
    case 'KeyG':
      keyReturn(notes[4]);
      break;
    case 'KeyH':
      keyReturn(notes[5]);
      break;
    case 'KeyJ':
      keyReturn(notes[6]);
      break;
    case 'KeyK':
      keyReturn(notes[7]);
      break;
    case 'KeyW':
      keyReturn(notes[8]);
      break;
    case 'KeyE':
      keyReturn(notes[9]);
      break;
    case 'KeyR':
      keyReturn(notes[10]);
      break;
    case 'KeyT':
      keyReturn(notes[11]);
      break;
    case 'KeyY':
      keyReturn(notes[12]);
      break;
    default:
      break;
  }
}





// Write a named function with event handler properties
function keyEventHandler(note) {

  note.onmousedown = function () {
    keyPlay(note);
  }
  note.onmouseup = function () {
    keyReturn(note);
  }


  // switch(noteId){
  //   /*case 'c-key': note.keydown = function */ 

  // }


}


// Write a loop that runs the array elements through the function
notes.forEach(keyEventHandler);

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

//These variables store the notes under the lyrics
let noteOne = document.getElementById('letter-note-one');
let noteTwo = document.getElementById('letter-note-two');
let noteThree = document.getElementById('letter-note-three');
let noteFour = document.getElementById('letter-note-four');
let noteFive = document.getElementById('letter-note-five');
let noteSix = document.getElementById('letter-note-six');

//These variable store the words of the lyrics
let wordOne = document.getElementById('word-one');
let wordTwo = document.getElementById('word-two');
let wordThree = document.getElementById('word-three');
let wordFour = document.getElementById('word-four');
let wordFive = document.getElementById('word-five');
let wordSix = document.getElementById('word-six');


// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;

// Write anonymous event handler property and function for the first progress button
nextOne.onclick = function () {
  nextOne.hidden = true;
  nextTwo.hidden = false;

  noteFive.innerHTML = 'D';
  noteSix.innerHTML = 'C';
}

// Write anonymous event handler property and function for the second progress button
nextTwo.onclick = function () {
  nextTwo.hidden = true;
  nextThree.hidden = false;

  wordFive.innerHTML = 'DEAR';
  wordSix.innerHTML = 'FRI-';

  lastLyric.style.display = 'inline-block';

  noteThree.innerHTML = 'G';
  noteFour.innerHTML = 'E';
  noteFive.innerHTML = 'C';
  noteSix.innerHTML = 'B';
}

// Write anonymous event handler property and function for the third progress button
nextThree.onclick = function () {
  nextThree.hidden = true;
  startOver.hidden = false;

  wordOne.innerHTML = 'HAP-';
  wordTwo.innerHTML = 'PY';
  wordThree.innerHTML = 'BIRTH';
  wordFour.innerHTML = 'DAY';
  wordFive.innerHTML = 'TO';
  wordSix.innerHTML = 'YOU!';

  noteOne.innerHTML = 'F';
  noteTwo.innerHTML = 'F';
  noteThree.innerHTML = 'E';
  noteFour.innerHTML = 'C';
  noteFive.innerHTML = 'D';
  noteSix.innerHTML = 'C';

  lastLyric.style.display = 'none';
}

// This is the event handler property and function for the startOver button
startOver.onclick = function () {
  nextOne.hidden = false;
  startOver.hidden = true;
  wordOne.innerHTML = 'HAP-';
  noteOne.innerHTML = 'G';
  wordTwo.innerHTML = 'PY';
  noteTwo.innerHTML = 'G';
  wordThree.innerHTML = 'BIRTH-';
  noteThree.innerHTML = 'A';
  wordFour.innerHTML = 'DAY';
  noteFour.innerHTML = 'G';
  wordFive.innerHTML = 'TO';
  noteFive.innerHTML = 'C';
  wordSix.innerHTML = 'YOU!';
  noteSix.innerHTML = 'B';
}