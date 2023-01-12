import { Request, Response } from 'express';
import { IEmail } from '../interfaces';
import client from '../database';

export const emailCreate = async (req: Request, res: Response) => {
  const { address } = req.body;

  try {
    const result = await client.db(process.env.DB_NAME).collection('emails').findOneBy({ address: address });

    if (result) {
      return res.status(400).send('Email already exists');
    }

    const email: IEmail = {
      address,
      isUnsubscribed: false
    };

    await client.db(process.env.DB_NAME).collection('emails').insertOne(email);

    res.status(201).send(email);
  } catch (err) {
    console.log(err)
    return res.status(500).send('Internal server error');
  }
};

export const emailList = async (req: Request, res: Response) => {
  try {
    const result = await client.db(process.env.DB_NAME).collection('emails').find().toArray();

    if (result.length === 0) {
      return res.status(404).send('No emails found');
    }

    return res.status(200).send(result);
  } catch (err) {
    console.log(err)
    return res.status(500).send('Internal server error');
  }
};

export const emailPatch = async (req: Request, res: Response) => {
  const email_id = req.params.id;

  try {
    const result = await client.db(process.env.DB_NAME).collection('emails').findOneBy({ id: email_id });

    if (!result) {
      return res.status(404).send('Email not found');
    } else if (result.isUnsubscribed) {
      return res.status(400).send('Email is already unsubscribed');
    }

    await client.db(process.env.DB_NAME).collection('emails').updateOne({ id: email_id }, { $set: { isUnsubscribed: true } });

    return res.status(200).send('Ok');
  } catch (err) {
    console.log(err)
    return res.status(500).send('Internal server error');
  }
};
