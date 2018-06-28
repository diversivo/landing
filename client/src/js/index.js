const bgMovil = new Image();
const bgFondo = new Image();
const bgWeb = new Image();
const bgDesarrollo = new Image();

bgMovil.src = '/img/bg-movil.jpg';
bgFondo.src = '/img/bg-fondo.jpg';
bgWeb.src = '/img/bg-web.jpg';
bgDesarrollo.src = '/img/bg-desarrollo.jpg';

const services = {
  'apps': {
    title: 'Creamos video juegos y aplicaciones híbridas o para Android',
    desc: 'Modernizamos tu flujo de trabajo con tecnología que facilita tu día a día',
    img: bgMovil
  },
  'rrss': {
    title: 'Lleva tu marca a una fauna digital',
    desc: 'Conéctate comparte, y manda uno que otro emoticon :).',
    img: bgFondo
  },
  'web': {
    title: 'Creamos y administramos sitios web sin mentirle a nadie.',
    desc: 'Desde sitios de alto tráfico a pequeñas pymes que quieren darse a conocer.',
    img: bgWeb
  },
  'software': {
    title: 'Frontend y Backend a tus servicios.',
    desc: 'Creamos y desarrollamos tecnología en base a tus necesidades.',
    img: bgDesarrollo
  }

};

const serviceClickHandler = (event) => {
  let description = services[event.currentTarget.id];
  document.getElementById('services').firstElementChild.innerHTML = description.title;
  document.getElementById('services-desc').firstElementChild.innerHTML = description.desc;
  document.body.style.backgroundImage = `url('${description.img.src}')`;
};

const servicesArray = Array.from(document.getElementsByClassName('service'))
servicesArray.map((s) => s.addEventListener('click', serviceClickHandler, true));
