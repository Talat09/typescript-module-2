//2 - 8 : Union , Intersection and Enum Types
type NoobDeveloper = {
  name: string;
};
// type JuniorDeveloper = {
// name : string
// expertise : string
// experience : number
// }
type JuniorDeveloper = NoobDeveloper & {
  expertise: string;
  experience: number;
};
const newDeveloper: NoobDeveloper | JuniorDeveloper = {
  name: "Talat Mahmud ",
  expertise: "Javascript",
  experience: 1,
};
//
enum Level {
  junior = "junior",
  mid = "mid",
  senior = " senior",
}
type NextLevelDeveloper = JuniorDeveloper & {
  leadershipExperience: number;
  level: "junior" | "mid" | " senior";
};
const developer: NextLevelDeveloper = {
  name: " Next bhai ",
  expertise: "Typescript ",
  experience: 2,
  leadershipExperience: 1,
  level: "mid", //Level.mid enum use kora best practise nah
};
console.log(developer);
