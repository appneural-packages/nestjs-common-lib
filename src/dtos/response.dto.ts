// src/dto/response.dto.ts
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class ResponseDto<T = any> {
  @ApiProperty({ example: true, description: "Indicates success" })
  success: boolean;

  @ApiProperty({ example: 200, description: "HTTP status code" })
  statusCode: number;

  @ApiProperty({
    example: "Operation successful",
    description: "Response message",
  })
  message: string;

  @ApiPropertyOptional({ description: "Returned data" })
  data?: T;

  @ApiPropertyOptional({ description: "Error code if failed" })
  errorCode?: number;

  @ApiPropertyOptional({ description: "Detailed error messages" })
  errors?: any;

  constructor(
    success: boolean,
    statusCode: number,
    message: string,
    data?: T,
    errorCode?: number,
    errors?: any
  ) {
    this.success = success;
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.errorCode = errorCode;
    this.errors = errors;
  }
}
