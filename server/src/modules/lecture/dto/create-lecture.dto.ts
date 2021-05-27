import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsInt, IsOptional, IsString, Length, Max, Min } from 'class-validator'

export class CreateLectureDto {
  @ApiProperty({
    example: '소프트웨어공학',
  })
  @IsString()
  readonly lectureName: string

  @ApiProperty({
    example: 't0105',
  })
  @IsString()
  readonly teacherId: string

  @ApiProperty()
  @IsInt()
  @Min(1)
  @Max(12)
  readonly grade: number

  @ApiProperty()
  @IsInt()
  @Min(1)
  @Max(50)
  readonly classId: number

  @ApiProperty({
    example: 'mon',
  })
  @IsString()
  @Length(1, 3)
  readonly weekDay: string

  @ApiProperty()
  @IsInt()
  @Min(1)
  @Max(10)
  readonly period: number
}
