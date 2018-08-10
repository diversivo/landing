document.addEventListener("DOMContentLoaded", () => {
  console.log('pollito')
})

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

const bgMovil = new Image();
const bgWeb = new Image();
const bgDesarrollo = new Image();
const circleimgMovil = new Image();
const circleimgWeb = new Image();
const circleimgDesarrollo = new Image();
const handIcon = new Image();
const line = new Image();
const transparente = new Image();

bgMovil.src = '/img/bg-movil.jpg';
bgWeb.src = '/img/bg-web.jpg';
bgDesarrollo.src = '/img/bg-desarrollo.jpg';
circleimgMovil.src = '/img/circle-service-movil.png';
circleimgWeb.src = '/img/circle-service-web.png';
circleimgDesarrollo.src = '/img/circle-service-dev.png';
transparente.src = '/img/fondo-transparente.png';

handIcon.src = '/img/svg/hand.svg';
line.src = '/img/svg/line.svg'

const servicesDesc = document.getElementById('services-desc');

const servicePresentation = 
      `
        <div class="service__text">
            <h1>Conectamos tecnología con experiencias en medios digitales.
            </h1>
            <p>Nuestra filosofía se basa en el trabajo satisfactorio y la felicidad. Por eso tomamos pocos proyectos a la vez: trabajando  de forma intensiva en ellos para profundizar y entregar  soluciones  de calidad y robustas.</p>
        </div>
        <div class="service__img">
             <img class="hand-icon" src="${handIcon.src}" alt="hand icon">
             <img class="line" src="${line.src}" alt="line">
             <div class="service-border-cicle">
                <div class="service-fill-cicle"></div>
             </div>

         </div>

      `;

servicesDesc.innerHTML = servicePresentation;

const services = {
  'apps': {
    title: 'Creamos aplicaciones<br> híbridas para <br>todos los gustos',
    desc: 'Modernizamos tu flujo de trabajo con tecnología que facilita tu día a día',
    bg: bgMovil,
    img: circleimgMovil,
    circle: 'circle-movil',
    imageClass: 'img-movil',
    titleClass: 'title-movil'
  },
  'web': {
    pre: 'Desarrollo y diseño web 2.1',
    title: 'Lleva tus<br> ideas a <br>la web',
    desc: 'Creamos sitios web desde cero, ofrecemos soluciones variadas, desde sitios auto-administrables a SPA, a sitios que requieren mucha mantención y de alto tráfico.',
    note: 'Creamos y administramos sitios web sin mentirle a nadie.',
    bg: bgWeb,
    img: circleimgWeb,
    circle: 'circle-web',
    imageClass: 'img-web',
    titleClass: 'title-web'
  },
  'software': {
    title: 'Frontend <br>y Backend <br>a tus servicios.',
    desc: 'Creamos y desarrollamos tecnología en base a tus necesidades.',
    bg: bgDesarrollo,
    img: circleimgDesarrollo,
    circle: 'circle-desarrollo',
    imageClass: 'img-desarrollo',
    titleClass: 'title-desarrollo'
  }

};

const serviceClickHandler = (event) => {
  let description = services[event.currentTarget.id];
  const info = `
              <div class="services-box">
              <h1 class="${description.titleClass}">${description.title}</h1>
              <img class="${description.imageClass}" src="${description.img.src}">
              <div class="circle ${description.circle}"></div>
              <div class="close__container service-close__container" id="js-service-close">
                  <div class="close__icon"></div>
              </div>
              </div>
              `
  servicesDesc.innerHTML = info;
  document.body.style.backgroundImage = `url('${description.bg.src}')`;

  const closeService = document.getElementById('js-service-close');
  closeService.addEventListener('click', () => {
    servicesDesc.innerHTML = servicePresentation;
    document.body.style.backgroundImage = `url('${transparente.src}')`;
  }) 

};

const servicesArray = Array.from(document.getElementsByClassName('service'))
servicesArray.map((s) => s.addEventListener('click', serviceClickHandler, true));


// cerrar el servicio actual y volver a la presentacion de los servicios



document.getElementById('contacto').addEventListener('submit', (event) => {
  event.preventDefault();
  event.stopPropagation();
  send();
  return false;
});

function send() {
  $('form').find('input', 'textarea');
  let data = $('#campos').serializeArray();
  console.log(data);
  $.ajax({
    type: 'POST',
    url: '/contacto',
    data: data,
    dataType: 'json',
    success: function (res) {
      $('.contact__form').html('');
      let div = $('<div/>');
      div.append('<p>Muchas gracias, nos pondremos en contacto contigo!</p>');
      $('.contact__form').append(div);
    },
    error: function (err) {
      console.log(err);
      $('.contact__form').html('');
      let div = $('<div/>');
      div.append('<p>Ups ocurrió un error, que verguenza por favor vuelve a intentarlo!</p>');
      $('.contact__form').append(div);
    }
  });
}
