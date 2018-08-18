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
