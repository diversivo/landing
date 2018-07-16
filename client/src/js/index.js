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

const servWeb = new Image();

bgMovil.src = '/img/bg-movil.jpg';
bgWeb.src = '/img/bg-web.jpg';
bgDesarrollo.src = '/img/bg-desarrollo.jpg';

servWeb.src = '/img/circle-service-web.png';

const services = {
  'apps': {
    title: 'Creamos video juegos y aplicaciones híbridas o para Android',
    desc: 'Modernizamos tu flujo de trabajo con tecnología que facilita tu día a día',
    bg: bgMovil
  },
  'web': {
    pre: 'Desarrollo y diseño web 2.1',
    title: 'Lleva tus ideas a la web',
    desc: 'Creamos sitios web desde cero, ofrecemos soluciones variadas, desde sitios auto-administrables a SPA, a sitios que requieren mucha mantención y de alto tráfico.',
    note: 'Creamos y administramos sitios web sin mentirle a nadie.',
    bg: bgWeb,
    img: servWeb
  },
  'software': {
    title: 'Frontend y Backend a tus servicios.',
    desc: 'Creamos y desarrollamos tecnología en base a tus necesidades.',
    bg: bgDesarrollo
  }

};

const serviceClickHandler = (event) => {
  let description = services[event.currentTarget.id];
  let servicesDesc = document.getElementById('services-desc');

  document.getElementById('services').firstElementChild.innerHTML = description.title;
  servicesDesc.firstElementChild.innerHTML = description.desc;
  servicesDesc.innerHTML = `<img src="${description.img.src}">`;
  document.body.style.backgroundImage = `url('${description.bg.src}')`;
};

const servicesArray = Array.from(document.getElementsByClassName('service'))
servicesArray.map((s) => s.addEventListener('click', serviceClickHandler, true));





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
