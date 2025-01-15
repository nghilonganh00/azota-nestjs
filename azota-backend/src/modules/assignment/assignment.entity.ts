import { Entity, Column, BeforeInsert, OneToOne, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/common/mysql/base.entity';
import { IsNotEmpty } from 'class-validator';
import { generateRandomString } from 'src/shared/utils';
import { Homework } from '../homework/homework.entity';
import { Classroom } from '../classroom/classroom.entity';

@Entity()
export class Assignment extends BaseEntity {
  @Column()
  @IsNotEmpty()
  hashId: string;

  @BeforeInsert()
  generateHashId() {
    this.hashId = generateRandomString(8);
  }

  @ManyToOne(() => Homework, (homework) => homework.assignment, { eager: true })
  homework: Homework;

  @ManyToOne(() => Classroom, (classroom) => classroom.assignment, {
    eager: true,
  })
  classroom: Classroom;

  @Column()
  dueDate: Date;
}
