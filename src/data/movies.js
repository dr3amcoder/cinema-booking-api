const movieList = {
    movies: [
        {
            id: 1,
            name: "Goat",
            description: "A family film regarding animal, with a goat as a lead actor",
            genre: "Family",
            imdbRating: "7/10",
            price: 10
        },
        {
            id: 2,
            name: "Action Movie",
            description: "An exciting action film",
            genre: "Action",
            imdbRating: "8/10",
            price: 12
        },
        {
            id: 3,
            name: "Comedy Special",
            description: "A hilarious comedy",
            genre: "Comedy",
            imdbRating: "6/10",
            price: 8
        },
        {
            id: 4,
            name: "Drama Film",
            description: "A touching drama",
            genre: "Drama",
            imdbRating: "9/10",
            price: 15
        },
        {
            id: 5,
            name: "Midnight Run",
            description: "A thrilling chase through the city streets at midnight",
            genre: "Action",
            imdbRating: "7.5/10",
            price: 12
        },
        {
            id: 6,
            name: "Laugh Out Loud",
            description: "A stand-up comedy special that will leave you in stitches",
            genre: "Comedy",
            imdbRating: "6.8/10",
            price: 10
        },
        {
            id: 7,
            name: "The Last Stand",
            description: "Epic western showdown in the dusty plains",
            genre: "Western",
            imdbRating: "8.2/10",
            price: 14
        },
        {
            id: 8,
            name: "Space Odyssey 2049",
            description: "Journey to the edge of the universe",
            genre: "Sci-Fi",
            imdbRating: "8.9/10",
            price: 16
        },
        {
            id: 9,
            name: "Haunted Mansion",
            description: "A spooky tale of ghosts and mysteries",
            genre: "Horror",
            imdbRating: "5.5/10",
            price: 11
        },
        {
            id: 10,
            name: "Love in Paris",
            description: "Romantic comedy set in the city of love",
            genre: "Romance",
            imdbRating: "7.3/10",
            price: 13
        },
        {
            id: 11,
            name: "The Detective",
            description: "A gritty noir mystery in the rainy city",
            genre: "Mystery",
            imdbRating: "8.1/10",
            price: 14
        },
        {
            id: 12,
            name: "Ocean's Deep",
            description: "Underwater adventure to find lost treasure",
            genre: "Adventure",
            imdbRating: "7.7/10",
            price: 13
        },
        {
            id: 13,
            name: "The Great Escape",
            description: "WWII prisoners plan an impossible escape",
            genre: "War",
            imdbRating: "8.6/10",
            price: 15
        },
        {
            id: 14,
            name: "Funny Bones",
            description: "A family comedy about clumsy skeletons",
            genre: "Family",
            imdbRating: "6.9/10",
            price: 9
        },
        {
            id: 15,
            name: "Speed Demon",
            description: "High-octane racing and illegal street competitions",
            genre: "Action",
            imdbRating: "7.2/10",
            price: 12
        },
        {
            id: 16,
            name: "The Joke's on You",
            description: "A prankster gets more than he bargained for",
            genre: "Comedy",
            imdbRating: "6.1/10",
            price: 8
        },
        {
            id: 17,
            name: "Sherlock Returns",
            description: "The famous detective solves his toughest case yet",
            genre: "Mystery",
            imdbRating: "8.4/10",
            price: 14
        },
        {
            id: 18,
            name: "Dragon's Quest",
            description: "Fantasy adventure to save the kingdom",
            genre: "Fantasy",
            imdbRating: "7.8/10",
            price: 13
        },
        {
            id: 19,
            name: "Terror in the Woods",
            description: "Campers encounter something unnatural",
            genre: "Horror",
            imdbRating: "4.8/10",
            price: 10
        },
        {
            id: 20,
            name: "Hearts Aligned",
            description: "Two souls find each other against all odds",
            genre: "Romance",
            imdbRating: "7.6/10",
            price: 12
        },
        {
            id: 21,
            name: "Code Breaker",
            description: "Cyber thriller about hacking and conspiracy",
            genre: "Thriller",
            imdbRating: "8.0/10",
            price: 14
        },
        {
            id: 22,
            name: "The Lost City",
            description: "Archaeologists discover an ancient civilization",
            genre: "Adventure",
            imdbRating: "7.4/10",
            price: 13
        },
        {
            id: 23,
            name: "Battle Lines",
            description: "Civil war drama about divided families",
            genre: "War",
            imdbRating: "8.3/10",
            price: 15
        },
        {
            id: 24,
            name: "Puppy Love",
            description: "A heartwarming tale of a girl and her dog",
            genre: "Family",
            imdbRating: "7.1/10",
            price: 9
        },
        {
            id: 25,
            name: "Explosion Zone",
            description: "Explosive action in the war zone",
            genre: "Action",
            imdbRating: "6.7/10",
            price: 11
        },
        {
            id: 26,
            name: "Stand-Up Central",
            description: "Comedy showcase featuring top comedians",
            genre: "Comedy",
            imdbRating: "7.0/10",
            price: 10
        },
        {
            id: 27,
            name: "The Cowboy Way",
            description: "Modern cowboy faces new challenges",
            genre: "Western",
            imdbRating: "7.5/10",
            price: 12
        },
        {
            id: 28,
            name: "Mars Colony",
            description: "First human settlement on the red planet",
            genre: "Sci-Fi",
            imdbRating: "8.5/10",
            price: 16
        },
        {
            id: 29,
            name: "Nightmare Fuel",
            description: "Psychological horror that will keep you up",
            genre: "Horror",
            imdbRating: "5.2/10",
            price: 11
        },
        {
            id: 30,
            name: "Summer Romance",
            description: "Beach love story that changes everything",
            genre: "Romance",
            imdbRating: "6.8/10",
            price: 12
        },
        {
            id: 31,
            name: "The Missing File",
            description: "Political thriller about classified documents",
            genre: "Thriller",
            imdbRating: "8.2/10",
            price: 14
        },
        {
            id: 32,
            name: "Jungle Trek",
            description: "Expedition through dangerous Amazon rainforest",
            genre: "Adventure",
            imdbRating: "7.3/10",
            price: 13
        },
        {
            id: 33,
            name: "Home Front",
            description: "WWII story from the home perspective",
            genre: "War",
            imdbRating: "8.7/10",
            price: 15
        },
        {
            id: 34,
            name: "Magic School",
            description: "Young wizards learn to control their powers",
            genre: "Family",
            imdbRating: "7.9/10",
            price: 11
        },
        {
            id: 35,
            name: "Fast Lane",
            description: "Street racing with high stakes",
            genre: "Action",
            imdbRating: "6.9/10",
            price: 12
        },
        {
            id: 36,
            name: "The Prank War",
            description: "Comedy about escalating practical jokes",
            genre: "Comedy",
            imdbRating: "6.4/10",
            price: 9
        },
        {
            id: 37,
            name: "Murder Mystery",
            description: "Classic whodunit in a mansion",
            genre: "Mystery",
            imdbRating: "7.8/10",
            price: 13
        },
        {
            id: 38,
            name: "Enchanted Forest",
            description: "Magical creatures and ancient spells",
            genre: "Fantasy",
            imdbRating: "7.6/10",
            price: 13
        },
        {
            id: 39,
            name: "The Asylum",
            description: "Found footage horror in abandoned hospital",
            genre: "Horror",
            imdbRating: "4.5/10",
            price: 10
        },
        {
            id: 40,
            name: "Love Letters",
            description: "Historical romance through correspondence",
            genre: "Romance",
            imdbRating: "8.0/10",
            price: 13
        },
        {
            id: 41,
            name: "The Conspiracy",
            description: "Government cover-up exposed by journalist",
            genre: "Thriller",
            imdbRating: "8.1/10",
            price: 14
        },
        {
            id: 42,
            name: "Mountain Rescue",
            description: "Climbers trapped during avalanche",
            genre: "Adventure",
            imdbRating: "7.5/10",
            price: 13
        },
        {
            id: 43,
            name: "The General",
            description: "Civil War general's difficult decisions",
            genre: "War",
            imdbRating: "8.4/10",
            price: 15
        },
        {
            id: 44,
            name: "Animal Friends",
            description: "Animated adventure for young children",
            genre: "Family",
            imdbRating: "6.8/10",
            price: 8
        },
        {
            id: 45,
            name: "Combat Zone",
            description: "Elite soldiers on impossible mission",
            genre: "Action",
            imdbRating: "7.3/10",
            price: 12
        },
        {
            id: 46,
            name: "Office Comedy",
            description: "Hilarious mishaps in corporate workplace",
            genre: "Comedy",
            imdbRating: "6.6/10",
            price: 9
        },
        {
            id: 47,
            name: "The Alibi",
            description: "Courtroom drama with surprising twist",
            genre: "Mystery",
            imdbRating: "7.9/10",
            price: 13
        },
        {
            id: 48,
            name: "Time Paradox",
            description: "Sci-fi adventure through different eras",
            genre: "Sci-Fi",
            imdbRating: "8.3/10",
            price: 15
        },
        {
            id: 49,
            name: "Creepy Dolls",
            description: "Haunted dolls terrorize new owners",
            genre: "Horror",
            imdbRating: "5.0/10",
            price: 10
        },
        {
            id: 50,
            name: "Wedding Crashers",
            description: "Unlikely romance at chaotic wedding",
            genre: "Romance",
            imdbRating: "7.2/10",
            price: 12
        },
        {
            id: 51,
            name: "The Witness",
            description: "Thriller about protecting key witness",
            genre: "Thriller",
            imdbRating: "8.0/10",
            price: 14
        },
        {
            id: 52,
            name: "Desert Storm",
            description: "Survival in harsh desert conditions",
            genre: "Adventure",
            imdbRating: "7.4/10",
            price: 13
        },
        {
            id: 53,
            name: "The Front Line",
            description: "Soldiers' stories from modern warfare",
            genre: "War",
            imdbRating: "8.5/10",
            price: 15
        },
        {
            id: 54,
            name: "Super Pets",
            description: "Animals with superpowers save the day",
            genre: "Family",
            imdbRating: "7.0/10",
            price: 10
        },
        {
            id: 55,
            name: "Urban Warfare",
            description: "Special forces in city combat",
            genre: "Action",
            imdbRating: "7.6/10",
            price: 13
        },
        {
            id: 56,
            name: "The Roast",
            description: "Comedy roast of famous celebrity",
            genre: "Comedy",
            imdbRating: "6.7/10",
            price: 10
        },
        {
            id: 57,
            name: "Cold Case",
            description: "Detective solves decades-old murder",
            genre: "Mystery",
            imdbRating: "8.2/10",
            price: 14
        },
        {
            id: 58,
            name: "Dragon Riders",
            description: "Epic fantasy with dragons and magic",
            genre: "Fantasy",
            imdbRating: "7.7/10",
            price: 13
        },
        {
            id: 59,
            name: "The Cult",
            description: "Investigative horror about mysterious cult",
            genre: "Horror",
            imdbRating: "5.8/10",
            price: 11
        },
        {
            id: 60,
            name: "Second Chances",
            description: "Love story about rekindling old romance",
            genre: "Romance",
            imdbRating: "7.4/10",
            price: 12
        },
        {
            id: 61,
            name: "The Double Agent",
            description: "Spy thriller with double-crossing agents",
            genre: "Thriller",
            imdbRating: "8.4/10",
            price: 15
        },
        {
            id: 62,
            name: "Arctic Expedition",
            description: "Scientists discover something in ice",
            genre: "Adventure",
            imdbRating: "7.5/10",
            price: 13
        },
        {
            id: 63,
            name: "The Platoon",
            description: "Gritty war film about brotherhood",
            genre: "War",
            imdbRating: "8.6/10",
            price: 15
        },
        {
            id: 64,
            name: "Space Camp",
            description: "Kids' adventure at space training facility",
            genre: "Family",
            imdbRating: "7.1/10",
            price: 10
        },
        {
            id: 65,
            name: "Car Chase",
            description: "Non-stop pursuit through multiple cities",
            genre: "Action",
            imdbRating: "7.0/10",
            price: 12
        },
        {
            id: 66,
            name: "The Improv",
            description: "Comedy about struggling improv group",
            genre: "Comedy",
            imdbRating: "6.5/10",
            price: 9
        },
        {
            id: 67,
            name: "The Inheritance",
            description: "Mystery surrounding wealthy family's will",
            genre: "Mystery",
            imdbRating: "7.8/10",
            price: 13
        },
        {
            id: 68,
            name: "Robot Revolution",
            description: "AI gains consciousness and fights back",
            genre: "Sci-Fi",
            imdbRating: "8.1/10",
            price: 15
        },
        {
            id: 69,
            name: "The Haunting",
            description: "Classic ghost story in old mansion",
            genre: "Horror",
            imdbRating: "5.6/10",
            price: 10
        },
        {
            id: 70,
            name: "Blind Date",
            description: "Romantic comedy about disastrous first date",
            genre: "Romance",
            imdbRating: "6.9/10",
            price: 11
        },
        {
            id: 71,
            name: "The Fugitive",
            description: "Man on the run from law enforcement",
            genre: "Thriller",
            imdbRating: "8.3/10",
            price: 14
        },
        {
            id: 72,
            name: "Volcano Eruption",
            description: "Disaster adventure during volcanic eruption",
            genre: "Adventure",
            imdbRating: "7.2/10",
            price: 13
        },
        {
            id: 73,
            name: "The Sniper",
            description: "War film from sniper's perspective",
            genre: "War",
            imdbRating: "8.0/10",
            price: 14
        },
        {
            id: 74,
            name: "Circus Adventure",
            description: "Family fun under the big top",
            genre: "Family",
            imdbRating: "6.7/10",
            price: 9
        },
        {
            id: 75,
            name: "Fight Club",
            description: "Underground fighting tournament",
            genre: "Action",
            imdbRating: "7.4/10",
            price: 12
        },
        {
            id: 76,
            name: "The Tourist",
            description: "Comedy about lost tourist in foreign city",
            genre: "Comedy",
            imdbRating: "6.3/10",
            price: 9
        },
        {
            id: 77,
            name: "The Murderer",
            description: "Psychological thriller about serial killer",
            genre: "Mystery",
            imdbRating: "8.5/10",
            price: 15
        },
        {
            id: 78,
            name: "Magic Kingdom",
            description: "Fantasy realm in danger of destruction",
            genre: "Fantasy",
            imdbRating: "7.6/10",
            price: 13
        },
        {
            id: 79,
            name: "The Curse",
            description: "Ancient curse terrorizes small town",
            genre: "Horror",
            imdbRating: "5.3/10",
            price: 10
        },
        {
            id: 80,
            name: "Perfect Match",
            description: "Dating app leads to unexpected romance",
            genre: "Romance",
            imdbRating: "7.1/10",
            price: 12
        },
        {
            id: 81,
            name: "The Hacker",
            description: "Cybersecurity expert vs master hacker",
            genre: "Thriller",
            imdbRating: "8.2/10",
            price: 14
        },
        {
            id: 82,
            name: "Island Survival",
            description: "Plane crash survivors on remote island",
            genre: "Adventure",
            imdbRating: "7.3/10",
            price: 13
        },
        {
            id: 83,
            name: "The Recruit",
            description: "New soldier's journey through basic training",
            genre: "War",
            imdbRating: "7.8/10",
            price: 14
        },
        {
            id: 84,
            name: "Toy Story",
            description: "Toys come to life when humans aren't looking",
            genre: "Family",
            imdbRating: "8.4/10",
            price: 11
        },
        {
            id: 85,
            name: "The Heist",
            description: "Team plans impossible casino robbery",
            genre: "Action",
            imdbRating: "7.7/10",
            price: 13
        },
        {
            id: 86,
            name: "The Reunion",
            description: "High school reunion comedy chaos",
            genre: "Comedy",
            imdbRating: "6.8/10",
            price: 10
        },
        {
            id: 87,
            name: "The Detective 2",
            description: "Sequel to hit detective mystery",
            genre: "Mystery",
            imdbRating: "8.0/10",
            price: 14
        },
        {
            id: 88,
            name: "Alien Contact",
            description: "First communication with extraterrestrials",
            genre: "Sci-Fi",
            imdbRating: "8.6/10",
            price: 16
        },
        {
            id: 89,
            name: "The Possession",
            description: "Demon possession horror film",
            genre: "Horror",
            imdbRating: "5.4/10",
            price: 10
        },
        {
            id: 90,
            name: "Love Triangle",
            description: "Complicated romance with three people",
            genre: "Romance",
            imdbRating: "6.9/10",
            price: 11
        },
        {
            id: 91,
            name: "The Stalker",
            description: "Psychological thriller about obsession",
            genre: "Thriller",
            imdbRating: "8.1/10",
            price: 14
        },
        {
            id: 92,
            name: "Deep Sea Dive",
            description: "Explorers find ancient underwater city",
            genre: "Adventure",
            imdbRating: "7.5/10",
            price: 13
        },
        {
            id: 93,
            name: "The Veterans",
            description: "War veterans dealing with PTSD",
            genre: "War",
            imdbRating: "8.7/10",
            price: 15
        },
        {
            id: 94,
            name: "Pet Adventures",
            description: "Animals embark on cross-country journey",
            genre: "Family",
            imdbRating: "7.2/10",
            price: 10
        },
        {
            id: 95,
            name: "The Rescue",
            description: "Hostage rescue operation thriller",
            genre: "Action",
            imdbRating: "7.6/10",
            price: 13
        },
        {
            id: 96,
            name: "The Wedding",
            description: "Comedy about everything going wrong",
            genre: "Comedy",
            imdbRating: "6.7/10",
            price: 10
        },
        {
            id: 97,
            name: "The Killer",
            description: "Assassin with moral crisis",
            genre: "Mystery",
            imdbRating: "8.3/10",
            price: 15
        },
        {
            id: 98,
            name: "Future World",
            description: "Dystopian sci-fi adventure",
            genre: "Sci-Fi",
            imdbRating: "8.0/10",
            price: 15
        },
        {
            id: 99,
            name: "The Darkness",
            description: "Supernatural horror in small town",
            genre: "Horror",
            imdbRating: "5.7/10",
            price: 11
        },
        {
            id: 100,
            name: "Happy Ending",
            description: "Feel-good romance with perfect ending",
            genre: "Romance",
            imdbRating: "7.3/10",
            price: 12
        }
    ]
}

module.exports = movieList;
