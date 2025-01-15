import { Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/common/mysql/base.entity';
import { Student } from '../student/student.entity';
import { Classroom } from '../classroom/classroom.entity';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class StudentClass extends BaseEntity {
  @ManyToOne(() => Student, (student) => student.studentClasses)
  student: Student;

  @ManyToOne(() => Classroom, (classroom) => classroom.studentClasses, {
    nullable: false,
  })
  classroom: Classroom;
}
