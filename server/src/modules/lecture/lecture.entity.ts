import { ApiProperty } from '@nestjs/swagger'
import { AbstractEntity } from 'src/shared/abstract.entity'
import {
  Entity,
  Column,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { LectureDto } from './dto/lecture.dto'

@Entity()
export class Lecture extends AbstractEntity<LectureDto> {
  @Column({})
  lectureName: string

  @Column({})
  teacherId: string

  @Column({})
  grade: number

  @Column({})
  classId: number

  @Column({})
  weekDay: string

  @Column({})
  period: number

  dtoClass = LectureDto
}
