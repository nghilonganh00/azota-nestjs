import { Entity, Column, OneToMany, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/common/mysql/base.entity';
import { IsNotEmpty } from 'class-validator';
import { DocumentFile } from '../documentFile/documentFile.entity';
import { Document } from '../document/document.entity';
import { Grade } from '../grade/grade.entity';
import { Exam } from '../exam/exam.entity';
import { TeacherSubject } from '../teacherSubject/teacherSubject.entity';

@Entity()
export class Subject extends BaseEntity {
  @Column()
  @IsNotEmpty()
  subjectName: string;

  @OneToMany(() => Document, (document) => document)
  documents: Document[];

  @OneToMany(() => Exam, (exam) => exam.subject)
  exams: Exam[];

  @ManyToOne(() => Grade, (grade) => grade.subjects)
  grade: Grade;

  @OneToMany(() => TeacherSubject, (teacherSubject) => teacherSubject.subject)
  teacherSubject: TeacherSubject;
}
