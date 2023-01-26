import ITennis from "./interfaces/ITennis";
import ISchedule from "./interfaces/ISchedule";
import Court from "./Court";
import norms from "./normas/normsOfUse";

export default class TennisCourt extends Court {
  public tennisDatta: ITennis = norms.tennis;

  public reserve<ITennis>(date: Date): ISchedule<ITennis> {
    const protocol = (Math.random() + 1).toString(36).substring(2);
    return {
      protocol,
      date,
      rules: this.tennisDatta as ITennis,
    };
  }
}
