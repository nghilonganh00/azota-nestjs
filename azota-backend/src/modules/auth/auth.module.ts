import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

import { User } from '../user/user.entity';
import { jwtConstants } from 'src/config/jwt.config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '../../common/guards/auth.guard';
import { UserModule } from '../user/user.module';
import { StudentModule } from '../student/student.module';
import { TeacherModule } from '../teacher/teacher.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '24h' },
    }),
    UserModule,
    StudentModule,
    TeacherModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    AuthService,
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
