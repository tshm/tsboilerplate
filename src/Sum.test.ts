import { Sum } from './Sum';

test('curry works', () => {
  const add7 = Sum(7);
  expect(add7(3)).toBe(10);
});

test('call directly', () => {
  expect(Sum(1)(2)).toBe(3);
});
