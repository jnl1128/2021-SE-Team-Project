import { ApiProperty } from '@nestjs/swagger'
import { IsString } from 'class-validator'

export class lectureNameVerificationParams {
  @ApiProperty()
  @IsString()
  readonly lecName: string
}
//이 부분을 따로 해줘야 하는건가?
