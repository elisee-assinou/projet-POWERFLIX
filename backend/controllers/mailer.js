// "use strict";
"use client";

const sendEmail = async (objectMail, next) => {
  try {
    console.log("-------------------------------------Start mail_form");
    console.log(objectMail);
    console.log("-------------------------------------End mail_form");
    const nodemailer = require("nodemailer");

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "vtchanhoun@gmail.com",
        pass: "fthxjrvgunxphwkr",
      },
    });

    const Mail_object_Data = {
      from: "Sacof",
      to: objectMail.body.to,
      subject: "Mail confirmation",
      text: `Suivez le lien suivant pour valider votre compte : http://localhost:5000${Mail_object_Data.body.token}`,
    };

    console.log(Mail_object_Data);
    try {
      const current_mail = transporter.sendMail(Mail_object_Data);
      if (current_mail) {
        console.log(current_mail);
        console.log(current_mail.messageId + " " + current_mail);
        return next(current_mail);
      }
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = sendEmail;
