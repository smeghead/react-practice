import Time from './time';

class Timecard {
  start: Time;
  end: Time;
  constructor(start: Time, end: Time) {
    this.start = start;
    this.end = end;
  }

}
export default Timecard;
// vim: set expandtab ts=2 sts=2 sw=2 :
