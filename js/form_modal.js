function _createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin', `

 
        <div class="form__header">
                <h1 class="title">Заповніть форму</h1>
                    <div class="switch">
                <ul class="sitch-box">
                     <li class="switch-item">Фіз. особа</li>
                    <li class="switch-item">Юр. особа</li>
                </ul>
        </div>

        <div class="input-box">
            <div class="input-box__left">
                <div class="input-box__short">
                    <div class="input-box__label">
                        <label for="">Ім’я</label>
                        <input type="text"></div>
                    <div class="input-box__label">
                        <label for="">Фамілія</label>
                        <input type="text"></div>
                </div>
                <div class="input-box__label">                    
                        <div class="input-box__label--long">
                            <label for="">Назва компаніі, організації</label>
                            <input type="text">
                        </div>
                    <a class="logo" href=""> + Логотип</a>
                </div>

                <div class="input-box__label--long">
                        <label for="">Email-адрес</label>
                        <input type="email">
                </div>
                <div class="input-box__label--long">
                    <div class="input-box__label--long">
                        <label for="">Номер телефону</label>
                        <input type="number"></div>
                </div>
            </div>
            <div class="input-box__right">
                <div class="input-box__label--long">
                    <label for="">Країна</label>
                    <input type="text">
                </div>
                <div class="input-box__short">
                    <div class="input-box__label">
                        <label for="">Місто</label>
                        <input type="text"></div>
                    <div class="input-box__label">
                        <label for="">Штат, район</label>
                        <input type="text"></div>
                </div>
                <div class="input-box__label--long">
                    <label for="">Адреса</label>
                    <input type="text">
                </div>
                <div class="input-box__label">
                    <label for="">Поштовий індекс</label>
                    <input type="text"></div>
            </div>
        </div>
        </div>

     <div class="form__juristische">
        <div class="juristische-left">
            <div class="input-box__label--long">
                <label for="">Юридична адреса</label>
                <input type="text">
            </div>
            <div class="input-box__short">
                <div class="input-box__label">
                    <label for="">Найменування банку</label>
                    <input type="text"></div>
                <div class="input-box__label">
                    <label for="">МФО банку</label>
                    <input type="text"></div>
            </div>
            <div class="input-box__label--long">
                <label for="">Розрахунковий рахунок</label>
                <input type="text">
            </div>
        </div>
        <div class="juristische-right">
            <div class="input-box__short">
                <div class="input-box__label">
                    <label for="">ЗКПО</label>
                    <input type="text"></div>
                <div class="input-box__label">
                    <label for="">Тип оподаткування</label>
                    <input type="text"></div>
            </div>
            <div class="input-box__short">
                <div class="input-box__label">
                    <label for="">ІНН</label>
                    <input type="text"></div>
                <div class="input-box__label">
                    <label for="">Система оподаткування</label>
                    <input type="text"></div>
            </div>
            <div class="input-box__short">
                <div class="input-box__label">
                    <label for="">Телефон бугалтерії</label>
                    <input type="text"></div>
                <div class="input-box__label">
                    <label for="">Факс</label>
                    <input type="text"></div>
            </div>  
        </div>
     </div>
     <div class="form__footer">
        <div class="footer__title">
            <h1 class="title">Види допомоги</h1>
            <label for="">Ви можете змінити вид допомоги</label>
        </div>
        <div class="help__menu">
            <ul class="help__type">
                <li class="menu__type-item">
                    <div class="item">
                        <img src="image/modal-help1.svg" alt="">
                        <p>Зробити</p>
                    </div>
                </li>
                <li class="menu__type-item">
                    <div class="item">
                        <img src="image/modal-help2.svg" alt="">
                        <p>Фінансова
                            допомога</p>
                    </div>
                </li>
                <li class="menu__type-item">
                    <div class="item">
                        <img src="image/modal-help3.svg" alt="">
                        <p>Матеріальна
                            допомога</p>
                    </div>
                </li>
                <li class="menu__type-item">
                    <div class="item">
                        <img src="image/modal-help4.svg" alt="">
                        <p>Волонтерство</p>
                    </div>
                </li>
            </ul>
        </div>
        <div class="payment-main">
            <div class="payment-left">
                <label class="payment__text" for=""></label>
                <ul class="payment-table">
                    <li class="payment-items"><img src="" alt=""><label for=""></label></li>
                    <li class="payment-items"><img src="" alt=""><label for=""></label></li>
                    <li class="payment-items"><img src="" alt=""><label for=""></label></li>
                    <li class="payment-items"><img src="" alt=""><label for=""></label></li>
                    <li class="payment-items"><img src="" alt=""><label for=""></label></li>
                    <li class="payment-items"><img src="" alt=""><label for=""></label></li>
                </ul>
            </div>
            <div class="payment-right">
                <label for="">Введіть наступні данні</label>
                <div class="number-text">
                    <label for="">Номер карти</label>
                    <ul class="number-card__box">
                        <li class="item-number__card"></li>
                        <li class="item-number__card"></li>
                        <li class="item-number__card"></li>
                        <li class="item-number__card"></li>
                    </ul>
                </div>
                
                <div class="footer__card">
                    <div class="footer__card-item"><label for="">Термін дії</label><input type="text"></div>
                    <div class="footer__card-item"><label for=""></label>CVC/CVV<input type="text"></div>
                </div>
            </div>
        </div>
        
        </div>
                    <button class="button__help">Допомогти</button>

`)
    document.body.appendChild(modal)
    return modal
}

$.modal = function (options) {
    const ANIMATION_SPEED = 700
    const $modal = _createModal(options)
    return {
        open_form() {
            $modal.classList.add('open')
        },
        close_form() {
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
            }, ANIMATION_SPEED);

        }
    }

}