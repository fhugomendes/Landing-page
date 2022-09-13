function clickMenu() {
  const menu = document.querySelector("#menu");
  if (menu.classList == "") {
    document.getElementById('menu-icon').innerHTML = '✖'
    menu.classList.add("close-menu");
    menu.style.display = "flex";
  } else {
    menu.classList.remove("close-menu");
    menu.style.display = "none";
    document.getElementById('menu-icon').innerHTML = '≡'
  }
}

function closeMenu() {
    const list = document.getElementById('list')
    if (document.getElementById('menu').classList == 'close-menu') {
        menu.style.display = "none";
        document.getElementById('menu-icon').innerHTML = '≡'
        document.getElementById('menu').classList = ''
    }
}