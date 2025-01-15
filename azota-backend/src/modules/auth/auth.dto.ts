import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../user/user.entity';
import { IsInt, IsString } from 'class-validator';
import { Exclude, Expose } from 'class-transformer';

export class SignInDto {
  @ApiProperty({
    example: 'thienlv1',
  })
  username: string;

  @ApiProperty({
    example: 'thien123',
  })
  password: string;
}

export class UserResponseDto {
  @Exclude()
  password: string;
}

export class SignUpDto {
  @ApiProperty({
    example: 'thienlv1',
  })
  username: string;

  @ApiProperty({
    example: 'thien123',
  })
  password: string;

  @ApiProperty({
    example: 'Le Van Thien',
  })
  fullname: string;

  @ApiProperty({
    example: UserRole.STUDENT,
  })
  role: UserRole;
}
