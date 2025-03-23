// common/filters/business-logic.filter.ts

import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { CustomBusinessException } from '../exceptions/custom-business.exception';

@Catch(CustomBusinessException)
export class BusinessLogicFilter implements ExceptionFilter {
  catch(exception: CustomBusinessException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const { statusCode, message, details } = exception.getResponse() as any;

    response.status(statusCode).json({
      success: false,
      statusCode,
      message,
      details,
      timestamp: new Date().toISOString(),
    });
  }
}
