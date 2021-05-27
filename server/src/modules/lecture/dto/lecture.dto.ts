import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { AbstractDto } from 'src/shared/abstract.dto'
import { Lecture } from '../lecture.entity'

export class LectureDto extends AbstractDto {
  @ApiProperty({
    example: '소프트웨어공학',
  })
  lectureName: string

  @ApiProperty({
    example: 't0105',
  })
  teacherId: string

  @ApiProperty({
    example: '01',
  })
  grade: number

  @ApiProperty({
    example: '05',
  })
  classId: number

  @ApiProperty({
    example: 'mon',
  })
  weekDay: string

  @ApiProperty({
    example: '2',
  })
  period: number

  constructor(lecture: Lecture) {
    super(lecture)
    this.lectureName = lecture.lectureName
    this.teacherId = lecture.teacherId
    this.grade = lecture.grade
    this.classId = lecture.classId
    this.weekDay = lecture.weekDay
    this.period = lecture.period
  }
}
