// grantbot.js

function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}

// function testRand() {
//   let testString = 0;
//   // for (let i = 0; i < 100; i++) {
//   //   testString += getRandomNum(11).toString() + " / ";
//   // }
//    testString = getRandomNum(11).toString();
//   return testString;
// }

let myChoices = [
// imperatives
  ["must", "have to", "want to", "need to", "are forced to",
  "think it'd be cool to", "might as well", "figure they should",
  "can't possibly", "wish they could"],
// verbs
  ["follow", "fight", "communicate with", "contact", "learn from",
  "talk about", "discover", "get kidnapped by", "be talked to by",
  "free", "investigate", "take care of", "own or rent"],
// a/an adjective
  ["berserk", "homeless", "insane", "lovesick", "warlike", "evil",
  "horny", "homesick", "lonely", "good", "fey", "shy", "top secret", "puzzled",
  "clueless", "hungry", "pernicious", "bored", "confused", "fragile", "voracious",
  "tone deaf", "undead", "hypnotized", "sleepwalking", "charming", "bespelled",
  "bedazzled", "idiotic", "mindless", "unleashed", "hellbent", "cruel", "kind"],
// victim
["nazi", "zombie", "cro-magnon", "dinosaur", "group of aliens",
"ufo pilot", "alien", "supervillain", "government agent",
"government agency", "demon", "angel", "wizard", "virus", "coven",
"mad scientist", "ancient warrior", "ghost", "haunt of spirits", "faery",
"gorilla", "talking ape", "sea monster", "golem", "military officer",
"military cabal", "foreign dictator", "politician", "service provider",
"technician", "cable guy", "first responder", "foreign army", "robot", "pirate",
"ninja", "doctor", "surgeon", "haunted house", "giant bug", "sentient plant",
"midget kaiju", "kaiju", "zookeeper", "swarm of bees", "nanorobot cloud",
"AI entity", "super spy", "librarian", "professor", "teacher", "madman",
"lifelike android", "demigod", "living crystal", "single-celled organism",
"lizard person", "intelligent pangolin", "talking three-toed tree sloth",
"slime creature", "animate fungus", "psychedlic mushroom idol"],
// with characteristic
["terrible taste", "poor eyesight", "telekinesis", "super powers",
 "a mind-control satellite", "an earthquake machine", "good taste",
 "a weather controlling device", "a doomsday device", "weak morals",
 "contagious insanity", "a magical artifact", "implaccable boredom",
 "a fresh grudge", "bad gas", "a breath weapon", "a super weapon",
 "poisonous venom", "laser beam eyes", "superior technology",
 "a death ray", "a big chip on its shoulder", "suicidal ennui", "a submarine",
 "an ornithopter", "a dirigibile", "a magic top hat", "a bag of tricks",
 "a bitchin bazooka",  "boots made for walking", "a magic sword",
 "a contact high", "a hypnotic gaze", "a sleep spell", "a death wish",
 "an arcane tome", "a bad reputation", "a beautiful kite"],
// goal
["wants to conquer the world", "wants to kill all superheroes",
 "wants to discover Atlantis/Mu", "wants to steal all of earth's x",
 "wants a publishing deal", "has come to kick some butt",
 "hates slackers", "needs an easy challenge", "loves in error",
 "is trying out superheroes for their weaknesses",
 "must prove itself/themselves", "wishes to discredit our heroes",
 "seeks revenge on Earth", "seeks revenge on our heroes",
 "has been ordered to capture/kill our heroes", "likes our heroes",
 "mistakes our boys for real heroes", "errs on the side of caution",
 "is planning the biggest heist of the century", "wants to destroy passers by",
 "hopes for recognition", "needs a place to stay", "loves attention",
 "needs a ride", "wants to discover its/their origin", "seeks the moral high ground",
 "plans to replace world leaders with duplicates", "covets our heroes' freedom",
 "wants to hoard all of earth's water", "wants to leave this dimension",
 "wants to get to the other side", "wants to cheat death", "wants to live forever",
 "wants to stay out of the light", "desires to breach this plane", "lacks energy",
 "needs to absorb all life force", "needs to balance the scales", "loves the law",
 "champions chaos on earth", "seeks to destroy all gods", "believes in miracles",
 "seeks to restore the true faith", "claims to be the messiah"
],
// motivation; it is or they are
["angry with", "happy about", "sad because of", "pleased by",
 "afraid of", "ready to fight", "succeeding regardless of",
 "too ruthless for", "far more powerful than", "much weaker than",
 "of equal strength to", "about to capture", "running away from",
 "following at a distance from", "wary of", "unafraid of",
 "toying with", "about to smash", "oblivious to", "racing against"],
// modifier: and/but [blanks] them.
["wants to fight", "agree(s) to terms with", "come(s) to fear",
 "ridicules", "thrashes", "is/are about to destroy", "ignores",
 "so battle(s)", "tries to talk to", "pleas for mercy from",
 "sucks the souls from", "gets away from", "scares", "runs away from",
 "tries to fight with", "turns the tables on"],
// So, our heroes A, B it/them and it/they C them in response.
// The result is, our heroes
["wish they were like it/them", "finally defeat it/them",
 "can only watch as it all happens", "get away with their lives",
 "run for the hills", "don't bother to do anything", "leave",
 "decide to stay home", "do something else", "go to the store",
 "capture it/them for prosecution", "call other superheroes for help",
 "give in to its/their demands", "get soundly trounced",
 "win like champions", "cause more trouble than if they'd stayed home",
 "move to another city", "accidentally kill everyone", "cry like babies",
 "give up and become janitors", "win by accident", "sabotage a fair",
 "sort of win, sort of lose", "are more confused than ever", "win", "lose", "tie"],
// and/or/but it/they ***
["come(s) to terms", "get(s) what it/they wanted all along",
 "live(s)", "gloat(s)", "flee(s)", "do(es) a victory dance",
 "vow(s) to return again", "win(s)", "win(s) supremely",
 "lose(s)", "lose(s) badly", "teaches our heroes humility",
 "relents in the end", "give(s) up from boredom", "only grow(s) stronger",
 "fade(s) away", "escape(s)", "leave(s) for the stars",
 "melt(s) into goo", "flee(s) to another location", "quit(s) to enter trade school",
 "sign(s) a big movie deal", "return(s) to its/their home/base",
 "learn(s) a valuable lesson", "teach(es) a valuable lesson",
 "begin(s) quoting poetry", "decide(s) it/they really love the world after all"],
// regardless.
// the action takes place:
["at its/their secret headquarters", "on the dark side of the moon",
 "at the bottom of the ocean", "in an abandonned house",
 "in a haunted house", "in an amusement park", "at a government institution",
 "at a governement intallation", "at a SETI station", "in a national park",
 "at a hospital", "in our heroes' backyard", "in a missile silo",
 "on a cruise ship", "at a military base", "inside a factory",
 "inside a warehouse", "inside our heroes' apartment", "at a farm",
 "at a deserted farm", "at the animal shelter", "at a pond/lake",
 "at the zoo", "in deep space", "on a space ship", "downtown",
 "uptown", "in the suburbs", "in a city of gorillas", "in ancient egypt",
 "in Rome", "in London", "in Paris", "in Kiev", "in Moscow", "on MIR",
 "on Mars", "in their minds", "on the astral plane", "in the attic",
 "on the shuttle", "on a plane", "on a bus", "at a UFO base",
 "at a secret altar", "at a hospice", "at a car dealership", "in Vegas",
 "at a casino", "at a concert", "at a bar", "on a submarine",
 "on a dirigible", "on a ghost ship", "on a tramp steamer",
 "in Amsterdam", "in San Francisco", "in Hollywood", "in New York",
 "in a bustling Metropolis", "on the English moors", "in a Central City",
 "in a Coast City", "in the near future", "in the far future",
 "in the distant past", "in the recent past", "in a microverse",
 "in another dimension", "in Heaven", "in Hell", "in Limbo",
 "under a rainbow", "in Faerie", "on a train", "on a truck",
 "in a parking garage", "in a skyscraper", "in the Gobi desert",
 "in the Sahara", "in the Mojave", "in the Outback", "in Antarctica",
 "at the North Pole", "in Pelucidar", "in the South Seas",
 "on an unknown island", "on a dark desert highway, cool wind in their hair...",
 "in Hawaii", "on Tahiti", "in China", "in Japan", "in Hong Kong",
 "in Beijing", "in Tokyo", "on Mount Fuji", "in Pompeii",
 "on a mountain", "in a forest", "in the town where I was born...",
 "at Stonehenge", "in a theater", "in VR", "in a restaurant",
 "on line", "in the deep jungle", "in the jungle, the mighty jungle...",
 "in a pyramid", "at an Aztec pyramid", "on a river", "on the waterfront",
 "at the beach", "on the beach", "at an observatory", "in a secret lab",
 "at the university", "at a high school", "at the junior college",
 "on a campground", "in a meadow", "at a crop circle", "at a door",
 "at an airport", "at a stadium", "at some ruins", "in a bad part of town",
 "over the river and through the woods", "at the Taj Mahal",
 "at the site of a meteor impact", "in a TV station", "on the air",
 "in a canyon", "in the Grand Canyon", "at the Olympics", "in Greece",
 "on Broadway", "Off broadway", "at a town meeting", "in Salem"]
]; // end of myChoices

/*
XPRINT " with " + b$(5) + " who/m " + b$(6) + ". ";
XPRINT "Our heroes " + b$(1) + " " + b$(2); " a/an " + b$(3) + " " + b$(4);
PRINT "It/they is/are " + b$(7) + " our heroes and/but " + b$(8) + " them anyway/how. ";
PRINT "So, our heroes " + b$(11) + " " + b$(12) + " it/them ";
PRINT " and it/they is/are " + b$(13) + " our heroes in response. ";
PRINT "The result is our heroes " + b$(9) + " and/or/but it/they " + b$(10); " regardless. "
PRINT "The Action takes place " + location$(RND * 139 + 1) + " and ";
PRINT location$(RND * 139 + 1) + "."
*/
function generatePlot() {
  let storyString = "";
  let exit = false;
  let x = "n";
//  while (exit === false) {
    // alert("Banana!");
    storyString = "";
    storyString += "Our heroes " + myChoices[0][getRandomNum(myChoices[0].length)] + " " + myChoices[1][getRandomNum(myChoices[1].length)];
    storyString += " a/an " + myChoices[2][getRandomNum(myChoices[2].length)] + " " + myChoices[3][getRandomNum(myChoices[3].length)];
    storyString += " with " + myChoices[4][getRandomNum(myChoices[4].length)] + " that/who/m " + myChoices[5][getRandomNum(myChoices[5].length)] + ". ";
    storyString += "\nIt/they is/are " + myChoices[6][getRandomNum(myChoices[6].length)] + " our heroes and/but " + myChoices[7][getRandomNum(myChoices[7].length)] + " them anyway/anyhow/because of it. ";
    storyString += "\n\nSo, our heroes " + myChoices[0][getRandomNum(myChoices[0].length)] + " " + myChoices[1][getRandomNum(myChoices[1].length)] + " it/them"; //1, 2
    storyString += " and it/they is/are " +  myChoices[7][getRandomNum(myChoices[7].length)] + " our heroes in response. "; // 7
    storyString += "\n\nThe result is our heroes " + myChoices[8][getRandomNum(myChoices[8].length)] + " and/or/but it/they " + myChoices[9][getRandomNum(myChoices[9].length)] + " regardless. ";
    storyString += "\n\nThe action takes place " + myChoices[10][getRandomNum(myChoices[10].length)] + " and " + myChoices[10][getRandomNum(myChoices[10].length)] +".";
    // x = prompt(storyString + "\n\n\nAnother Y/n");
    // // // let y = prompt("test?");
    // // exit = true;
    // alert(storyString);
    // if (x.toUpperCase() === "N") { exit = true; } //else { storyString = ""; }
    document.getElementById("writeHere").innerHTML = storyString;
  // }
}
