function _createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin', `
    
    <div class="modal-overlay"">
        <span class="modal-close" onclick="modal.close()" >&times;</span>
        <div class="modal-window">
            <h1 class="first-title title-modal">Види допомоги</h1>
            <div class="modal-content">
                <ul class="item-help">
                    <li class="items">
                        <div class="image-text">
                            <img class="img-items" src="image/modal-help1.svg" alt="">
                            <h3 class="title-items title-modal">Зробити</h3>
                        </div>
                        <p class="text">Натискайте цю кнопку,
                            якщо Ви хочете зробити,
                            наприклад: ремонт у 
                            дитячому будинку,
                            складну операцію,
                            побудувати дитячий
                            майданчик або побудувати житло
                            для переселенців і тд.
                            
                            Ця кнопка, для організацій, які можуть взяти на себе відповідальність за увесь проект. </p>
                    </li>
    
                    <li class="items">
                        <div class="image-text">
                            <img class="img-items" src="image/modal-help2.svg" alt="">
                            <h3 class="title-items title-modal">Фінансова
                                допомога</h3>
                        </div>
                        <p class="text">Перераховуйте гроші тим, хто дійсно потребує цього. </p>
                    </li>
    
                    <li class="items">
                        <div class="image-text">
                            <img class="img-items title-modal" src="image/modal-help3.svg" alt="">
                            <h3 class="title-items">Матеріальна  допомога</h3>
                        </div>
                        <p class="text">Зберіть ліки, речі, їжу,
                            іграшки та інше, для тих, кому це необхідно.</p>
                    </li>
    
                    <li class="items">
                        <div class="image-text">
                            <img class="img-items title-modal" src="image/modal-help4.svg" alt="">
                            <h3 class="title-items">Волонтерство</h3>
                        </div>
                        <p class="text">Допоможіть ділом або професійними навичками. 
                            Підтримайте проекти своєю роботою. </p>
                    </li>
                </ul>
            </div>
        </div>
    
    </div>
    `)
    document.body.appendChild(modal)
    return modal
}
function _createModal_form(options) {
    const modal_form = document.createElement('div')
    modal_form.classList.add('vmodal')
    modal_form.insertAdjacentHTML('afterbegin', `
    
    <div class="modal-overlay">
    <span class="modal-close" onclick="modal.close_form ()">&times;</span>
    <div class="modal-window">

        <div class="form__header">
            <h1 class="title_form">Заповніть форму</h1>
            <div class="switch" id="menu-div">
                <ul class="switch-box">
                    <li class="switch-item fiz" onClick="modal.switch_fiz()">Фіз. особа</li>
                    <li class="switch-item yur" onClick="modal.switch_yur()">Юр. особа</li>

                </ul>
            </div>

            <div class="input-box">
                <div class="input-box__left">
                    <div class="input-box__short">
                        <div class="input-box__label">
                            <label for="" class="label__text">Ім’я</label>
                            <input class="input_text" type="text">
                        </div>
                        <div class="input-box__label">
                            <label for="" class="label__text">Фамілія</label>
                            <input class="input_text" type="text">
                        </div>
                    </div>
                    <div class="input-box__label-logo">
                        <div class="input-box__label--long">
                            <label for="" class="label__text">Назва компаніі, організації</label>
                            <input type="text" class="input_text-long">
                        </div>
                        <a href="" class="text__logotipe">+ Логотип</a>
                    </div>

                    <div class="input-box__label--long">
                        <label for="" class="label__text">Email-адрес</label>
                        <input type="email" class="input_text-long">
                    </div>
                    <div class="input-box__label--long">
                        <div class="input-box__label--long">
                            <label for="" class="label__text">Номер телефону</label>
                            <input type="number" class="input_text-long">
                        </div>
                    </div>
                </div>
                <div class="input-box__right">
                    <div class="input-box__label--long">
                        <label for="" class="label__text">Країна</label>
                        <input type="text" class="input_text-long">
                    </div>
                    <div class="input-box__short">
                        <div class="input-box__label">
                            <label for="" class="label__text">Місто</label>
                            <input class="input_text" type="text">
                        </div>
                        <div class="input-box__label">
                            <label for="" class="label__text">Штат, район</label>
                            <input class="input_text" type="text">
                        </div>
                    </div>
                    <div class="input-box__label--long">
                        <label for="" class="label__text">Адреса</label>
                        <input type="text" class="input_text-long">
                    </div>
                    <div class="input-box__label">
                        <label for="" class="label__text">Поштовий індекс</label>
                        <input class="input_text" type="text">
                    </div>
                </div>
            </div>
        </div>

        <div class="form__juristische">
            <div class="juristische-left">
                <div class="input-box__label--long">
                    <label for="" class="label__text">Юридична адреса</label>
                    <input type="text" class="input_text-long">
                </div>
                <div class="input-box__short">
                    <div class="input-box__label">
                        <label for="" class="label__text">Найменування банку</label>
                        <input class="input_text" type="text">
                    </div>
                    <div class="input-box__label">
                        <label for="" class="label__text">МФО банку</label>
                        <input class="input_text" type="text">
                    </div>
                </div>
                <div class="input-box__label--long">
                    <label for="" class="label__text">Розрахунковий рахунок</label>
                    <input type="text" class="input_text-long">
                </div>
            </div>
            <div class="juristische-right">
                <div class="input-box__short">
                    <div class="input-box__label">
                        <label for="" class="label__text">ЗКПО</label>
                        <input class="input_text" type="text">
                    </div>
                    <div class="input-box__label">
                        <label for="" class="label__text">Тип оподаткування</label>
                        <input class="input_text" type="text">
                    </div>
                </div>
                <div class="input-box__short">
                    <div class="input-box__label">
                        <label for="" class="label__text">ІНН</label>
                        <input class="input_text" type="text">
                    </div>
                    <div class="input-box__label">
                        <label for="" class="label__text">Система оподаткування</label>
                        <input class="input_text" type="text">
                    </div>
                </div>
                <div class="input-box__short">
                    <div class="input-box__label">
                        <label for="" class="label__text">Телефон бугалтерії</label>
                        <input class="input_text" type="text">
                    </div>
                    <div class="input-box__label">
                        <label for="" class="label__text">Факс</label>
                        <input class="input_text" type="text">
                    </div>
                </div>
            </div>
        </div>
        <div class="form__footer">
            <div class="footer__title">
                <h1 class="title_form">Види допомоги</h1>
                <label for="" class="label__text-footer">Ви можете змінити вид допомоги</label>
            </div>
            <div class="help__menu">
                <ul class="help__type">
                    <li class="menu__type-item" onclick="modal.todo()">
                        <div class="item-menu_type">
                            <img class="menu__type-item-img todo" src="image/modal-help1.svg" alt="">
                            <p class="label_item-menu">Зробити</p>
                        </div>
                    </li>
                    <li class="menu__type-item" onclick="modal.finance_help()">
                        <div class="item-menu_type">
                            <img class="menu__type-item-img finance_help" src="image/modal-help2.svg" alt="">
                            <p class="label_item-menu">Фінансова
                                допомога</p>
                        </div>
                    </li>
                    <li class="menu__type-item">
                        <div class="item-menu_type" onclick="modal.material_help()">
                            <img class="menu__type-item-img material_help" src="image/modal-help3.svg" alt="">
                            <p class="label_item-menu">Матеріальна
                                допомога</p>
                        </div>
                    </li>
                    <li class="menu__type-item">
                        <div class="item-menu_type" onclick="modal.volontier()">
                            <img class="menu__type-item-img volontier" src="image/modal-help4.svg" alt="">
                            <p class="label_item-menu">Волонтерство</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="payment-main">
                <div class="payment-left">
                    <label class="payment__text" for=""></label>
                    <ul class="payment-table">
                        <li class="payment-items visa-card" onclick="modal.visa()"><img src="image/visa.svg" alt=""><label
                                for="" class="label__text-payment">Карта Visa/MasterCard</label></li>
                        <li class="payment-items privat-card" onclick="modal.privat()"><img src="image/privat.svg" alt=""><label
                                for="" class="label__text-payment">Приват24</label></li>
                        <li class="payment-items terminal-card" onclick="modal.terminal()"><img src="image/terminal.svg"
                                alt=""><label for="" class="label__text-payment">Термінали України</label></li>
                        <li class="payment-items web-card" onclick="modal.webMoney()"><img src="image/webmoney.svg"
                                alt=""><label for="" class="label__text-payment">WebMoney</label></li>
                        <li class="payment-items pay-card" onclick="modal.payPal()"><img src="image/paypal.svg" alt=""><label
                                for="" class="label__text-payment">PayPal</label></li>
                        <li class="payment-items bank-card" onclick="modal.bank()"><img src="image/bank.svg" alt=""><label
                                for="" class="label__text-payment">Банковський переказ</label></li>
                    </ul>
                </div>
                <div class="payment-right">
                    <label for="" class="label__text">Введіть наступні данні</label>
                    <div class="card">
                        <div class="number-text">
                            <label for="" class="label__text-number__card">Номер карти</label>
                            <ul class="number-card__box">
                                <li class="item-number__card"><input class="number__card-input" type="text"> </li>
                                <li class="item-number__card"><input class="number__card-input" type="text"> </li>
                                <li class="item-number__card"><input class="number__card-input" type="text"> </li>
                                <li class="item-number__card"><input class="number__card-input" type="text"> </li>
                            </ul>
                        </div>
                        <div class="footer__card">
                            <div class="footer__card-item">
                                <label for="" class="label__on-card">Термін дії</label>
                                <input class="number__card" type="text">
                            </div>
                            <div class="footer__card-item">
                                <label for="" class="label__on-card">CVC/CVV</label>
                                <input class="number__card" type="text">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <button class="button__help">Допомогти</button>

    </div>

</div>
    `)
    document.body.appendChild(modal_form)
    return modal_form
}

$.modal = function (options) {
    const ANIMATION_SPEED = 1000
    const $modal = _createModal(options)
    const $modal_form = _createModal_form(options)
    return {
        open() {
            $modal.classList.add('open')
        },
        close() {
            $modal.classList.remove('open')
            $modal.classList.add('hide')

            setTimeout(() => {
                $modal.classList.remove('hide')
                $modal_form.classList.remove('hide')
                //$modal.parentNode.removeChild($modal)
            }, ANIMATION_SPEED);

        },
        open_form() {
            $modal_form.classList.add('open')
            $modal_form.classList.add('switch_on_fiz')
            $modal_form.classList.add('todo')
            $modal_form.classList.add('visa')
        },
        close_form() {
            $modal_form.classList.remove('open')
            $modal_form.classList.add('hide')
            setTimeout(() => {
                $modal_form.classList.remove('hide')
                //$modal_form.parentNode.removeChild($modal_form)
            }, ANIMATION_SPEED);
        },
        switch_fiz() {
            $modal_form.classList.remove('switch_on_yur')
            $modal_form.classList.add('switch_on_fiz')
        },
        switch_yur() {
            $modal_form.classList.remove('switch_on_fiz')
            $modal_form.classList.add('switch_on_yur')
        },
        //start switch type help
        todo(){
            $modal_form.classList.remove('material_help')
            $modal_form.classList.remove('volontier')
            $modal_form.classList.remove('finance_help')
            $modal_form.classList.add('todo')
        },
        finance_help(){
            $modal_form.classList.remove('todo')
            $modal_form.classList.remove('volontier')
            $modal_form.classList.remove('material_help')
            $modal_form.classList.add('finance_help')
        },
        material_help(){
            $modal_form.classList.remove('todo')
            $modal_form.classList.remove('volontier')
            $modal_form.classList.remove('finance_help')
            $modal_form.classList.add('material_help')
        },
        volontier(){
            $modal_form.classList.remove('todo')
            $modal_form.classList.remove('material_help')
            $modal_form.classList.remove('finance_help')
            $modal_form.classList.add('volontier')
        },
        visa(){$modal_form.classList.add('visa')
        $modal_form.classList.remove('privat')
        $modal_form.classList.remove('terminal')
        $modal_form.classList.remove('webMoney')
        $modal_form.classList.remove('payPal')
        $modal_form.classList.remove('bank')
        },
        privat(){$modal_form.classList.add('privat')
        $modal_form.classList.remove('visa')
        $modal_form.classList.remove('terminal')
        $modal_form.classList.remove('webMoney')
        $modal_form.classList.remove('payPal')
        $modal_form.classList.remove('bank')
    },
        terminal(){$modal_form.classList.add('terminal')
        $modal_form.classList.remove('privat')
        $modal_form.classList.remove('visa')
        $modal_form.classList.remove('webMoney')
        $modal_form.classList.remove('payPal')
        $modal_form.classList.remove('bank')
    },
        webMoney(){$modal_form.classList.add('webMoney')
        $modal_form.classList.remove('privat')
        $modal_form.classList.remove('terminal')
        $modal_form.classList.remove('visa')
        $modal_form.classList.remove('payPal')
        $modal_form.classList.remove('bank')
    },
        payPal(){$modal_form.classList.add('payPal')
        $modal_form.classList.remove('privat')
        $modal_form.classList.remove('terminal')
        $modal_form.classList.remove('visa')
        $modal_form.classList.remove('webMoney')
        $modal_form.classList.remove('bank')
    },
        bank(){$modal_form.classList.add('bank')
        $modal_form.classList.remove('privat')
        $modal_form.classList.remove('terminal')
        $modal_form.classList.remove('visa')
        $modal_form.classList.remove('webMoney')
        $modal_form.classList.remove('payPal')
    }





    }

}
