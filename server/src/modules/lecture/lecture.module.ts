import {Module} from '@nestjs/common'
import {LectureController} from './lecture.controller'
import {LectureService} from './lecture.service'
import {LectureRepository} from './lecture.repository'
import {TypeOrmModule} from '@nestjs/typeorm'


@Module({
  controllers: [LectureController],
  imports:[TypeOrmModule.forFeature([LectureRepository])],
  providers: [LectureService],
})
export class LectureModule {}