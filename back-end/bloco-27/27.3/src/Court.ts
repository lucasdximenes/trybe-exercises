import ISchedule from "./interfaces/ISchedule";

export default abstract class Court {
  public abstract reserve<T>(date: Date): ISchedule<T>;
}
