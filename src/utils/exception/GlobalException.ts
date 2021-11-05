import { HttpException } from '@nestjs/common';

export class GlobalException extends HttpException {
  statusCode: number;
  constructor(response: string | Record<string, any>, status: number) {
    super(response, 200);
    this.statusCode = status;
  }
}
