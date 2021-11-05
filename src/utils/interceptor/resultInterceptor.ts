import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';

export class ResultInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    // throw new Error('Method not implemented.');
    return next.handle().pipe(
      map((data) => {
        return { code: 200, message: 'success', data };
      }),
    );
  }
}
