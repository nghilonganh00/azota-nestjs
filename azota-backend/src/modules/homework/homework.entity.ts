import {
  Entity,
  Column,
  BeforeInsert,
  OneToOne,
  OneToMany,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { BaseEntity } from 'src/common/mysql/base.entity';
import { User } from '../user/user.entity';
import { IsNotEmpty } from 'class-validator';
import { Grade } from '../grade/grade.entity';
import { Teacher } from '../teacher/teacher.entity';
import { Assignment } from '../assignment/assignment.entity';
import { HomeworkResult } from '../homeworkResult/homeworkResult.entity';
import { HomeworkFile } from '../homeworkFile/homeworkFile.entity';

@Entity()
export class Homework extends BaseEntity {
  @Column()
  @IsNotEmpty()
  title: string;

  @Column()
  @IsNotEmpty()
  content: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column({ default: false })
  isShowResult: boolean;

  @Column({ default: false })
  isMustLogin: boolean;

  @Column({ default: false })
  isInTrash: boolean;

  @ManyToOne(() => Grade, (grade) => grade.homework)
  grade: Grade;

  @ManyToOne(() => Teacher, (teacher) => teacher.homework)
  teacher: Teacher;

  @OneToMany(() => Assignment, (assignment) => assignment.homework)
  assignment: Assignment;

  @OneToMany(() => HomeworkResult, (homeworkResult) => homeworkResult.homework)
  homeworkResults: HomeworkResult[];

  @OneToMany(() => HomeworkFile, (homeworkFile) => homeworkFile.homework)
  homeworkFiles: HomeworkFile[];
}
