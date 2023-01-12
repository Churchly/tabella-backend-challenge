import { Request, Response } from 'express';
import { IEmail, ISubmission } from '../interfaces';
import { sendEmail } from './nodemailerController';
import client from '../database';

export const submissionCreate = async (req: Request, res: Response) => {
  const { subject, text, html } = req.body;

  const emailsList: IEmail[] = await client.db(process.env.DB_NAME).collection('emails').find({ isUnsubscribed: false }).toArray();
  if (emailsList.length === 0) {
    return res.status(404).send('No emails found');
  }

  const mail_config: ISubmission = {
    from: process.env.SMTP_USER,
    to: emailsList.map((email) => email.address),
    subject,
    text
  }
  if (html) mail_config.html = html;

  const sentMail = await sendEmail(mail_config);
  if (!sentMail) {
    return res.status(500).send('Internal server error');
  } else if (sentMail.rejected.length === emailsList.length) {
    return res.status(400).send('All Emails got rejected');
  }

  await client.db(process.env.DB_NAME).collection('submissions').insertOne(mail_config);

  return res.status(201).send(sentMail.accepted);
};

export const submissionList = async (req: Request, res: Response) => {
  try {
    const result = await client.db(process.env.DB_NAME).collection('submissions').find().toArray();

    if (result.length === 0) {
      return res.status(404).send('No submissions found');
    }

    return res.status(200).send(result);
  } catch (err) {
    console.log(err)
    return res.status(500).send('Internal server error');
  }
};
