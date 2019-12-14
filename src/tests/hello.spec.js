import { expect } from 'chai';

describe('true or false', () => {
  it('true is true', (done) => {
    expect(true).to.eql(true);
    done();
  });
  it('false is false', () => {
    expect(false).to.eql(false);
  });
});