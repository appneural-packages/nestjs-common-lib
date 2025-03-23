// common/exceptions/custom-business.exception.ts

import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomBusinessException extends HttpException {
  constructor(message: string, details?: any, status: HttpStatus = HttpStatus.UNPROCESSABLE_ENTITY) {
    super(
      {
        statusCode: status,
        success: false,
        message,
        details,
      },
      status,
    );
  }
}
