import { Entity, Column, BeforeInsert, OneToOne, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/common/mysql/base.entity';
import { User } from '../user/user.entity';
import { IsNotEmpty } from 'class-validator';
import { HomeworkResult } from '../homeworkResult/homeworkResult.entity';

@Entity()
export class HomeworkResultFile extends BaseEntity {
  @Column()
  title: string;

  @Column()
  @IsNotEmpty()
  link: string;

  @ManyToOne(() => HomeworkResult, (homeworkResult) => homeworkResult.files)
  homeworkResult: HomeworkResult;
}
