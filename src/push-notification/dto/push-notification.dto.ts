import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class PushNotification {
  @ApiProperty()
  // @IsNotEmpty()
  @IsString()
  title: string;
  @ApiProperty()
  // @IsNotEmpty()
  @IsString()
  body: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  token: string;
  @ApiProperty()
  @IsString()
  data: string; // JSON data property
}
