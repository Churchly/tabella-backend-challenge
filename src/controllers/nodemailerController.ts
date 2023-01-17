import nodemailer from 'nodemailer';
import { ISubmission } from '../interfaces';

import { config } from '../config/smtp';

export const sendEmail = async (mail_config: ISubmission) => {
  const transporter = nodemailer.createTransport({
    service: config.service,
    auth: {
      user: config.user,
      pass: config.pass
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const info = await transporter.sendMail(mail_config);

  return info;
};
