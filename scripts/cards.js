/*
	
	1. The title of the card
	2. Flavour
	3. Action
	4. The Days (will randomly pick one)
	5. The image to use
	6. (Optional) a list to replace []

*/
var Cards = {
Curses: [
["Spoiled Brat",
"WX-78's eating habits have opened your mind to trying new things.",
"You may only eat stale or spoiled food.",
[5],
"hunger.png",
],
["Vegetarian",
"Because it's the hip thing to do, and the Tallbird population is getting kinda low..",
"You may not eat any meat.",
[5],
"hunger.png",
],
["No Leftovers!",
"Even the thought of bacteria build up makes you queezy.",
"You must discard all current food at the end of every night.",
[5],
"hunger.png",
],
["Midnight Snack",
"Hmm.. can't prototype a belt, better lay off for a day or two.",
"You can only eat at night.. from the fridge.",
[5],
"hunger.png",
],
["The Wolf In You",
"It's not as bad as it looks/smells/tastes/digests!",
"You may only eat monster meat.",
[5],
"hunger.png",
],
["The Memory Effect",
"Lately your food hasn't been quite as filling, time to reset!",
"You may not eat unless you are less than 15 hunger.",
[5],
"hunger.png",
],
["Flop Chef",
"Wow, that was disgusting.",
"You can't cook ANYTHING.",
[5],
"hunger.png",
],
["Food Allergies",
"You have developed a rash and believe that eating [] has caused it.",
"You may not eat any [].",
[5],
"hunger.png",
["Bacon and Eggs", "Berries", "Carrot", "Cooked Meat", "Drumstick", "Honey Nuggets", "Meat", "Morsel", "Popcorn", "Roasted Berries", "Roasted Carrot", "Seeds", "Toasted Seeds", "Waffles"],
],
["The Happening",
"They're fighting back! Better lay low for a while..",
"You may not harvest any grass, seeds, berries, flowers or carrots.",
[5],
"gathering.png",
],
["Tree Lover",
"Let down your hair, cut back on showers and be one with the land.",
"You may not chop down any trees.",
[5],
"gathering.png",
],
["Do You Wanna",
"Long nights have left your hands tender, better lay off the manual labor for a bit.",
"You may not handle any rocks.",
[5],
"gathering.png",
],
["Roly Poly..",
"Let's be honest, they weren't good dancers anyways.",
"You may not fish.",
[5],
"gathering.png",
],
["Smokey the Feared",
"A close encouter with an errant spark has left you feeling on edge.",
"You may not light a campfire, or light a torch.",
[5],
"camp.png",
],
["Bee-loved Friends",
"The buzzing is driving you nuts! Better do something about it..",
"You may not have any bee boxes and must kill all your current bees.",
[5],
"camp.png",
],
["Apprentice",
"Some of your latest creations have been underperforming, better study up!",
"You may not prototype any objects.",
[5],
"camp.png",
],
["Noctural",
"I'M NOT THE ONLY ONE WHO HEARD THAT, RIGHT GUYS?",
"You may not sleep during the night.",
[5],
"camp.png",
],
["404!",
"CAMPSITE NOT FOUND.",
"You may not return to your original campsite.",
[5],
"camp.png",
],
["The Virgo",
"It's easier to find everything when it's laid out in front of you anyways.",
"Smash all chests and keep inventory on the ground until needed.",
[5],
"camp.png",
],
["Itchy Skin",
"A recent outbreak amongst the person of your village requires that you travel light.",
"You may not use any armor.",
[5],
"attack.png",
],
["That's Hot!",
"While cooking food, you are distracted by the chirping birds and burn your hands.",
"You may not hold anything in your main hand.",
[5],
"attack.png",
],
["Animal Lover",
"You could've sworn that Redbird smiled at you..",
"You may not kill any creatures.",
[5],
"attack.png",
],
["The Hard Way",
"They were giving you an unfair advantage anyways..",
"You may not use any traps.",
[5],
"attack.png",
],
["Locked Away",
"You seemed to have dropped the key to your chests while you were exploring.",
"You may not open any of your chests.",
[5],
"misc.png",
],
["Mapped Memory",
"They should've just stuck with Google Maps..",
"You may not open your map.",
[5],
"map.png",
],
["ERROR 37",
"You've spent all day trying to connect and have expended your chips and Dew stash. You feel weak.",
"You may only use 6 inventory slots and cannot carry a backpack.",
[5],
"misc.png",
],
["Paranoia",
"You have suddenly developed a fear of [].",
"You must drop all stacks of [] out of sight of camp and may not pick up more.",
[5],
"misc.png",
["Beefalo Wool", "Boards", "Charcoal", "Crow Feather", "Cut Grass", "Cut Reeds", "Cut Stone", "Flint", "Gold Nuggets", "Hound's Tooth", "Logs", "Mandrakes", "Manure", "Miner Hats", "Pig Skin", "Pine Cones", "Redbird Feather", "Rocks", "Rope", "Silk", "Straw Rolls", "Twigs"],
],
["THWACK!",
"You hammer a finger and swear off making new tools for a few days, certain that it was done maliciously.",
"You may not craft any new tools.",
[5],
"misc.png",
],
["Arrogance",
"A successful encounter with the neighborhood rabbit has left you feeling pretty confident.",
"Destroy all meat effigies",
[5],
"misc.png",
],
["Neck Crick",
"You wake up with a pain in your shoulder, best take it easy for a few days.",
"You can not use a backpack.",
[5],
"misc.png",
],
["Friday the...",
"Show the world you do not have triskaidekaphobia.",
"Carry around 13 stacks of 13 items.",
[5],
"misc.png",
],
["Sacrificial Everything",
"You have angered the gods and a 1:1 sacrifice must be made.. on everything.",
"When you craft you must make two of the item, then destroy one.",
[5],
"misc.png",
],
["Fat Bastard",
"Everything you touch turns to gold.. well, it will when you're done.",
"You must fill your backpack with 8 full stacks of gold.",
[5],
"misc.png",
],
],

Quests: [
["Matchmaker",
"Friends who slay together, stay together!",
"Befriend a pig and kill vicious foes together!",
null,
"pighappy.png",
],
["It Takes A Village",
"If you build it, they will come.",
"Create 8 pig houses without using the pig house recipe. Get creative.",
null,
"pighomes.png",
],
["GOBBLES!",
"Training the bird to jump through a hoop of fire is optional.",
"Trap a Gobbler with wood walls.",
null,
"gobbler.png",
],
["Whack 'em",
"They don't like you, they run away from you, screaming... Make them pay!",
"Eat 3 cooked morsel obtained by killing rabbits, no traps allowed!",
null,
"rabbit.png",
],
["Picky Eater",
"Lately you have been having some strange cravings. No other food seems to do the trick!",
"Select a random crock-pot recipe, cook it, and eat it... 10 times.",
null,
"cooking.png",
],
["Pyromania",
"Some people just like to watch the world burn.",
"Burn every tree in sight until a fresh torch runs out.",
null,
"burn.png",
],
["Hiding in the Dark",
"You are afraid of what could be hiding in the darkness.",
"Your character may not move during the next night.",
null,
"darkness.png",
],
["Hills like White Koalefant",
"It may not be the most dangerous game, but dammit if it still ain't a sumbitch to track down!",
"Hunt down a Koalefant.",
null,
"koalefant.png",
],
["Livin' on the Edge",
"You've had it too good lately, better go hug a spider nest.",
"Take damage until you have less than 25 health, then heal to full.",
null,
"burn.png",
],
["Butting Horns",
"Lately you have been feeling weak and inferior in this harsh and unforgiving world.",
"Defeat a Beefalo while wearing a Beefalo hat.",
null,
"beefaloattack.png",
],
["Kindled Bees",
"I don't want to set the bees on fire. I just want to start a flame in your hive!",
"Set fire to 2 bee hives and kill all of the bees that spawn.",
null,
"burn.png",
],
["Adding Assault to Injury",
"You decide to step up and stand your ground.",
"Defeat all hostiles that venture close.",
null,
"attack.png",
],
["Jumanji - Stampede",
"The Beefalo are riled up and there's no stopping them.",
"Put down 3 Beefalo without armor.",
null,
"redbum.png",
],
["Jumanji - The Swamps",
"A friendly tentacle arm has invited you over for a slumber party. Yay!",
"Spend a day in a swamp with no armor and only torches.",
null,
"spiderbattle.png",
],
["Jumanji - Spiders",
"Need a hand? Why you just wait, we'll help you out, we each have eight.",
"Defeat 5 spider nests in one night.",
null,
"spiderbattle.png",
],
["Corruption",
"They all wanted to protect something, but in their fervor they lost they way, and their mind.",
"Kill a Tallbird, a Beefalo, a Spider, a Tentacle Arm and a Ghost.",
null,
"treeonfire.png",
],
["De-throned",
"I just can't wait to be king...",
"Kill a Spider Queen",
null,
"spiderqueenhat.png",
],
["Blood Lust",
"The stench of the living is overbearing, better bring some balance to your surroundings.",
"Kill all living animals you see.",
null,
"hounds.png",
],
["Civil War",
"FFFFREEEEDDDDOOOOMMMMMM",
"Gain the trust of 5 pigs and battle and defeat 5 enemy pigs.",
null,
"dashing.png",
],
["Battle Royale",
"Whose side will you take?",
"Defeat 5 pigs, 5 spiders in any order.",
null,
"spiderqueenhat.png",
],
["Thanksgiving!",
"You weren't exactly invited so be sure to bring enough for everyone.. or else.",
"You have to kill a turkey before the day is over, or burn all berry bushes on your explored map.",
null,
"gobbler.png",
],
["I'll Huff And I'll Puff",
"You remember a fairytale your mother used to read to you...",
"Destroy 3 pig houses and build 1 hay, 1 wood and 1 stone house. Get creative.",
null,
"pigkilling.png",
],
["ADHwhatnow?",
"You start the day with a severe sweet tooth.",
"Add 3 bee boxes to your camp.",
null,
"aghost.png",
],
["Gold Digger!",
"Former inhabitants of this world have left things behind for the taking.",
"Loot 10 graves and only keep 2 of the items.",
null,
"aghost.png",
],
["Loneliness",
"How we need another soul to cling to.",
"Find 3 pigs to accompany you during your curse.",
null,
"lonely.png",
],
["Tooled up.",
"Sometimes you can never be too prepared for the dangers ahead.",
"Craft and carry 10 spears and 2 log suits, just in case.",
null,
"hurdyoulikespears.png",
],
["Gold-en Pity",
"You discover that all of your gold is actually pyrite, fool's gold!",
"Destroy all the gold in your inventory and camp.",
null,
"tomuchgold.png",
],
["New Horizons",
"The burning desire to travel to new lands suddenly fills your heart.",
"Move whatever you can to an undiscovered location, everything left behind is considered lost.",
null,
"horizons.png",
],
["Rumbling Below",
"It's like Tremors, minus the dynamite, terrible animatronics and bacon.",
"Collect 5 grass, logs, rocks, flint and silk and go through a wormhole.",
null,
"wormhole.png",
],
["Giving 'til it Hurts",
"You have the sudden urge to help those less fortunate than you.",
"Donate your armor and food to the nearest pig village.",
null,
"dashing.png",
],
["Teamwork",
"This is what happens when you break my leg.",
"Get a pig to attack you once, then kill him using a bee mine.",
null,
"beemine.png",
],
["Don't 5hoot Me!",
"I'm sorry, you have a backpack",
"Get a creature to chase you 5 times around camp, while wearing a backpack.",
null,
"backpack.png",
],
["Social Butterfly",
"Current relations aren't working out, time for new friends!",
"Go find chester, don't come back until you do. If you have him, go lose him in a marsh.",
null,
"chester.png",
],


["Sims Style",
"You may be a cruel son of a bitch, but no one's denying it's funny!",
"Put a pig in a 1x1 room with a campfire and torch the place.",
null,
"pigkilling.png",
],
["No Food Left Behind",
"You feel the underpants gnomes have resorted to pillaging and decide to take matters into your own hands.",
"You must carry all food on your person, at all times.",
null,
"hunger.png",
],

],

};
