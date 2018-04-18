function checkEmail(email){

    const re =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // Validar email
    if(!re.test(String(email.value).toLowerCase())) { 
        email.setCustomValidity('Debes ingresar un email válido'); 
        return false; 
    }
    // Si todo sale bien, eliminar errores (decretar que es válido)
    email.setCustomValidity('');
}

function checkPhone(phone){
    const check = (/^\d{7,}$/).test(String(phone.value).replace(/[\s()+\-\.]|ext/gi, ''));
    if(!check){
        phone.setCustomValidity('Debes ingresar un telefono válido');
        return false;
    }
    phone.setCustomValidity('');
}

function checkName(name){
    if(!(/^[A-Za-z\s]+$/).test(String(name.value))){
        name.setCustomValidity('Solo puede contener letras y espacios');
        return false;
    }
    name.setCustomValidity('');
}

function checkContent(content){
    if(!(/^[A-Za-z.,\d\s]+$/).test(String(content.value))){
        name.setCustomValidity('Solo puede contener , . letras y números');
        return false;
    }
    name.setCustomValidity('');
}

$(function(){

    const services = {
        'apps':{
            title:'Creamos video juegos y aplicaciones híbridas o para Android',
            desc:'Modernizamos tu flujo de trabajo con tecnología que facilita tu día a día',
            img:'../assets/img/bg-movil.jpg'
        },
        'rrss':{
            title:'Lleva tu marca a una fauna digital',
            desc:'Conéctate comparte, y manda uno que otro emoticon :).',
            img:'../assets/img/bg-fondo.jpg'
        },
        'web':{
            title:'Creamos y administramos sitios web sin mentirle a nadie.',
            desc:'Desde sitios de alto tráfico a pequeñas pymes que quieren darse a conocer.',
            img:'../assets/img/bg-web.jpg'
        },
        'software':{
            title:'Frontend y Backend a tus servicios.',
            desc:'Creamos y desarrollamos tecnología en base a tus necesidades.',
            img:'../assets/img/bg-desarrollo.jpg'
        }

    };

    $('.service').on('click mouseover', function(){
        console.log($(this));
        let description = services[$(this).attr('id')];
        $('#services h3').text(description.title);
        $('#services-desc h4').text(description.desc);
        let newImg = new Image;
        document.body.style.backgroundImage = `url('${description.img}')`;
    });
});