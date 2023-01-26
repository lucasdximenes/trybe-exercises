export default interface ISchedule<T> {
  protocol: string;
  date: Date;
  rules: T;
}
