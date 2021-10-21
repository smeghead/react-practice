import Time from './time';
import Period from './period';

test('period 01:00:00.', () => {
  const d1 = new Date('2021-01-01 00:00:00');
  const d2 = new Date('2021-01-01 01:00:00');
  const p = new Period(new Time(d1), new Time(d2));
  expect(p.diffMinutes()).toBe(60); 
});
test('period 00:01:59.', () => {
  const d1 = new Date('2021-01-01 00:00:00');
  const d2 = new Date('2021-01-01 00:01:59');
  const p = new Period(new Time(d1), new Time(d2));
  expect(p.diffMinutes()).toBe(1); 
});

// vim: set expandtab ts=2 sts=2 sw=2 :
