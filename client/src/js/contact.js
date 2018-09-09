// Todo lo referente a la vista de contacto, illustraciones, animaciones y validaciones.

const artContact = document.getElementById('js-art-contact')
const artBox = document.createElement('div')
const artBg = new Image();
const artIcon = new Image();
const artLine = new Image();

artBox.className = 'contact__art'

artBg.className = 'contact__bg'
artIcon.className = 'contact__icon'
artLine.className = 'contact__line'

artBg.src = '/img/bg-coffee.png'
artIcon.src = '/img/svg/icon-coffee.svg'
artLine.src = '/img/svg/line-coffee.svg'

artBox.innerHTML = `
        <img src="${artBg.src}" alt="artbg">
        <img src="${artIcon.src}" alt="articon">
        <img src="${artLine.src}" alt="artline">
`



if(artContact){
    artContact.appendChild(artBox)
}

