// src/filters/rpc-exception.filter.ts
import { Catch, ArgumentsHost, RpcExceptionFilter, Logger } from '@nestjs/common';

@Catch()
export class RpcExceptionsFilter implements RpcExceptionFilter {
  private readonly logger = new Logger(RpcExceptionsFilter.name);

  catch(exception: any, host: ArgumentsHost) {
    this.logger.error('Unhandled exception caught', exception.stack);
    return exception;
  }
}
