import { Test, TestingModule } from '@nestjs/testing';
import { createMock, DeepMocked } from '@golevelup/ts-jest';
import { LazyLoadingInputDto } from './lazyloading-input.dto';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

describe('LazyLoadingInputDto', () => {
  it('null for cursor should not throw error', async () => {
    // Arrange
    const payload = { cursor: null };
    const myDtoObject = plainToInstance(LazyLoadingInputDto, payload);

    // Act
    const errors = await validate(myDtoObject, { whitelist: true });

    // Assert
    expect(errors.length).toBe(0);
    // expect(JSON.stringify(errors)).toContain(
    //   `Planned Quantity must be a positive number.`,
    // );
  });
});
