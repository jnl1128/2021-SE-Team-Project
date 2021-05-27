import {
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Query,
  ValidationPipe,
  Body,
  UsePipes,
} from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'
import { LectureService } from './lecture.service'
import { lectureNameVerificationParams } from './dto/lectureName-verification.params'
import { CreateLectureDto } from './dto/create-lecture.dto'
import { LectureDto } from './dto/lecture.dto'

@Controller('lectures')
@ApiTags('lectures')
export class LectureController {
  constructor(private lectureService: LectureService) {}
  /*수업 이름이 중복인지 검사는 안해도 될듯
  @Get('/lectureName-verification/:lectureName')
  @HttpCode(HttpStatus.OK)
  async verifyLectureName(@Param() params: lectureNameVerificationParams): Promise<any> {


    const isDuplicated = await this.lectureService.checkDuplicate(params.lecName)

    if (isDuplicated) {
      throw new HttpException('DUPLICATED_EMAIL', HttpStatus.CONFLICT)
    }

    return {
      isDuplicated,

  }
  */
  @Get()
  async getAllLecture(): Promise<LectureDto[]> {
    return await this.lectureService.getAllLecture()
  }

  @Get(':id')
  async getMyLecture(@Param('id') classId: number) {
    return await this.lectureService.getMyLecture(classId)
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createLecture(@Body() lectureData: CreateLectureDto) {
    return await this.lectureService.createNewLecture(lectureData)
  }
}
