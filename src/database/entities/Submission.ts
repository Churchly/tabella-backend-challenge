import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export default class Submission {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  from: string;

  @Column()
  to: string;

  @Column()
  subject: string;

  @Column()
  text: string;

  @Column()
  html: string;
}
