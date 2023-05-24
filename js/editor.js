const exportButton = document.querySelector("#exportButton"); //    bouton d'export
const difficultyButtons = document.querySelectorAll(".difficultyButton"); //  boutons de sélection de difficulté
const addButtons = document.querySelectorAll(".addButton"); //  boutons d'ajout de blocks
const removeLastBlockButton = document.querySelector("#removeLastBlockButton"); // bouton d'effacement du dernier block
const creatorInput = document.querySelector("#creatorInput"); // input pour le nom du créateur
const titleInput = document.querySelector("#titleInput"); //  input pour le titre
const plusButton = document.querySelector("#plusButton"); // bouton pour augmenter le nimbre de blocks à poser
const minusButton = document.querySelector("#minusButton"); // bouton pour diminuer le nombre de blocks à poser
const number = document.querySelector("span"); //  span contenant les données de compte de blocks à poser
const blockText = document.querySelector("#blockText"); // h2 contenant block ou blocks en fonction du count ci-dessus
const clearButton = document.querySelector("#clearButton"); //  bouton pour clear la map actuelle

// map placeholder
let selectedMap = {
  title: "",
  creator: "",
  difficulty: null,
  blocks: [],
};

//  fonction test pour appel des valeurs
function testMap(level) {
  const mapTitle = level.title;
  const mapCreator = level.creator;
  const mapDifficulty = level.difficulty;
  const mapBlocks = level.blocks;
  console.log(mapTitle, mapCreator, mapDifficulty, mapBlocks);
}

//  fonction qui prend une difficultée en entrée et l'assigne à la carte
function selectDifficulty(diff) {
  if (diff <= 5 && diff >= 1) {
    selectedMap.difficulty != diff
      ? (selectedMap.difficulty = diff)
      : (selectedMap.difficulty = null);
  }
  console.log(`Current difficulty is ${selectedMap.difficulty}`);
}

//  fonction qui ajoute un block à la carte en prenant son type ("A", "B", "C") en paramètre
function addMapBlock(type) {
  for (let i = 0; i < parseInt(number.dataset.count); i++) {
    selectedMap.blocks.push({ type: type });
    console.log(
      `New block of type : ${type} added.\n Block Total : ${selectedMap.blocks.length}`
    );
  }
}

//  fonction qui supprime le dernier éléement de la carte
function removeLastBlock() {
  selectedMap.blocks.splice(-1);
  console.log(
    `Last block removed\n ${selectedMap.blocks.length} blocks remaining`
  );
}

//  fonction qui télécharge la carte entrée en paramètre sous le format json
function export2json(dataToConvert) {
  const filename = dataToConvert.title;
  const a = document.createElement("a");
  a.href = URL.createObjectURL(
    new Blob([JSON.stringify(dataToConvert, null, 2)], {})
  );
  a.setAttribute("download", `${filename}.jmpr`);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

//  event listener pour le bouton d'export, voir la fonction ci-dessus
exportButton.addEventListener("click", (e) => {
  if (
    titleInput.value != "" &&
    creatorInput.value != "" &&
    selectedMap.difficulty != null &&
    selectedMap.blocks.length > 0
  ) {
    selectedMap.title = titleInput.value;
    selectedMap.creator = creatorInput.value;
    export2json(selectedMap);
  } else {
    console.log(
      `Impossible d'importer le fichier.\nTitre : ${titleInput.value}\nCréateur : ${creatorInput.value}\nDifficulté : ${selectedMap.difficulty}\nLongueur de la carte : ${selectedMap.blocks.length} blocs.`
    );
  }
});

//  set un event listener pour chaque bouton de difficulté et lui assigne la difficulté correspondante
let difficultyButtonClicked = false;
difficultyButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    var currentButton = document.querySelector(".chosenDifficulty");
    if (difficultyButtonClicked && currentButton != null) {
      console.log(
        `previous selected button was ${currentButton.dataset.difficulty}.`
      );
      if (currentButton != button) {
        currentButton.classList.toggle("chosenDifficulty");
      }
    } else {
      difficultyButtonClicked = true;
    }
    console.log(`Current selected button is ${button.dataset.difficulty}`);
    selectDifficulty(button.dataset.difficulty);
    button.classList.toggle("chosenDifficulty");
  });
});

//  set un event listener pour chaque bouton d'ajout et lui assigne son type
addButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    addMapBlock(button.dataset.type);
  });
});

//  set un event listener pour le bouton d'effacement du dernier bloc
removeLastBlockButton.addEventListener("click", (e) => {
  removeLastBlock();
});

//  Set un event listener pour le bouton qui augmente le nombre de blocks ajoutés
plusButton.addEventListener("click", (e) => {
  var value = parseInt(number.dataset.count);
  if (value == 1) {
    blockText.innerHTML += "s";
  }
  if (value < 10) {
    value += 1;
    number.dataset.count = String(value);
    number.innerHTML = number.dataset.count;
  }
});

//  Set un event listener pour le bouton qui diminue le nombre de blocks ajoutés
minusButton.addEventListener("click", (e) => {
  var value = parseInt(number.dataset.count);
  if (value > 1) {
    value -= 1;
    number.dataset.count = String(value);
    if (value == 1) {
      number.innerHTML = "a";
      blockText.innerHTML = blockText.innerHTML.slice(0, -1);
    } else {
      number.innerHTML = number.dataset.count;
    }
  }
});

clearButton.addEventListener("click", (e) => {
  selectedMap = {
    title: "",
    creator: "",
    difficulty: null,
    blocks: [],
  };
  console.log("Map cleared");
});
