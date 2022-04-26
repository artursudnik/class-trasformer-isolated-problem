import { B, Base, C } from './included';
import { Type } from 'class-transformer';

export class A {
  name: string;
  @Type(() => Base, {
    discriminator: {
      property: 'type',
      subTypes: [
        { name: 'b', value: B },
        { name: 'c', value: C },
      ],
    },
  })
  included: Array<B | C>;

  constructor(props: A) {
    Object.assign(this, props);
  }
}
