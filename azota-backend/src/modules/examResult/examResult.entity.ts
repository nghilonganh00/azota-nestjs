import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/common/mysql/base.entity';
import { IsNotEmpty } from 'class-validator';
import { Exam } from '../exam/exam.entity';
import { Student } from '../student/student.entity';

@Entity()
export class ExamResult extends BaseEntity {
  @Column()
  @IsNotEmpty()
  started: Date;

  @Column()
  saved: Date;

  @Column()
  @IsNotEmpty()
  answer: string;

  @ManyToOne(() => Exam, (exam) => exam.examResults)
  exam: Exam;

  @ManyToOne(() => Student, (student) => student.examResults)
  student: Student;
}
