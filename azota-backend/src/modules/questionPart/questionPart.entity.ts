import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/common/mysql/base.entity';
import { IsNotEmpty } from 'class-validator';
import { Exam } from '../exam/exam.entity';
import { Question } from '../question/question.entity';

@Entity()
export class QuestionPart extends BaseEntity {
  @Column()
  @IsNotEmpty()
  title: string;

  @ManyToOne(() => Exam, (exam) => exam.questionParts)
  exam: Exam;

  @OneToMany(() => Question, (question) => question.questionPart)
  questions: Question[];
}
