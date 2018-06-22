const { compose } = require('../src/index.js');
describe('compose', () => {
  it('should pass component through many HOCs', () => {
    const myComponent = {
      title: 'fake react component'
    };
    const hoc1 = component =>
      Object.assign({}, component, { hoc1Mutation: true });
    const hoc2 = component =>
      Object.assign({}, component, { hoc2Mutation: 42 });
    const hoc3 = component =>
      Object.assign({}, component, {
        hoc3Mutation: { param: 'test' }
      });
    const wrappedCompoenet = compose(
      hoc1,
      hoc2,
      hoc3
    )(myComponent);
    expect(wrappedCompoenet).toEqual({
      hoc1Mutation: true,
      hoc2Mutation: 42,
      hoc3Mutation: {
        param: 'test'
      },
      title: 'fake react component'
    });
  });
});
