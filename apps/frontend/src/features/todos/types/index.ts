import { BaseEntity } from '@/types';

export type Todo = {
  title: string,
  status: 'DONE' | 'NOT_STARTED' | 'IN_PROGRESS',
  priority: 'URGENT' | 'CAN_WAIT' | 'OPTIONAL',
  tags: string[]
} & BaseEntity;