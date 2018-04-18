const nodemailer = require('nodemailer');

const transpoter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'jdelpozo@diversivo.cl',
        pass:'Vision531'
    }
});

function mail(obj){
    const mailOptions = {
        from: 'jdelpozo@diversivo.cl',
        to: 'hola@diversivo.cl', 
        subject: 'Contacto diversivo', 
        html: `<p>Nombre:${obj.name}<br/>Correo:${obj.email}<br/>Telefono:${obj.phone}<br/>Asunto:${obj.idea}</p>`
    };
    return transpoter.sendMail(mailOptions,(err, info)=>err?err:info);  
}

module.exports = mail;