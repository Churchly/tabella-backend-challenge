import { Request, Response } from 'express';
import { IEmail } from '../interfaces';
import client from '../database';

export const emailCreate = async (req: Request, res: Response) => {
  const { address } = req.body;

  // if (emailMemory.find(email => email.address === address)) {
  //   return res.status(400).send('Email already exists');
  // }


  const email: IEmail = {
    address,
    isUnsubscribed: false
  };

  res.status(201).send(email);
};

export const emailList = async (req: Request, res: Response) => {
  // if (emailMemory.length === 0) {
  //   return res.status(404).send('No emails found');
  // }

  // res.status(200).send(emailMemory);
};

export const emailPatch = async (req: Request, res: Response) => {
  // const email_id = req.params.id;

  // const email = emailMemory.find(email => email.id === email_id);

  // if (!email) {
  //   return res.status(404).send('Email not found');
  // }

  // if (email.isUnsubscribed) {
  //   return res.status(400).send('Email is already unsubscribed');
  // }

  // email.isUnsubscribed = true;

  // res.status(200).send();
};
