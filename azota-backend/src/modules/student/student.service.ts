import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { User } from '../user/user.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  create(userId: number): Promise<Student | null> {
    const student = this.studentRepository.create({ userId });
    return this.studentRepository.save(student);
  }
}
