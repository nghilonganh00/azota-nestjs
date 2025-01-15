import {
  Entity,
  Column,

  OneToMany,
} from 'typeorm';
import { BaseEntity } from 'src/common/mysql/base.entity';
import { IsNotEmpty } from 'class-validator';
import { Exam } from '../exam/exam.entity';

@Entity()
export class Purpose extends BaseEntity {
  @Column({ length: 1 })
  @IsNotEmpty()
  title: string;

  @OneToMany(() => Exam, (exam) => exam.purpose)
  exams: Exam[];
}
