function _createModal(options){
    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin', `
    
    <div class="modal-overlay">
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

$.modal = function(options){
    const $modal = _createModal(options)
    return{
        open(){
            $modal.classList.add('open')
        },
        close(){
            $modal.classList.remove('open')

        }
    }
    
}