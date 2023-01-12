import { Request, Response } from 'express';
import { ISubmission } from '../interfaces';

export const submissionCreate = async (req: Request, res: Response) => {
  // const { from, to, subject, text, html } = req.body;

  // const submission: ISubmission = {
  //   from,
  //   to,
  //   subject,
  //   text,
  //   html,
  // };

  // //nodemailer sendEmail() function here

  // submissionMemory.push(submission);

  // res.status(201).send(submission);
};

export const submissionList = async (req: Request, res: Response) => {
  // if (submissionMemory.length === 0) {
  //   return res.status(404).send('No submissions found');
  // }

  // res.status(200).send(submissionMemory);
};
