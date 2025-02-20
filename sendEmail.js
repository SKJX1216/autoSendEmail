const nodemailer = require('nodemailer');
const { user, pass } = require('./config');

const sendMail = async (data) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.163.com',
    port: '25',
    secureConnection: true,
    auth: {
      user,
      pass,
    }
  });

  data.from = `"${data.from}" ${user}`;

  await transporter.sendMail(data);
};

module.exports = sendMail;
