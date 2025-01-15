import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.config';

import { AuthModule } from './modules/auth/auth.module';
import { ClassgroupModule } from './modules/classgroup/classgroup.module';
import { AuthController } from './modules/auth/auth.controller';
import { ClassgroupsController } from './modules/classgroup/classgroup.controller';
import { UserController } from './modules/user/user.controller';
import { UserModule } from './modules/user/user.module';
import { TeacherModule } from './modules/teacher/teacher.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    AuthModule,
    ClassgroupModule,
    UserModule,
    TeacherModule,
  ],
})
export class AppModule {}
