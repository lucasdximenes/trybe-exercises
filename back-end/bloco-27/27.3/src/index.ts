import Club from "./Club";
import SoccerCourt from "./SoccerCourt";
import TennisCourt from "./TennisCourt";

const club = new Club();
const soccerCourt = new SoccerCourt();
const tennisCourt = new TennisCourt();

club.addCourt(soccerCourt);
club.addCourt(tennisCourt);

const soccerReserve = club.getCourt<SoccerCourt>(0).reserve(new Date());
const tennisReserve = club.getCourt<TennisCourt>(1).reserve(new Date());
console.log(soccerReserve);
console.log(tennisReserve);

console.log(club.getAllCourts());
