let startchrono = false;
var timer_counter = 0;
var refresh_time = 1000;

const cactus = document.querySelector("#cactus");
const helico = document.querySelector("#helico");
const background = document.querySelector("#background");

function moveBlock() {
  if (!background.classList.contains("backgroundAnimation")) {
    background.classList.add("backgroundAnimation");
  }

  if (!cactus.classList.contains("moveCactus")) {
    cactus.classList.add("moveCactus");
  }

  if (!helico.classList.contains("moveHelico")) {
    helico.classList.add("moveHelico");
  }
}

const dino = document.querySelector("#dino");

document.addEventListener("keyup", (event) => {
  dinoJump(event);
  //time(event);
});

document.addEventListener("keydown", (event) => {
  if (!startchrono) {
    startchrono = true;
  }
  console.log("DOWN DETECTED");
  dinoDown(event);
  moveBlock();
  // time();
});

function dinoJump(event) {
  if (!(event.code === "Space")) {
    return;
  }
  if (!dino.classList.contains("jump") && !dino.classList.contains("down")) {
    document.getElementById("dino").setAttribute("src", "/img/Jump.png");
    dino.classList.remove("down");
    dino.classList.add("jump");
    setTimeout(function () {
      dino.classList.remove("jump");
      document.getElementById("dino").setAttribute("src", "/img/Run.png");
    }, 2000);
  }
}

function pause(event) {
  if (!(event.code === "KeyP")) {
    startchrono = false;
  }
}

function dinoDown(event) {
  if (!(event.code === "KeyS")) {
    return;
  }
  if (!dino.classList.contains("down") && !dino.classList.contains("jump")) {
    document.getElementById("dino").setAttribute("src", "/img/Dirft.png");
    dino.classList.remove("jump");
    dino.classList.add("down");
    setTimeout(function () {
      dino.classList.remove("down");
      document.getElementById("dino").setAttribute("src", "/img/Run.png");
    }, 2000);
  }
}

function isCrashed() {
  let dinoPosition = dino.getBoundingClientRect();
  let cactusPosition = cactus.getBoundingClientRect();
  let helicoPosition = helico.getBoundingClientRect();

  console.log({
    helicoBottom: helicoPosition.bottom,
    dinoTop: dinoPosition.top,
    cactusTop: cactusPosition.top,
    dinoBottom: dinoPosition.bottom,
  });

  let cactusHit =
    dinoPosition.right > cactusPosition.left &&
    dinoPosition.left < cactusPosition.right &&
    dinoPosition.bottom > cactusPosition.top;

  let helicoHit =
    dinoPosition.right > helicoPosition.left &&
    dinoPosition.left < helicoPosition.right &&
    dinoPosition.top > helicoPosition.bottom + 100;

  console.log({ cactusHit, helicoHit });
  //console.log({dinoPosition,cactusPosition,helicoPosition})

  return cactusHit || helicoHit;
}

document.getElementById("t").innerHTML = timer_counter;

console.log(timer_counter);

function updateTimer() {
  if (startchrono) {
    if (!background.classList.contains("backgroundAnimation")) {
      background.classList.add("backgroundAnimation");
    }
    timer_counter++;
    document.getElementById("t").innerHTML = timer_counter;

    if (timer_counter >= 300) {
      startchrono = false;
      alert("WIN !");
      background.classList.remove("backgroundAnimation");
      history.back();

      // gerer le prochain niveau
    } else if (isCrashed()) {
      alert("Game Over!");
      timer_counter = 0;
      document.getElementById("t").innerHTML = 0;
      background.classList.remove("backgroundAnimation");
      history.back();
    }
  }
}

setInterval(updateTimer, refresh_time);

const navigation = document.querySelector("#menu");

document.onkeydown = function (evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ("key" in evt) {
    isEscape = evt.key === "p";
  } else {
    isEscape = evt.keyCode === 27;
  }
  if (isEscape) {
    navigation.classList.toggle("active");
  }
};

// function readFile(input) {
//     let file = input.files[0];
//     let fileReader = new FileReader();
//     fileReader.readAsText(file);
//     fileReader.onload = function() {
//       alert(fileReader.result);
//     };
//     fileReader.onerror = function() {
//       alert(fileReader.error);
//     };
//   }

//   let myHeaders = new Headers();
//   myHeaders.append("Content-Type", "text/plain");

//   let myInit = { method: 'GET',
//                  headers: myHeaders,
//                  mode: 'cors',
//                  cache: 'default' };

//     const defaultMapList = [
//         "/maps/test.jmpr",

//     ];

//     if (typeof(localStorage["files"])==="undefined"){
//         localStorage["files"] = "[]";

//         let files = JSON.parse(localStorage["files"]);
//         for(let i in defaultMapList){
//             let currentFileName = defaultMapList[i];
//             let resp = await fetch(currentFileName,myInit)
//             let obj = {name:await file.name, data: await resp.text()};
//             files.push(obj);
//             localStorage["files"] = JSON.stringify(files)
//         }
//     }

//     console.log(localStorage["files"]);

innerHTML(URL("img/Bush2.png"));
