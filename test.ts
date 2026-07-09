import { runemetricsResponseSchema} from './src/validation/runemetrics';

const json = {
	"magic": 23529761,
	"questsstarted": 2,
	"totalskill": 2675,
	"questscomplete": 318,
	"questsnotstarted": 42,
	"totalxp": 390831645,
	"ranged": 26498301,
	"activities": [
		{
			"date": "25-Mar-2026 04:13",
			"details": "I have unlocked a total of 1250 songs, the last of which was Hollow Hill.",
			"text": "1250 songs unlocked"
		},
		{
			"date": "25-Mar-2026 04:08",
			"details": "After putting Silverquill, the Dreadhog, back into hibernation, I found a sanguine spine",
			"text": "I found a sanguine spine"
		},
		{
			"date": "25-Mar-2026 03:56",
			"details": "With the aid of a vampyre named Anya, I destroyed the sanguine heart near Wendlewick and saved the village from the blight it was spreading.",
			"text": "Quest complete: Hearts of Sanguine"
		},
		{
			"date": "23-Mar-2026 21:55",
			"details": "I mentored an aspiring young wizard, Ben, in the ways of the runes.",
			"text": "Quest complete: Wiz Kid"
		},
		{
			"date": "23-Mar-2026 21:32",
			"details": "I received a vision calling me to the ancient and beautiful land of Havenhythe, and helped the villagers of Wendlewick construct a lodestone.",
			"text": "Quest complete: Visions of Havenhythe"
		},
		{
			"date": "03-Mar-2026 18:18",
			"details": "I now have at least 88000000 experience points in the Thieving skill.",
			"text": "88000000XP in Thieving"
		},
		{
			"date": "03-Mar-2026 06:55",
			"details": "I now have at least 86000000 experience points in the Thieving skill.",
			"text": "86000000XP in Thieving"
		},
		{
			"date": "03-Mar-2026 06:55",
			"details": "I levelled my Thieving skill, I am now level 118.",
			"text": "Levelled up Thieving."
		},
		{
			"date": "03-Mar-2026 02:35",
			"details": "I levelled my Invention skill, I am now level 111.",
			"text": "Levelled up Invention."
		},
		{
			"date": "01-Mar-2026 17:27",
			"details": "I now have at least 84000000 experience points in the Thieving skill.",
			"text": "84000000XP in Thieving"
		},
		{
			"date": "27-Feb-2026 19:54",
			"details": "I levelled my Archaeology skill, I am now level 97.",
			"text": "Levelled up Archaeology."
		},
		{
			"date": "26-Feb-2026 06:10",
			"details": "I now have at least 58000000 experience points in the Invention skill.",
			"text": "58000000XP in Invention"
		},
		{
			"date": "25-Feb-2026 09:51",
			"details": "I levelled my Invention skill, I am now level 110.",
			"text": "Levelled up Invention."
		},
		{
			"date": "25-Feb-2026 04:26",
			"details": "After killing a Abyssal demon, it dropped an abyssal whip.",
			"text": "I found an abyssal whip"
		},
		{
			"date": "24-Feb-2026 21:01",
			"details": "I now have at least 82000000 experience points in the Thieving skill.",
			"text": "82000000XP in Thieving"
		},
		{
			"date": "24-Feb-2026 20:50",
			"details": "I have solved one of Gielinor's greatest mysteries.",
			"text": "Solved an archaeological mystery."
		},
		{
			"date": "24-Feb-2026 20:13",
			"details": "I now have at least 56000000 experience points in the Invention skill.",
			"text": "56000000XP in Invention"
		},
		{
			"date": "24-Feb-2026 19:24",
			"details": "I now have at least 80000000 experience points in the Thieving skill.",
			"text": "80000000XP in Thieving"
		},
		{
			"date": "24-Feb-2026 05:58",
			"details": "I now have at least 78000000 experience points in the Thieving skill.",
			"text": "78000000XP in Thieving"
		},
		{
			"date": "23-Feb-2026 06:39",
			"details": "I levelled my Thieving skill, I am now level 117.",
			"text": "Levelled up Thieving."
		}
	],
	"skillvalues": [
		{
			"level": 118,
			"xp": 888541269,
			"rank": 65136,
			"id": 17
		},
		{
			"level": 111,
			"xp": 597089859,
			"rank": 142346,
			"id": 26
		},
		{
			"level": 108,
			"xp": 338955661,
			"rank": 100937,
			"id": 28
		},
		{
			"level": 99,
			"xp": 264983017,
			"rank": 174689,
			"id": 3
		},
		{
			"level": 99,
			"xp": 235297615,
			"rank": 60830,
			"id": 5
		},
		{
			"level": 99,
			"xp": 138360260,
			"rank": 174922,
			"id": 11
		},
		{
			"level": 99,
			"xp": 131122889,
			"rank": 262607,
			"id": 6
		},
		{
			"level": 99,
			"xp": 130414256,
			"rank": 269179,
			"id": 2
		},
		{
			"level": 99,
			"xp": 130403762,
			"rank": 274078,
			"id": 1
		},
		{
			"level": 99,
			"xp": 130372298,
			"rank": 256760,
			"id": 0
		},
		{
			"level": 97,
			"xp": 116302916,
			"rank": 173882,
			"id": 27
		},
		{
			"level": 96,
			"xp": 98514127,
			"rank": 228284,
			"id": 23
		},
		{
			"level": 94,
			"xp": 81032490,
			"rank": 253727,
			"id": 13
		},
		{
			"level": 93,
			"xp": 72108355,
			"rank": 261483,
			"id": 9
		},
		{
			"level": 92,
			"xp": 70035338,
			"rank": 256679,
			"id": 14
		},
		{
			"level": 91,
			"xp": 61605296,
			"rank": 262081,
			"id": 18
		},
		{
			"level": 90,
			"xp": 54622838,
			"rank": 229423,
			"id": 22
		},
		{
			"level": 90,
			"xp": 54343397,
			"rank": 243876,
			"id": 16
		},
		{
			"level": 88,
			"xp": 46416772,
			"rank": 302187,
			"id": 15
		},
		{
			"level": 88,
			"xp": 45360755,
			"rank": 320759,
			"id": 4
		},
		{
			"level": 87,
			"xp": 40450310,
			"rank": 279310,
			"id": 12
		},
		{
			"level": 86,
			"xp": 37652382,
			"rank": 240059,
			"id": 19
		},
		{
			"level": 85,
			"xp": 33995218,
			"rank": 249309,
			"id": 25
		},
		{
			"level": 83,
			"xp": 28756210,
			"rank": 360780,
			"id": 8
		},
		{
			"level": 80,
			"xp": 20916542,
			"rank": 269679,
			"id": 21
		},
		{
			"level": 79,
			"xp": 19613173,
			"rank": 322056,
			"id": 24
		},
		{
			"level": 78,
			"xp": 17599643,
			"rank": 361085,
			"id": 10
		},
		{
			"level": 76,
			"xp": 14291172,
			"rank": 393537,
			"id": 7
		},
		{
			"level": 72,
			"xp": 9158762,
			"rank": 312600,
			"id": 20
		}
	],
	"name": "cj enjoyer",
	"rank": "195,059",
	"melee": 201936010,
	"combatlevel": 143,
	"loggedIn": "false"
}

console.log(runemetricsResponseSchema.parse(json));
