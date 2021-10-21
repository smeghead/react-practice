class Period {
  start: Time;
  end: Time;
  constructor(start: Time, end: Time) {
    this.start = start;
    this.end = end;
  }

  diffMinutes(): int {
    return Math.floor((this.end.datetime.getTime() - this.start.datetime.getTime()) / 1000 / 60);
  }
}
export default Period;
// vim: set expandtab ts=2 sts=2 sw=2 :

