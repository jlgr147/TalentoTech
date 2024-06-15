/*const express = require("express");
const app =express();
app.get("/", (req,res)=>{
    res.send("Hola hola")
})
const port= 3000
app.listen(port, ()=>{
    console.log("servicio escuchandose en //http:localhost:3000")
})*/
const nodemailer = require("nodemailer");

// Configurar el transporte de nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail", // Aquí puedes especificar el proveedor de correo electrónico que estás utilizando (como 'gmail', 'hotmail', etc.) o puedes utilizar otros métodos de transporte como 'sendmail' o 'smtp'
auth: {
    user: "jlgr147@gmail.com", // Tu dirección de correo electrónico
    pass: "xfyk prtv lrnh bfhl" // Tu contraseña de correo electrónico
},
tls:{
    rejectUnauthorized: false
}
});

// Definir el destinatario, asunto y contenido del correo electrónico
const mailOptions = {
  from: "jlgr147@gmail.com", // Quién está enviando el correo electrónico
  to: "jlgarzon7@gmail.com", // A quién se enviará el correo electrónico
  subject: "Asunto del correo electrónico", // Asunto del correo electrónico
  text: "Contenido del correo electrónico" // Contenido del correo electrónico (en texto sin formato)
  // También puedes usar "html" en lugar de "text" para enviar correo electrónico en formato HTML
};

// Enviar el correo electrónico
transporter.sendMail(mailOptions, function(error, info){
if (error) {
    console.log(error);
} else {
    console.log("Correo electrónico enviado: " + info.response);
}
});
