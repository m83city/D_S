function _createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin', `
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, provident,
         ipsa rerum quo, quisquam ea ab doloribus maxime at aut excepturi nesciunt ex dicta ducimus non? Dignissimos,
         facilis sint vero voluptatibus placeat adipisci nulla dolorem facere consequuntur, praesentium perferendis consectetur.</p>
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