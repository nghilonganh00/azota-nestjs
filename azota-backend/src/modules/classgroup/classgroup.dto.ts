import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';

export class ClassgroupDto {
  @Type(() => Number)
  id: number;

  @ApiProperty({
    description: 'Mô tả chi tiết về thuộc tính',
    example: 'Lớp 12A1',
  })
  @Expose()
  @Type(() => String)
  classgroupName: string;
}
