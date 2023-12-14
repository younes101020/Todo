import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata?: ArgumentMetadata) {
    const cursor = parseInt(value.cursor);
    if(cursor < 3) {
      throw new BadRequestException("Cursor need to be at least 3");
    }
    return value;
  }
}
