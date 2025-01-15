import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/common/mysql/base.entity';
import { IsNotEmpty } from 'class-validator';
import { Exam } from '../exam/exam.entity';
import { Option } from '../option/option.entity';
import { QuestionPart } from '../questionPart/questionPart.entity';

@Entity()
export class Question extends BaseEntity {
  @Column()
  @IsNotEmpty()
  scorePerQuestion: number;

  @Column()
  @IsNotEmpty()
  rawIndex: number;

  @Column()
  @IsNotEmpty()
  topic: string;

  @Column()
  type: string;

  @Column()
  method: string;

  @Column()
  explain: string;

  @ManyToOne(() => Exam, (exam) => exam.questions)
  exam: Exam;

  @OneToMany(() => Option, (option) => option.question)
  options: Option[];

  @ManyToOne(() => QuestionPart, (questionPart) => questionPart.questions)
  questionPart: QuestionPart;
}
