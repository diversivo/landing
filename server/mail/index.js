const nodemailer = require('nodemailer');

const host = process.env.EMAIL_HOST;
const sender = process.env.EMAIL_USERNAME;
const password = process.env.EMAIL_PASSWORD;
const receiver = process.env.EMAIL_TARGET;

const transpoter = nodemailer.createTransport({
    service: host,
    auth:{
        user:sender,
        pass:password
    }
});

function mail(obj){
    const mailOptions = {
        from: sender,
        to: receiver, 
        subject: 'Contacto diversivo', 
        html: `<p>Nombre:${obj.name}<br/>Correo:${obj.email}<br/>Telefono:${obj.phone}<br/>Asunto:${obj.idea}</p>`
    };
    return transpoter.sendMail(mailOptions,(err, info)=>err?err:info);  
}

module.exports = mail;