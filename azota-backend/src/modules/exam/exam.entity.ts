import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import {
  ExamAssignType,
  ExamType,
  FeeType,
  ShowAnswer,
  ShowResult,
} from 'src/shared/constant';
import { BaseEntity } from 'src/common/mysql/base.entity';
import { Question } from '../question/question.entity';
import { QuestionPart } from '../questionPart/questionPart.entity';
import { ExamClass } from '../examClass/examClass.entity';
import { ExamStudent } from '../examStudent/examStudent.entity';
import { ExamResult } from '../examResult/examResult.entity';
import { Subject } from '../subject/subject.entity';
import { Grade } from '../grade/grade.entity';
import { Teacher } from '../teacher/teacher.entity';
import { Purpose } from '../purpose/purpose.entity';

@Entity()
export class Exam extends BaseEntity {
  @Column({ length: 8 })
  @IsNotEmpty()
  hashId: string;

  @IsNotEmpty()
  @Column()
  title: string;

  @Column({
    type: 'enum',
    enum: ExamAssignType,
    default: ExamAssignType.ALL,
  })
  assignType: ExamAssignType;

  @Column({ type: 'int', default: 0 })
  submitCount: number;

  @Column({ type: 'int', default: 0 })
  duration: number;

  @Column({
    type: 'enum',
    enum: ExamType,
    default: ExamType.TEST,
  })
  type: ExamType;

  @Column({ type: 'timestamp' })
  startDate: Date;

  @Column({ type: 'timestamp' })
  endDate: Date;

  @Column({ type: 'boolean', default: false })
  isPublish: boolean;

  @Column({ type: 'int', default: 0 })
  limitSubmit: number;

  @Column({ type: 'boolean', default: false })
  isRandomQuestion: boolean;

  @Column({ type: 'boolean', default: false })
  isHideGroupQuestionTitle: boolean;

  @Column({ type: 'boolean', default: false })
  isSectionsStartingFromQuestion1: boolean;

  @Column({
    type: 'enum',
    enum: ShowResult,
    default: ShowResult.NO,
  })
  showResult: ShowResult;

  @Column({
    type: 'enum',
    enum: ShowAnswer,
    default: ShowAnswer.NO,
  })
  showAnswer: ShowAnswer;

  @Column({
    type: 'enum',
    enum: FeeType,
    default: FeeType.FREE,
  })
  fee: FeeType;

  @Column({ type: 'text', nullable: true })
  header: string;

  /* --------------------------------- Config --------------------------------- */
  @OneToMany(() => Question, (question) => question.exam)
  questions: Question[];

  @OneToMany(() => QuestionPart, (questionPart) => questionPart.exam)
  questionParts: QuestionPart[];

  @ManyToOne(() => Subject, (subject) => subject.exams)
  subject: Subject;

  @ManyToOne(() => Purpose, (purpose) => purpose.exams)
  purpose: Purpose;

  @ManyToOne(() => Grade, (grade) => grade.exams)
  grade: Grade;

  @ManyToOne(() => Teacher, (teacher) => teacher.exams)
  teacher: Teacher;

  /* --------------------------------- Answers -------------------------------- */
  @OneToMany(() => ExamClass, (examClass) => examClass.exam)
  examClasses: ExamClass[];

  @OneToMany(() => ExamStudent, (examStudent) => examStudent.exam)
  examStudents: ExamStudent[];

  @OneToMany(() => ExamResult, (examResult) => examResult.exam)
  examResults: ExamResult[];
}
