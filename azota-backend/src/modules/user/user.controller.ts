import { Controller, Get, Inject } from '@nestjs/common';
import { UserService } from './user.service';
import { REQUEST } from '@nestjs/core';
import { ApiBearerAuth } from '@nestjs/swagger';
import { UserDto } from './user.dto';
import { plainToClass } from 'class-transformer';

@Controller('users')
export class UserController {
  constructor(
    @Inject(REQUEST)
    private readonly request: any,

    private userService: UserService,
  ) {}

  @ApiBearerAuth()
  @Get()
  async findOne(): Promise<UserDto | null> {
    const userId = this.request['user']['sub'];
    const user = await this.userService.findByPk(userId);
    return plainToClass(UserDto, user);
  }
}
