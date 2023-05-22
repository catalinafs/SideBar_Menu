const menu = document.getElementById('Navigation');
document.getElementById('MenuToggle').addEventListener("click", menuExtend);

function menuExtend(evento) {
    menu.classList.toggle('ActiveToggle');
}

let list = document.getElementsByTagName('li');
const arr = Array.from(list);

function activeLink() {
    arr.forEach((item) => item.classList.remove('Active'));
    this.classList.add('Active');
}

arr.forEach((item) => item.addEventListener('click', activeLink));