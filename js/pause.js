const SettingsButton = document.querySelector("btn_keysettings");
const navigation = document.querySelector("#Key");

btn_keysettings.addEventListener("click", toggleNav);

function toggleNav() {
  btn_keysettings.classList.toggle("active");
  navigation.classList.toggle("active");
}
