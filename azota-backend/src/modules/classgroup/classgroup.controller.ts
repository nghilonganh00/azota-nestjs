import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Req,
  Inject,
} from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import {
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';

import { ClassgroupsService } from './classgroup.service';
import { Classgroup } from './classgroup.entity';
import { ClassgroupDto } from './classgroup.dto';
import { Roles } from 'src/common/decorators/roles.decorator';
import { UserRole } from '../user/user.entity';

@ApiTags('Classgroup')
@Controller('classgroups')
export class ClassgroupsController {
  constructor(
    @Inject(REQUEST) private readonly request: any,
    private classgroupService: ClassgroupsService,
  ) {}

  @ApiSecurity('bearer')
  @Get()
  async findAll(): Promise<Classgroup[]> {
    const userId = this.request['user']['sub'];

    return this.classgroupService.getByTeacher(userId);
  }

  @ApiParam({
    name: 'id',
    description: 'The ID of the user',
    type: String,
  })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Classgroup> {
    return this.classgroupService.findOne(id);
  }

  /* --------------------------------- Create --------------------------------- */
  @ApiBearerAuth()
  @Roles([UserRole.TEACHER])
  @Post()
  async create(@Body() classgroupDto: ClassgroupDto): Promise<void> {
    return this.classgroupService.create(classgroupDto);
  }

  /* --------------------------------- Delete --------------------------------- */
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    console.log('delete at id: ' + id);
    return this.classgroupService.delete(id);
  }
}
