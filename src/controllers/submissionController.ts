import { Request, Response } from 'express';
import client from '../database';

export const submissionCreate = async (req: Request, res: Response) => {
  const { from, to, subject, text, html } = req.body;
  //nodemailer sendEmail() function here

  // res.status(201).send(submission);
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
