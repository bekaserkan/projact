import dota from "../../img/Rectangle 76.svg";
import play from "../../img/Rectangle 76 (1).svg";
import count from "../../img/Rectangle 76 (2).svg";
import world from "../../img/Rectangle 76 (3).svg";
import flag from "../../img/flag.svg";
import flag_red from "../../img/flag_red.svg";
import sword_fight from "../../img/sword_fight.svg";

export const ProfileData = [
  {
    id: 1,
    image: dota,
    title: "Dota 2",
    battle: "10",
    flag: "6",
    flag_red: "4",
    pers: <p style={{ color: "#FF7A00" }}>% 40</p>,
    img1: flag,
    img2: flag_red,
    img3: sword_fight,
  },
  {
    id: 2,
    image: play,
    title: "Playerunknowns Battlegrounds",
    battle: "6",
    flag: "1",
    flag_red: "4",
    pers: <p style={{ color: "#E10D0A" }}>% 27</p>,
    img1: flag,
    img2: flag_red,
    img3: sword_fight,
  },
  {
    id: 3,
    image: count,
    title: "Counter-Strike: Global Offensive",
    battle: "10",
    flag: "5",
    flag_red: "4",
    pers: <p style={{ color: "#4CEF00" }}>% 50</p>,
    img1: flag,
    img2: flag_red,
    img3: sword_fight,
  },
  {
    id: 4,
    image: world,
    title: "World of Tanks",
    battle: "21",
    flag: "16",
    flag_red: "5",
    pers: <p style={{ color: "#6700EB" }}>% 76</p>,
    img1: flag,
    img2: flag_red,
    img3: sword_fight,
  },
];
