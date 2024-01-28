import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {}
