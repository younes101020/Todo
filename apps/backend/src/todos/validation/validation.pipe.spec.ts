import { BadRequestException } from '@nestjs/common/exceptions/bad-request.exception';
import { ValidationPipe } from './validation.pipe';

describe('ValidationPipe', () => {
  let pipe: ValidationPipe;

  beforeEach(() => {
    pipe = new ValidationPipe();
  });

  it('should be defined', () => {
    expect(new ValidationPipe()).toBeDefined();
  });

  it(`should throw error for not having cursor of 3 minimum`, () => {
    const value = () => pipe.transform({cursor: 2});
    expect(value).toThrow(BadRequestException);
  });
});
