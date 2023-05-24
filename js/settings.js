const SettingsButton = document.querySelector("btn_keysettings");
const navigation = document.querySelector("#Key");
const SoundButton = document.querySelector("btn_sound");
const sound = document.querySelector("#Sound");

btn_keysettings.addEventListener("click", toggleNav);
btn_sound.addEventListener("click", toggleSound);

function toggleNav() {
  btn_keysettings.classList.toggle("active");
  navigation.classList.toggle("active");
}

function toggleSound() {
  btn_sound.classList.toggle("active");
  sound.classList.toggle("active");
}

function rangeSlider(value) {
  document.getElementById("rangeValue").innerHTML = value;
}
