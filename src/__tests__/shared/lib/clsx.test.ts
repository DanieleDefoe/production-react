import clsx from 'clsx';

describe('clsx', () => {
  test('with just one param', () => {
    expect(clsx('someClass')).toBe('someClass');
  });

  test('with additional params', () => {
    expect(clsx('someClass', 'anotherClass')).toBe('someClass anotherClass');
  });

  test('with additional params and falsy values', () => {
    expect(clsx('someClass', false, undefined, null, 'anotherClass')).toBe(
      'someClass anotherClass'
    );
  });

  test('with additional params as objects', () => {
    expect(clsx('someClass', { anotherClass: false, thirdClass: true })).toBe(
      'someClass thirdClass'
    );
  });
});
