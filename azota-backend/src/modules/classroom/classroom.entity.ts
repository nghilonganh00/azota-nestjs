import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Classgroup } from '../classgroup/classgroup.entity';
import { BaseEntity } from 'src/common/mysql/base.entity';
import { IsNotEmpty } from 'class-validator';
import { Teacher } from '../teacher/teacher.entity';
import { ExamClass } from '../examClass/examClass.entity';
import { Assignment } from '../assignment/assignment.entity';
import { StudentClass } from '../stutentClass/studentClass.entity';
import { Student } from '../student/student.entity';

@Entity()
export class Classroom extends BaseEntity {
  @Column()
  @IsNotEmpty()
  className: string;

  @Column({ length: 4 })
  @IsNotEmpty()
  classYear: string;

  @ManyToOne(() => Teacher, (teacher) => teacher.classrooms)
  teacher: Teacher;

  @ManyToOne(() => Classgroup, (classgroup) => classgroup.classrooms)
  classgroup: Classgroup;

  @OneToMany(() => StudentClass, (studentClass) => studentClass.classroom)
  studentClasses: StudentClass[];

  @OneToMany(() => ExamClass, (examClass) => examClass.class)
  examClasses: ExamClass[];

  @OneToMany(() => Assignment, (assignment) => assignment.classroom)
  assignment: Assignment;
}
