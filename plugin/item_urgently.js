let dive = document.getElementById('list-box')
let lie = dive.getElementsByTagName('li');

for (var i = 0; i < lie.length; i++) {

    lie[i].addEventListener('click', function (el) {
        
        let currentLie = document.getElementsByClassName('current__item');
        if (currentLie[0]) {
            currentLie[0].classList = 'items';
        }
        this.classList.add('current__item');
    });
}