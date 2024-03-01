export default function contacts(req, res) {

    require('dotenv').config()

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secureConnection: false,
        auth: {
          user: 'jwdcreativehouse.do.not.reply@gmail.com',
          pass: process.env.password,
        },
      })
      const mailData = {
        from: 'jwdcreativehouse.do.not.reply@gmail.com',
        to: 'info@jwdcreativehouse.ca',
        subject: `Message From ${req.body.name}`,
        text:  req.body.subject + req.body.message + " | Sent from: " + req.body.email,
        html: `<div>Subject: ${req.body.subject}<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
       }
       transporter.sendMail(mailData, function (err, info) {
        if(err){
          console.log(err)
          res.status(404).send("error occured");
        }
        else{
          console.log(info)
          res.status(200).send("Message sent successfully.");
      }
      })
      
  }
