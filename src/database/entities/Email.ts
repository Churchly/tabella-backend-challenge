import { Entity, ObjectIdColumn, ObjectID, Column, Unique } from 'typeorm';

@Entity()
@Unique(['address'])
export default class Email {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  address: string;

  @Column()
  isUnsubscribed: boolean;
}
