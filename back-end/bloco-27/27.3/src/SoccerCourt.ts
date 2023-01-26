import ISoccer from "./interfaces/ISoccer";
import ISchedule from "./interfaces/ISchedule";
import Court from "./Court";
import norms from "./normas/normsOfUse";

export default class SoccerCourt extends Court {
  public soccerData: ISoccer = norms.soccer;

  public reserve<ISoccer>(date: Date): ISchedule<ISoccer> {
    const protocol = (Math.random() + 1).toString(36).substring(2);
    return {
      protocol,
      date,
      rules: this.soccerData as ISoccer,
    };
  }
}
