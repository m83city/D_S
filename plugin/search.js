function _createSearch(options) {
    const search = document.createElement('search')
    search.classList.add('search')
    search.insertAdjacentHTML('afterbegin', `
    
    <div class="searching">
        <div class="search_stroke">
            <label class="search_text" for="">Пошук</label>
            <input class="main_search" type="text">
            <label class="close" onclick="search.close_search()" for="">&times;</label>
        </div>

        
    </div>

    <div class="content-search">
    <div class="project-content__box">
        <h1 class="project__text-title title">Проекти</h1>
        <div class="item__content-text-border">
            <div class="item__content-text">
                <h2 class="title-item title">Діти</h2>
                <div class="item-box__text">
                    <p class="text-item">Для операції на сердце маленькому хлопчику, необхідно зібрати гроші на
                        ліки</p>
                    <p class="text-item">Збираємо гроші на лікування п’ятирічного Василя, який став жертвою ДТП
                    </p>
                </div>
            </div>
            <div class="item__content-text">
                <h2 class="title-item title">Діти</h2>
                <div class="item-box__text">
                    <p class="text-item">Для операції на сердце маленькому хлопчику, необхідно зібрати гроші на
                        ліки</p>
                    <p class="text-item op">Збираємо гроші на лікування п’ятирічного Василя, який став жертвою
                        ДТП </p>
                </div>
            </div>
        </div>
    </div>
    <div class="archive-content__box">
        <h1 class="project__text-title title">Архів</h1>
        <div class="item__content-text-border">
            <div class="item__content-text">
                <h2 class="title-item title">Діти</h2>
                <div class="item-box__text">
                    <p class="text-item">Для операції на сердце маленькому хлопчику, необхідно зібрати гроші на
                        ліки</p>
                    <p class="text-item op">Збираємо гроші на лікування п’ятирічного Василя, який став жертвою ДТП
                    </p>
                </div>
            </div>
            <div class="item__content-text">
                <h2 class="title-item op title">Діти</h2>
                <div class="item-box__text">
                    <p class="text-item op">Для операції на сердце маленькому хлопчику, необхідно зібрати гроші на
                        ліки</p>
                    <p class="text-item op">Збираємо гроші на лікування п’ятирічного Василя, який став жертвою
                        ДТП </p>
                </div>
            </div>
        </div>
    </div>



    
    `)
    document.body.appendChild(search)
    return search
}
$.search = function (options) {
    const ANIMATION_SPEED = 1000
    const $search = _createSearch(options)
    
    return {
        open_search() {
            $search.classList.add('open')
        },
        close_search() {
            $search.classList.remove('open')
            $search.classList.add('hide')

            setTimeout(() => {
                $search.classList.remove('hide')
                $search.classList.remove('hide')
                
            }, ANIMATION_SPEED);

        }
    }
}