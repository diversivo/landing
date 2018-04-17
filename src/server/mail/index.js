const nodemailer = require('nodemailer');

const transpoter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'daniel@dquinteros.cl',
        pass:'5nilram29!!'
    }
});

function mail(obj){
    const mailOptions = {
        from: obj.email,
        to: 'dquinteros@diversivo.cl', 
        subject: 'Contacto diversivo', 
        html: `<p>Nombre:${obj.name}<br/>Correo:${obj.email}<br/>Telefono:${obj.phone}<br/>Asunto:${obj.idea}</p>`
    };
    return transpoter.sendMail(mailOptions,(err, info)=>err?err:info);  
}

module.exports = mail;