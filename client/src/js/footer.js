const ftrContainer = document.getElementById('js-footer');
const ftrLogo = new Image();
ftrLogo.src = '/img/svg/diversivo-sticker.svg';

const ftrBlock = `
    <div class="footer__content">
        <div class="footer__box">
            <img class="footer__logo" src="${ftrLogo.src}">
        </div>
    </div>
    `;

ftrContainer.innerHTML = ftrBlock;