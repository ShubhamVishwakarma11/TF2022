import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

const mail = async (req: NextApiRequest, res: NextApiResponse) => {
  const userFeedback = JSON.parse(req.body);

  const output = `<h2>New Inquiry: </h2><br>
        <p><strong>Name: </strong> ${userFeedback?.name} </p><br>
        <p><strong>Email: </strong> ${userFeedback?.email} </p><br>
        <p><strong>Message: </strong> ${userFeedback?.message} </p><br>`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass: process.env.PASSWORD, // generated ethereal password
    },
  });

  await new Promise((resolve, reject) => {
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const mailData = {
    from: `"TantraFiesta Website" <${process.env.EMAIL}>`,
    to: `${process.env.EMAIL}`,
    subject: `TF2021 Inquiry by ${userFeedback?.name}`,
    html: output,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });

  res.status(200).json({ status: "OK" });
};

export default mail;
