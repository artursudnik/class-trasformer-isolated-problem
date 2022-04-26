export class B {
  type: 'b';

  constructor(props: B) {
    Object.assign(this, props);
  }
}
