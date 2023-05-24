const MapsButton = document.querySelector("#btn_maps");
const mapContainer = document.querySelector("#mapsList");
const importedButton = document.querySelector("#btn_import");
const importContainer = document.querySelector("#importMenu");

btn_maps.addEventListener("click", toggleMap);
btn_import.addEventListener("click", toggleImported);

function toggleMap() {
  btn_import.classList.toggle("false");
  importContainer.classList.toggle("false");
  importContainer.style.zIndex = "-1";

  btn_maps.classList.toggle("true");
  mapContainer.classList.toggle("true");
  mapContainer.style.zIndex = "1";

  if ((importContainer.classList = "true")) {
    importContainer.classList.toggle("true");
  }
}
function toggleImported() {
  btn_maps.classList.toggle("false");
  mapContainer.classList.toggle("false");
  mapContainer.style.zIndex = "-1";

  btn_import.classList.toggle("true");
  importContainer.classList.toggle("true");
  importContainer.style.zIndex = "1";

  if ((mapContainer.classList = "true")) {
    mapContainer.classList.toggle("true");
  }
}
