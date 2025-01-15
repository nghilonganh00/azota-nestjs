import { Entity, OneToOne, JoinColumn, OneToMany, Column } from 'typeorm';
import { BaseEntity } from 'src/common/mysql/base.entity';
import { User } from '../user/user.entity';
import { ExamStudent } from '../examStudent/examStudent.entity';
import { HomeworkResult } from '../homeworkResult/homeworkResult.entity';
import { StudentClass } from '../stutentClass/studentClass.entity';
import { Classroom } from '../classroom/classroom.entity';
import { ExamResult } from '../examResult/examResult.entity';

@Entity()
export class Student extends BaseEntity {
  @Column()
  userId: number;

  @OneToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: User;

  @OneToMany(() => StudentClass, (studentClass) => studentClass.classroom)
  studentClasses: Classroom[];

  @OneToMany(() => ExamStudent, (examStudent) => examStudent.student)
  examStudent: ExamStudent;

  @OneToMany(() => HomeworkResult, (homeworkResult) => homeworkResult.student)
  homeworkResults: HomeworkResult[];

  @OneToMany(() => ExamResult, (examResult) => examResult.student)
  examResults: ExamResult[];
}
