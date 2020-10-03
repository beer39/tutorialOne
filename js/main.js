const slider = document.getElementById('slider');
const active = document.getElementById('active');
const liner1 = document.getElementById('liner1');
const liner2 = document.getElementById('liner2');
const liner3 = document.getElementById('liner3');
const liner4 = document.getElementById('liner4');

liner1.onclick = function() {
    slider.style.transform = 'translateX(0)';
    active.style.top = '0';
}
liner2.onclick = function() {
    slider.style.transform = 'translateX(-25%)';
    active.style.top = '31%';
}
liner3.onclick = function() {
    slider.style.transform = 'translateX(-50%)';
    active.style.top = '63%';
}
liner4.onclick = function() {
    slider.style.transform = 'translateX(-75%)';
    active.style.top = '95%';
}


function actionToggle() {
    const action = document.querySelector('.info-icon-text');
    action.classList.toggle('active');
}

function actionToggleInput() {
    const actionInput = document.querySelector('.input-search');
    actionInput.classList.toggle('actionInputOne');
}