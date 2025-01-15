import { Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/common/mysql/base.entity';
import { Exam } from '../exam/exam.entity';
import { Student } from '../student/student.entity';

@Entity()
export class ExamStudent extends BaseEntity {
  @ManyToOne(() => Exam, (exam) => exam.examStudents)
  exam: Exam;

  @ManyToOne(() => Student, (student) => student.examStudent)
  student: Student;
}
