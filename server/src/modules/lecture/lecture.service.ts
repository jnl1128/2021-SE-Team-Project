import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { createGunzip } from 'zlib'
import { CreateLectureDto } from './dto/create-lecture.dto'
import { LectureDto } from './dto/lecture.dto'
import { Lecture } from './lecture.entity'
import { LectureRepository } from './lecture.repository'

@Injectable()
export class LectureService {
  private readonly logger = new Logger(LectureService.name)

  constructor(
    @InjectRepository(LectureRepository)
    private readonly lectureRepository: LectureRepository,
  ) {}

  //저장되어있는 lecture 모두 조회하기위해
  async getAllLecture(): Promise<LectureDto[]> {
    return this.lectureRepository.find() //
  }

  //개인 lecture만 조회
  async getMyLecture(id: number): Promise<any> {
    return this.lectureRepository.find({ classId: id })
  }
  /*같은 수업이 있는지 중복체크 할 필요가 없을 거 같아서
  async checkDuplicate(lecName: string): Promise<boolean> {
    try {
      const isLectureDupliated = await this.lectureRepository.findOne({
        where: {
          lecName,
          deletedAt: null,
        },
      })
      return !!isLectureDupliated
    } catch (e) {
      this.logger.error(e)
      throw e
    }
  }*/

  async createNewLecture(createLectureDto: CreateLectureDto): Promise<any> {
    try {
      /* 수업 중복체크
      const isLectureDuplicated = await this.lectureRepository.findOne({
        where: {
          lectureName: createLectureDto.lectureName,
          deletedAt: null,
        },
        order: {
          id: 'DESC',
        },
      })

      if (isLectureDuplicated) {
        throw new BadRequestException('LECTURE_DUPLICATED')
      }*/

      const created = await this.lectureRepository.save({
        lectureName: createLectureDto.lectureName,
        teacherId: createLectureDto.teacherId,
        grade: createLectureDto.grade,
        classId: createLectureDto.classId,
        weekDay: createLectureDto.weekDay,
        period: createLectureDto.period,
      })

      return created.toDto()
    } catch (e) {
      this.logger.error(e)
      throw e
    }
  }
}
