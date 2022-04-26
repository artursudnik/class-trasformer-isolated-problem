import 'reflect-metadata';
import { plainToInstance } from 'class-transformer';
import { A } from './classes';

const data = {
  name: 'class A instance',
  included: [
    { type: 'b', name: 'B instance' },
    { type: 'c', name: 'C instance' },
    { type: 'b', name: 'B instance' },
    { type: 'c', name: 'C instance' },
  ],
};

const parsed = plainToInstance(A, data);

console.log(parsed);
