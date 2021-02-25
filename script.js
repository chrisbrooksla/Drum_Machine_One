const data = {
  A: { name: "Deep Verb", sound: "./sounds/deep verb hit 2.wav" },
  S: { name: "Hit Verb", sound: "./sounds/hit and verb.wav" },
  D: { name: "Huge Verb", sound: "./sounds/huge verb hit.wav" },
  F: { name: "Metal Verb", sound: "./sounds/metallic verb hit 5.wav" },
  G: { name: "Verb Hit1", sound: "./sounds/verb hit 1.wav" },
  H: { name: "Verb Roar", sound: "./sounds/verb hit roar.wav" },
  J: { name: "Verb Hit2", sound: "./sounds/verb hit.wav" },
  K: { name: "Verb Metal", sound: "./sounds/verb metallic hit.wav" },
};

const drumKit = document.getElementById("drumkit");

function construct() {
  for (let key in data) {
    let drumEl = document.createElement("div");
    drumEl.classList.add("drum");
    let h2 = document.createElement("h2");
    h2.textContent = key;
    let span = document.createElement("span");
    span.textContent = data[key].name;
    drumEl.appendChild(h2);
    drumEl.appendChild(span);
    drumkit.appendChild(drumEl);
    data[key].el = drumEl;

    drumEl.addEventListener('click', function(event){
      let key = event.currentTarget.querySelector('h2').textContent;
      playDrum(key);
    });

  }
}

function playDrum(key){
  let audio = new Audio();
  audio.src = data[key].sound;
  audio.play();

  data[key].el.style.webkitAnimation = 'drum-animation 0.3s';
  data[key].el.style.animation = 'drum-animation 0.3s';

  data[key].el.addEventListener('webkitAnimationEnd', removeAnimation);
  data[key].el.addEventListener('animationEnd', removeAnimation);
}

function removeAnimation(event){
  event.currentTarget.style.webkitAnimation = 'none';
  event.currentTarget.style.animation = 'none';
}


function handleKeyEvents(event){
  playDrum(event.key.toUpperCase());
}


construct();

window.addEventListener('keydown', handleKeyEvents);
