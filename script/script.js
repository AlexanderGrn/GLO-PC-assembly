const modalWindow = document.querySelector('.modal');
const buttons = document.querySelectorAll('.modal__button');
const modalClose = document.querySelector('.modal__close');
const body = document.querySelector('body');

buttons.forEach(item => {
    item.addEventListener('click', () => {
        modalWindow.style.display = 'flex';
        body.classList.add('noscrol');
        // modalWindow.classList.add('scroll');
    });
});

// Close modalWindow by click outside it borders.
modalWindow.addEventListener('click', (element) => {
    const isModal = element.target.closest('.modal__inner');

    if (!isModal) {
        modalWindow.style.display = 'none';
        body.classList.remove('noscrol');
        // modalWindow.classList.remove('scroll');
    }
});

modalClose.addEventListener('click', () => {
    modalWindow.style.display = 'none';
    body.classList.remove('noscrol');
    // modalWindow.classList.remove('scroll');
});
