import { MongoError } from "./../../node_modules/mongodb/src/error";
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from "@nestjs/common";

@Catch(MongoError)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: MongoError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    let message = "Database error";
    if (exception.code === 11000) {
      message = "Duplicate key error";
    }

    response.status(400).json({
      success: false,
      statusCode: 400,
      message,
      error: exception.message,
    });
  }
}
