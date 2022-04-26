export class Base {
  type: 'b' | 'c';

  name: string;

  constructor(props: Base) {
    Object.assign(this, props);
  }
}
