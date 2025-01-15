import {
  Entity,
  Column,
  BeforeInsert,
  OneToOne,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { BaseEntity } from 'src/common/mysql/base.entity';
import { User } from '../user/user.entity';
import { IsNotEmpty } from 'class-validator';
import { Homework } from '../homework/homework.entity';
import { Student } from '../student/student.entity';
import { HomeworkResultFile } from '../homeworkResultFile/homeworkResultFile.entity';

@Entity()
export class HomeworkResult extends BaseEntity {
  @Column()
  note: string;

  @Column({ default: false })
  isResend: boolean;

  @Column()
  resendMessage: string;

  @Column()
  point: number;

  @Column()
  confirmedAt: Date;

  @ManyToOne(() => Homework, (homework) => homework.homeworkResults)
  homework: Homework;

  @ManyToOne(() => Student, (student) => student.homeworkResults)
  student: Student;

  @OneToMany(() => HomeworkResultFile, (file) => file.homeworkResult)
  files: HomeworkResultFile;
}
