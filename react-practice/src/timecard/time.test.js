import Time from './time';

test('time init.', () => {
  const now = new Date();
  const time = new Time(now);
  expect(time.datetime.toString()).toBe(now.toString()); 
});
test('time specific date.', () => {
  const d = new Date('2021-01-01 00:00:00');
  const time = new Time(d);
  expect(time.datetime.toString()).toBe(d.toString()); 
});

// vim: set expandtab ts=2 sts=2 sw=2 :
