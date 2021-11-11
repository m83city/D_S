var div = document.getElementById('menu-div');
var li = div.getElementsByTagName('li');

for (var i = 0; i < li.length; i++) {

    li[i].addEventListener('click', function (el) {
        
        var currentLi = document.getElementsByClassName('current');
        if (currentLi[0]) {
            currentLi[0].classList = 'menu-item';
        }
        this.classList.add('current');
    });
}