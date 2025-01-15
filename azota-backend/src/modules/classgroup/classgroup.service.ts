import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Classgroup } from './classgroup.entity';
import { ClassgroupDto } from './classgroup.dto';
import { REQUEST } from '@nestjs/core';
import { TeacherService } from '../teacher/teacher.service';

@Injectable()
export class ClassgroupsService {
  constructor(
    @InjectRepository(Classgroup)
    private classgroupsRepository: Repository<Classgroup>,

    @Inject(REQUEST)
    private readonly request: any,

    private teacherService: TeacherService,
  ) {}

  async getByTeacher(userId: number): Promise<Classgroup[]> {
    const classgroups = await this.classgroupsRepository.find({
      where: {
        teacher: { userId },
      },
      relations: ['classrooms'],
    });

    if (!classgroups || classgroups.length === 0) {
      throw new UnauthorizedException('No classgroups found for this teacher');
    }

    return classgroups;
  }

  findOne(id: number): Promise<Classgroup | null> {
    return this.classgroupsRepository.findOneBy({ id });
  }

  async create(classgroupDto: ClassgroupDto): Promise<void> {
    const userId = this.request['user']['sub'];

    const teacher = await this.teacherService.findOne({ userId });

    if (!teacher) {
      throw new UnauthorizedException(`This teacher isn't exist`);
    }

    const newClassgroup = this.classgroupsRepository.create({
      classgroupName: classgroupDto.classgroupName,
      teacher,
    });

    const savedClassgroup =
      await this.classgroupsRepository.save(newClassgroup);

    // return savedClassgroup;
  }

  async delete(id: number): Promise<void> {
    const result = await this.classgroupsRepository.delete({ id });

    if (result.affected === 0) {
      throw new NotFoundException(`Classgroup with ID ${id} not found`);
    }
  }
}
