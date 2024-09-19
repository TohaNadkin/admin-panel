import { BaseEntity, Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity()
export class Message extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  content: string;

  @Column()
  messageIds: { chatId: number; msgId: number }[];

  @Column()
  sendetAt: Date;
}
