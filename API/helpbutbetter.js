const items = [
    {
        "id": 1,
        "name": "Wilhelm von Closen's Estate",
        "description": "Where Albrecht von Closen wintered in 1815, and where Rudolph Ziegler stole the coin that von Closen took from the mausoleum, leading to his death (MAG023: Schwartzwald). And where Albrecht slowly deteriorated many years later (MAG127: Remains to be Seen)",
        "coords": {
            "latitude": 48.2400948,
            "longitude": 8.3575171
        }
    },
    {
        "id": 2,
        "name": "Port of Southampton",
        "description": "Where Carlita Sloane disembarked from the Tundra (MAG033: Boatswain's Call). Where Mikaele Salesa disembarked for the last time and faked his death (MAG141: Doomed Voyage)",
        "coords": {
            "latitude": 50.8967933,
            "longitude": -1.4059596
        }
    },
    {
        "id": 3,
        "name": "Mary Keay's Childhood Home",
        "description": "Where Mary Keay grew up (MAG 62: First Edition)",
        "coords": {
            "latitude": 51.5159685,
            "longitude": -0.0607722
        }
    },
    {
        "id": 4,
        "name": "St. Paul's Church",
        "description": "Where Erin Gallagher-Nelson witnessed her brother-in-law's death via The Dark (MAG 63: The End of the Tunnel)",
        "coords": {
            "latitude": 51.5566134,
            "longitude": -0.0742337
        }
    },
    {
        "id": 5,
        "name": "Desert Tomb",
        "description": "Where Donna Gwynne witnessed an undead mummy (MAG 64: Burial Rites)",
        "coords": {
            "latitude": 29.4193426,
            "longitude": 31.9090655
        }
    },
    {
        "id": 6,
        "name": "Port of Portsmouth",
        "description": "Where Vincent Yang was trapped in a crate amongst Mikaele Salesa's imports (MAG 66: Held in Customs)",
        "coords": {
            "latitude": 50.8012631,
            "longitude": -1.1088662
        }
    },
    {
        "id": 7,
        "name": "Wood Green Dump",
        "description": "Where Joseph Russo discovered an unusual copy of The Tale of a Field Hospital, leading to his death by infection (MAG 68: The Tale of a Field Hospital)",
        "coords": {
            "latitude": 51.5945263,
            "longitude": -0.1161214
        }
    },
    {
        "id": 8,
        "name": "University of Surrey",
        "description": "Where a psychology experiment took place that turned Annabelle Cane into an Avatar of The Web (MAG 69: Thought for the Day)",
        "coords": {
            "latitude": 51.2423637,
            "longitude": -0.5862949
        }
    },
    {
        "id": 9,
        "name": "King's Cross St. Pancras Station",
        "description": "Where Karolina Górka boarded a night train and was taken by The Buried (MAG 71: Underground)",
        "coords": {
            "latitude": 51.5319426,
            "longitude": -0.1236901
        }
    },
    {
        "id": 10,
        "name": "Waltham Express Grill",
        "description": "Where John Haan sold his wife as fast food, and where Craig Goodall was captured by Tom Haan (MAG 72: Takeaway)",
        "coords": {
            "latitude": 51.5936229,
            "longitude": -0.0343167
        }
    },
    {
        "id": 11,
        "name": "Outer Bay Shipping: Harringay Building",
        "description": "Where Basira Hussain and other Section 31 officers disrupted Maxwell Rayner's ritual for The Dark and rescued Callum Brodie (MAG 73: Police Lights)",
        "coords": {
            "latitude": 51.5865925,
            "longitude": -0.1097773
        }
    },
    {
        "id": 12,
        "name": "Walker Residence",
        "description": "Where Grant Walker had an encounter with Michael Crew while climbing a ladder (MAG 77: A Long Way Down)",
        "coords": {
            "latitude": 54.9811651,
            "longitude": -1.4810618
        }
    },
    {
        "id": 13,
        "name": "Tour Montparnasse",
        "description": "Where Grant Walker was taken by Michael Crew (MAG 75: A Long Way Down)",
        "coords": {
            "latitude": 48.8421379,
            "longitude": 2.3219514
        }
    },
    {
        "id": 14,
        "name": "CF Booth Scrap Metal and Recycling Yard",
        "description": "Where Melanie King had an experience with a former hospital train car (MAG 76: The Smell of Blood)",
        "coords": {
            "latitude": 53.4273092,
            "longitude": -1.3666597
        }
    },
    {
        "id": 15,
        "name": "The Cooper Residence",
        "description": "Where Lucy Cooper discovered her mother had been replaced by NotThem (MAG 77: The Kind Mother)",
        "coords": {
            "latitude": 51.2546168,
            "longitude": -2.7478365
        }
    },
    {
        "id": 16,
        "name": "The Streets of Bournemouth",
        "description": "Where Jonathan Sims had his encounter with Mr. Spider (MAG 81: A Guest for Mr. Spider)",
        "coords": {
            "latitude": 50.7245973,
            "longitude": -1.8536468
        }
    },
    {
        "id": 17,
        "name": "Pinhole Books",
        "description": "Where Mary and Gerard Keay ran their operation, and where Dominic Swain discovered the power of Ex Altiora (MAG 4: Page Turner)",
        "coords": {
            "latitude": 51.4041683,
            "longitude": -0.1964341
        }
    },
    {
        "id": 18,
        "name": "Doctor Tellison's Practice",
        "description": "Where Dr. Margaret Tellison used the Catalogue of the Trapped Dead to extort money from the dead, and where Mary Keay murdered her and stole the book (MAG 62: First Edition)",
        "coords": {
            "latitude": 51.5152294,
            "longitude": -0.0594429
        }
    },
    {
        "id": 19,
        "name": "Bolehill Park",
        "description": "Where Jack Barnabas went on a few dates with Agnes Montague (MAG 67: Burning Desire)",
        "coords": {
            "latitude": 53.3892037,
            "longitude": -1.5103256
        }
    },
    {
        "id": 20,
        "name": "Canyon Cafe",
        "description": "Where Agnes Montague was a regular (MAG 67: Burning Desire)",
        "coords": {
            "latitude": 53.38503,
            "longitude": -1.4757639
        }
    },
    {
        "id": 21,
        "name": "New Street Station",
        "description": "Where Philip Doah met his end after reading the Book of the Dead, which he bequeathed to Masato Murray (MAG 70: Book of the Dead)",
        "coords": {
            "latitude": 52.4779099,
            "longitude": -1.8975646
        }
    },
    {
        "id": 22,
        "name": "Alexander Willard's House",
        "description": "Where Alexander Willard was killed in his bed after reading the Book of the Dead (MAG 70: Book of the Dead)",
        "coords": {
            "latitude": 52.2169938,
            "longitude": -1.8700297
        }
    },
    {
        "id": 23,
        "name": "The Streets of Norwich",
        "description": "Where Christopher was dragged through the streets by his horse until he died, after reading the Book of the Dead (MAG 70: Book of the Dead)",
        "coords": {
            "latitude": 52.6304915,
            "longitude": 1.2987418
        }
    },
    {
        "id": 24,
        "name": "Fanton's Department Store",
        "description": "Where a mannequin stalked Chloe Ashburt for a month and eventually murdered and skinned Lana Billings (MAG 83: Drawing a Blank)",
        "coords": {
            "latitude": 51.4925764,
            "longitude": -0.2274324
        }
    },
    {
        "id": 25,
        "name": "Maggie's Dump",
        "description": "Where Margaret Carnegie lived in squalor, and chose Gordon Goodman as her successor (MAG 84: Possessive)",
        "coords": {
            "latitude": 52.3291042,
            "longitude": 1.3896127
        }
    },
    {
        "id": 26,
        "name": "Gwydir Forest Compound",
        "description": "Where Sebastian Skinner was called in to unclog a drain (MAG 87: The Uncanny Valley)",
        "coords": {
            "latitude": 53.0469719,
            "longitude": -3.8491525
        }
    },
    {
        "id": 27,
        "name": "St. Ives Beach",
        "description": "Where Enrique MacMillian dug up DIG and then continued to dig (MAG 88: Dig)",
        "coords": {
            "latitude": 50.2151325,
            "longitude": -5.4766919
        }
    },
    {
        "id": 28,
        "name": "Jared's Gym",
        "description": "Where Ross Davenport saw the members who were shaped by Jared Hopworth (MAG 90: Body Builder)",
        "coords": {
            "latitude": 57.1520323,
            "longitude": -2.1749442
        }
    },
    {
        "id": 29,
        "name": "The Russell House",
        "description": "Where Lester Chang witnessed Greg Russell's attempts to combat the contamination in his home (MAG 93: Contaminant)",
        "coords": {
            "latitude": 53.5156801,
            "longitude": -2.1770575
        }
    },
    {
        "id": 30,
        "name": "Medical Sciences Building - Oxford University",
        "description": "Where Georgie Barker lost her fear (MAG 94: Dead Woman Walking)",
        "coords": {
            "latitude": 51.7600371,
            "longitude": -1.2518829
        }
    },
    {
        "id": 31,
        "name": "Newcastle Breekon and Hope Depot",
        "description": "Where Jonathan Sims discovered information as well as the body of Alfred Breekon (MAG 96: Return to Sender)",
        "coords": {
            "latitude": 54.9619301,
            "longitude": -1.6424908
        }
    },
    {
        "id": 32,
        "name": "Bucoda, Washington",
        "description": "Where Jackson Ellis witnessed The Pit, and Gertrude Robinson disrupted it with the body of Jan Kilbride (MAG 97: We All Ignore the Pit)",
        "coords": {
            "latitude": 46.7983087,
            "longitude": -122.865558
        }
    },
    {
        "id": 33,
        "name": "Boise City, Oklahoma",
        "description": "Where Robert E. Geiger witnessed the worst effects of the Dust Bowl (MAG 99: Dust to Dust)",
        "coords": {
            "latitude": 36.7294675,
            "longitude": -102.5132419
        }
    },
    {
        "id": 34,
        "name": "Lynne Hammond's Flat",
        "description": "Where Lynne Hammond witnessed a ghost that burned her (MAG 100: I Guess You Had To Be There)",
        "coords": {
            "latitude": 51.557168,
            "longitude": -0.0538564
        }
    },
    {
        "id": 35,
        "name": "Aldwych Station",
        "description": "Where \"John Smith\" lost his friend \"Jeremy\" to The Dark (MAG 100: I Guess You Had To Be There)",
        "coords": {
            "latitude": 51.5120404,
            "longitude": -0.1156662
        }
    },
    {
        "id": 36,
        "name": "Zemlya Sannikova",
        "description": "Where Gertrude Robinson stopped The Great Twisting by sacrificing Michael Shelley to The Distortion (MAG 101: Another Twist)",
        "coords": {
            "latitude": 83.3488689,
            "longitude": 142.7265704
        }
    },
    {
        "id": 37,
        "name": "Le Papillon Blanc",
        "description": "Where Benoît Maçon worked when he met \"Mon Petit Scarabée\" (MAG 102: Nesting Instinct)",
        "coords": {
            "latitude": 43.6127785,
            "longitude": 1.4200441
        }
    },
    {
        "id": 38,
        "name": "Dylan Anderson's Vineyard",
        "description": "Where Dylan Anderson came in contact with a \"Monster Pig\" (MAG 103: Cruelty Free)",
        "coords": {
            "latitude": -35.682906,
            "longitude": 173.6766024
        }
    },
    {
        "id": 39,
        "name": "Royal Opera House",
        "description": "Where Tim Stoker's brother Danny was taken by Joseph Grimaldi and Tim saw the aftermath (MAG 104: Sneak Preview)",
        "coords": {
            "latitude": 51.5129211,
            "longitude": -0.1221976
        }
    },
    {
        "id": 40,
        "name": "Pu Songling Research Centre",
        "description": "",
        "coords": {
            "latitude": 39.9188062,
            "longitude": 116.3642536
        }
    },
    {
        "id": 41,
        "name": "Anqing",
        "description": "Where Charles Fleming was trapped at the start of the Taiping Rebellion (MAG 105: Total War)",
        "coords": {
            "latitude": 30.531919,
            "longitude": 117.115101
        }
    },
    {
        "id": 42,
        "name": "West Lake of Hangzhou",
        "description": "Where Charles Fleming walked across a bridge made from the bodies of the dead (MAG 105: Total War)",
        "coords": {
            "latitude": 30.2427011,
            "longitude": 120.1502699
        }
    },
    {
        "id": 43,
        "name": "Chicago Rental",
        "description": "Where Gertrude Robinson and Gerard Keay stayed during their visit to Chicago, Calliope music could be heard in the nearby park (MAG 107: Third Degree)",
        "coords": {
            "latitude": 41.6712401,
            "longitude": -87.6318344
        }
    },
    {
        "id": 44,
        "name": "UPMC Presbyterian",
        "description": "Where Gerard Keay died, and was put in the Catalogue of the Trapped Dead by Gertrude Robinson (MAG 107: Third Degree)",
        "coords": {
            "latitude": 40.4425606,
            "longitude": -79.9609827
        }
    },
    {
        "id": 45,
        "name": "Moorgate Station",
        "description": "Where Nicholas Lekman was taken by a manifestation of The Buried, where he met Karolina Górka (MAG 71: Underground), and where Howard Ewing was interrogated by Inspector Sands (MAG 107: Third Degree)",
        "coords": {
            "latitude": 51.5184669,
            "longitude": -0.0883783
        }
    },
    {
        "id": 46,
        "name": "Dexter Banks' Film Studio",
        "description": "Where Neil Lagorio's spider took 100 cast and crew along with Dexter himself (MAG 110: Creature Feature)",
        "coords": {
            "latitude": 34.091204,
            "longitude": -118.321498
        }
    },
    {
        "id": 47,
        "name": "Gertrude's Storage Unit",
        "description": "Where the Gorilla Skin and many explosives were contained (MAG 111: Family Business)",
        "coords": {
            "latitude": 51.6070098,
            "longitude": 0.1203742
        }
    },
    {
        "id": 48,
        "name": "House at a Hackney Wick Cul-de-Sac",
        "description": "Where Justin Gough took his fourth victim, and Adelard Dekker lobotomized him (MAG 113: Breathing Room)",
        "coords": {
            "latitude": 51.5462937,
            "longitude": -0.0329033
        }
    },
    {
        "id": 49,
        "name": "Court Theatre of Buda",
        "description": "Where an attempt at The Unknowing orchestrated by Wolfgang von Kempelen was interrupted by an avatar of The Slaughter (MAG 116: The Show Must Go On)",
        "coords": {
            "latitude": 47.4985772,
            "longitude": 19.0376404
        }
    },
    {
        "id": 50,
        "name": "House of Wax",
        "description": "Where an attempt at The Unknowing was interrupted by the forces of The Magnus Institute, leading to the deaths of Tim Stoker, Nikola Orsinov, and Hope, as well as Daisy Tonner's entrapment in The Coffin (MAG 118: The Masquerade, MAG 119: Stranger and Stranger)",
        "coords": {
            "latitude": 52.60741,
            "longitude": 1.7308899
        }
    },
    {
        "id": 51,
        "name": "Point Nemo",
        "description": "Where Oliver Banks and everyone else on a research ship was killed by falling satellite debris (MAG 121: Far Away)",
        "coords": {
            "latitude": -48.875,
            "longitude": -123.393333333333
        }
    },
    {
        "id": 52,
        "name": "Guildford Coffee Shop",
        "description": "Where Gregory Cox met Annabelle Cane in person about website design (MAG 123: Web Development)",
        "coords": {
            "latitude": 51.2356423,
            "longitude": -0.57227
        }
    },
    {
        "id": 53,
        "name": "Untersberg Cable Car",
        "description": "Where Julian Jennings and his mother were left hanging by Simon Fairchild, and where the driver, Otto Hessler, was taken by him (MAG 124: Left Hanging)",
        "coords": {
            "latitude": 47.7231591,
            "longitude": 13.0245315
        }
    },
    {
        "id": 54,
        "name": "Lanncraig",
        "description": "Where the crofters literally tore each other apart (MAG 125: Civilian Casualties)",
        "coords": {
            "latitude": 57.5808525,
            "longitude": -4.3592707
        }
    },
    {
        "id": 55,
        "name": "Kulbir Shakya's House",
        "description": "Where Kulbir Shakya drowned (MAG 129: Submerged)",
        "coords": {
            "latitude": 51.5741418,
            "longitude": -0.0696964
        }
    },
    {
        "id": 56,
        "name": "Gnostic Temple",
        "description": "Where Gertrude Robinson interrupted The Last Feast (MAG 130: Meat)",
        "coords": {
            "latitude": 41.1176864,
            "longitude": 28.9413468
        }
    },
    {
        "id": 57,
        "name": "Dead Horse Camp",
        "description": "Where Percy Fawcett started his final hunt for the Lost City of Z (MAG 133: Dead Horse)",
        "coords": {
            "latitude": -11.716667,
            "longitude": -54.583333
        }
    },
    {
        "id": 58,
        "name": "Garland Hillier's Apartment",
        "description": "Where Bernadette Delcour entered into an empty world (MAG 134: Time of Revelation)",
        "coords": {
            "latitude": 48.8404851,
            "longitude": 2.3478717
        }
    },
    {
        "id": 59,
        "name": "Amritsar",
        "description": "Where Melanie King was shot by a manifestation of The Slaughter (MAG 117: Testament)",
        "coords": {
            "latitude": 31.6339793,
            "longitude": 74.8722642
        }
    },
    {
        "id": 60,
        "name": "Neil Lagorio's Home",
        "description": "Where Neil Lagorio was puppeteered by Alison Killala in his later years, and eventually killed by Annabelle Cane (MAG 136: The Puppeteer)",
        "coords": {
            "latitude": 41.797439,
            "longitude": -73.1224183
        }
    },
    {
        "id": 61,
        "name": "North Point POW Camp",
        "description": "Where Wallis Turner witnessed an attempted ritual of The Slaughter (MAG 137: Nemesis)",
        "coords": {
            "latitude": 22.2922597,
            "longitude": 114.2035393
        }
    },
    {
        "id": 62,
        "name": "Island South of Malé",
        "description": "Where Mikaele Salesa made his final acquisition, the camera that would allow his safe haven in the apocalypse (MAG 141: Doomed Voyage)",
        "coords": {
            "latitude": 3.3432771,
            "longitude": 73.5206248
        }
    },
    {
        "id": 63,
        "name": "Kentish Town Sewers",
        "description": "Where Jess Terrell was trapped under rubble (MAG 142: Scrutiny)",
        "coords": {
            "latitude": 51.5494855,
            "longitude": -0.1452159
        }
    },
    {
        "id": 64,
        "name": "Ny-Ålesund",
        "description": "Where the Dark Star was stored (MAG 143: Heart of Darkness)",
        "coords": {
            "latitude": 78.9235381,
            "longitude": 11.9098952
        }
    },
    {
        "id": 65,
        "name": "Annabelle Cane's Childhood Home",
        "description": "Where Annabelle Cane grew up (MAG 147: Weaver)",
        "coords": {
            "latitude": 52.9378147,
            "longitude": 0.4984778
        }
    },
    {
        "id": 66,
        "name": "Hunstanton Beach Chip Shop",
        "description": "Where Annabelle Cane had her first encounter with The Web (MAG 147: Weaver)",
        "coords": {
            "latitude": 52.9332887,
            "longitude": 0.4822163
        }
    },
    {
        "id": 67,
        "name": "Stratford Shopping Centre",
        "description": "Where Samson Stiller was touched by The Eye (MAG 148: Extended Surveillance)",
        "coords": {
            "latitude": 51.541628,
            "longitude": -0.0001217
        }
    },
    {
        "id": 68,
        "name": "Ecological Station Caracaraí",
        "description": "Where Judith O'Neill witnessed Nikos Anastos fall to a concrete village (MAG 149: Concrete Jungle)",
        "coords": {
            "latitude": 1.7764126,
            "longitude": -61.3049054
        }
    },
    {
        "id": 69,
        "name": "Cheadle Suburb",
        "description": "Where Herman Gorgoli became lost in the Cul-de-Sac (MAG 150: Cul-De-Sac)",
        "coords": {
            "latitude": 52.9948039,
            "longitude": -1.9800228
        }
    },
    {
        "id": 70,
        "name": "House of Tintoretto",
        "description": "Where Simon Fairchild apprenticed under Tintoretto and fell in love with the sky (MAG 151: Big Picture)",
        "coords": {
            "latitude": 45.4453006,
            "longitude": 12.3323877
        }
    },
    {
        "id": 71,
        "name": "Dunstable Churchyard",
        "description": "Where Hezekiah Wakely buried Nellie Cooper alive (MAG 152: A Gravedigger's Envy)",
        "coords": {
            "latitude": 51.8859846,
            "longitude": -0.5166535
        }
    },
    {
        "id": 72,
        "name": "Divine Chain Cult Compound",
        "description": "Where Barbara Mullen-Jones witnessed the fall of a cult into decay (MAG 153: Love Bombing)",
        "coords": {
            "latitude": 35.5013426,
            "longitude": -92.7856617
        }
    },
    {
        "id": 73,
        "name": "Bright Lake Amusement Park",
        "description": "Where a man entered a twisted world through a mirror (MAG 156: Reflection)",
        "coords": {
            "latitude": 39.7785519,
            "longitude": -105.0538703
        }
    },
    {
        "id": 74,
        "name": "Klanxbüll",
        "description": "Where John Amherst released a plague, Adelard Dekker encased him in concrete, and Adelard Dekker died (MAG 157: Rotten Core)",
        "coords": {
            "latitude": 54.8638313,
            "longitude": 8.6752488
        }
    },
    {
        "id": 75,
        "name": "Scotland Safehouse",
        "description": "Where Jonathan Sims unintentionally brought down the apocalypse (MAG 160: The Eye Opens)",
        "coords": {
            "latitude": 56.7007175,
            "longitude": -4.1793465
        }
    },
    {
        "id": 76,
        "name": "The House at Hilltop Road",
        "description": "",
        "coords": {
            "latitude": 51.7485802,
            "longitude": -1.2226099
        }
    },
    {
        "id": 77,
        "name": "The Magnus Institute",
        "description": "",
        "coords": {
            "latitude": 51.4857202,
            "longitude": -0.1204741
        }
    },
    {
        "id": 78,
        "name": "The Usher Foundation",
        "description": "",
        "coords": {
            "latitude": 38.8992949,
            "longitude": -77.0114589
        }
    },
    {
        "id": 79,
        "name": "Port of Cape Town",
        "description": "Where Mikaele Salesa's ship docked after the death of Gantulga, and where it departed on Salesa's final voyage (MAG 141: Doomed Voyage)",
        "coords": {
            "latitude": -33.90428,
            "longitude": 18.4300599
        }
    },
    {
        "id": 80,
        "name": "Mausoleum of Johann von Württemberg",
        "description": "Where Albrecht von Closen delved and took a book and a coin from the crypt, also where Hans Winkler's mother went down the steps and never came back (MAG023: Schwartzwald), and where Albrecht von Closen and Dr. Jonathan Fanshawe returned the books, and Albrecht died (MAG127: Remains to be Seen)",
        "coords": {
            "latitude": 48.2849639,
            "longitude": 8.3194262
        }
    },
    {
        "id": 81,
        "name": "Middle of Epping Forest",
        "description": "Where the London Metropolitan Police disposed of several vampires (MAG 61: Hard Shoulder)",
        "coords": {
            "latitude": 51.6619217,
            "longitude": 0.0529125
        }
    },
    {
        "id": 82,
        "name": "Frere",
        "description": "Where Sir Frederick Treeves had his first and second encounters with John Amherst, who dug his own grave, and returned as a restless man (MAG 68: The Tale of a Field Hospital)",
        "coords": {
            "latitude": -28.8946255,
            "longitude": 29.7831356
        }
    },
    {
        "id": 83,
        "name": "Chieveley",
        "description": "Where Sir Frederick Treeves had his final encounter with John Amherst, who came upon the hospital black with flies (MAG 68: The Tale of a Field Hospital)",
        "coords": {
            "latitude": -28.83028,
            "longitude": 29.80722
        }
    },
    {
        "id": 84,
        "name": "The Star of Kings",
        "description": "Where Karolina Górka was celebrating her personal New Year's before boarding the late train (MAG 71: Underground)",
        "coords": {
            "latitude": 51.5363747,
            "longitude": -0.1219688
        }
    },
    {
        "id": 85,
        "name": "Walthamstow Central Station",
        "description": "Where Karolina Górka woke up after falling asleep on a manifestation of The Buried (MAG 71: Underground)",
        "coords": {
            "latitude": 51.5830044,
            "longitude": -0.0198832
        }
    },
    {
        "id": 86,
        "name": "Railroad near Merey",
        "description": "Where a medic lost his mind in savagery and his fellows intentionally derailed the 11th US Army Hospital Train to stop him (MAG 76: The Smell of Blood)",
        "coords": {
            "latitude": 48.9679305,
            "longitude": 1.3805536
        }
    },
    {
        "id": 87,
        "name": "St Peter's Church",
        "description": "Where Rose Cooper was replaced by the NotThem (MAG 77: The Kind Mother)",
        "coords": {
            "latitude": 51.2581817,
            "longitude": -2.7520933
        }
    },
    {
        "id": 88,
        "name": "Antigonish, NS",
        "description": "Where The Man Who Wasn't There might not have been (MAG 85: Upon the Stair)",
        "coords": {
            "latitude": 45.6226605,
            "longitude": -61.9928026
        }
    },
    {
        "id": 89,
        "name": "The Road from Aswan to Abu Simbel",
        "description": "Where Barnabus Bennett was first touched by The Lonely (MAG 92: Nothing Beside Remains)",
        "coords": {
            "latitude": 23.1838625,
            "longitude": 31.9715202
        }
    },
    {
        "id": 90,
        "name": "Teramo",
        "description": "Where Luca Moretti returned home after the war, and left from to hunt for deserters (MAG 95: Absent Without Leave)",
        "coords": {
            "latitude": 42.6611431,
            "longitude": 13.6986639
        }
    },
    {
        "id": 91,
        "name": "Monte Vettore",
        "description": "Where Luca Moretti's troupe was picked off one by one (MAG 95: Absent Without Leave)",
        "coords": {
            "latitude": 42.8248531,
            "longitude": 13.2747245
        }
    },
    {
        "id": 92,
        "name": "Repton School",
        "description": "Where Dr. Algernon Moss first heard of The Sandman (MAG 98: Lights Out)",
        "coords": {
            "latitude": 52.8399741,
            "longitude": -1.5530258
        }
    },
    {
        "id": 93,
        "name": "Upton House",
        "description": "Where Mikaele Salesa set up his haven from the apocalypse, and where Annabelle Cane joined him (MAG 181: Ignorance)",
        "coords": {
            "latitude": 52.1069859,
            "longitude": -1.4592215
        }
    },
    {
        "id": 94,
        "name": "Dikson",
        "description": "Where Gertrude Robinson and Michael Shelley embarked for Sannikov Land on the Tundra (MAG 101: Another Twist)",
        "coords": {
            "latitude": 73.507735,
            "longitude": 80.5310301
        }
    },
    {
        "id": 95,
        "name": "North Manchester General Hospital",
        "description": "Where Andrew W. was born (MAG 182: Wellbeing)",
        "coords": {
            "latitude": 53.517431,
            "longitude": -2.2287604
        }
    },
    {
        "id": 96,
        "name": "Arthur's Seat",
        "description": "Where Andrew W. last felt content (MAG 182: Wellbeing)",
        "coords": {
            "latitude": 55.9440825,
            "longitude": -3.1618324
        }
    },
    {
        "id": 97,
        "name": "Royal Hallamshire Hospital",
        "description": "Where Renee T. was born (MAG 182: Wellbeing)",
        "coords": {
            "latitude": 53.3785462,
            "longitude": -1.4934336
        }
    },
    {
        "id": 98,
        "name": "Bournemouth Hospital",
        "description": "Where Kelly M. was born (MAG 182: Wellbeing)",
        "coords": {
            "latitude": 50.745682,
            "longitude": -1.820774
        }
    },
    {
        "id": 99,
        "name": "Odeon of Herodes Atticus",
        "description": "Where, as a child, Adonis Biros first felt the pull of The Lonely (MAG 108: Monologue)",
        "coords": {
            "latitude": 37.9707948,
            "longitude": 23.7245831
        }
    },
    {
        "id": 100,
        "name": "The Duke of York's Theatre",
        "description": "Where Adonis Biros delivered his monologue, and realized the all the world truly is a stage (MAG 108: Monologue)",
        "coords": {
            "latitude": 51.5102234,
            "longitude": -0.1270844
        }
    },
    {
        "id": 101,
        "name": "Manchester Office Building",
        "description": "Where Julia Montauk joined forces with Trevor Herbert for the first time against Vardhan Darvish's sect of The Dark (MAG 109: Nightfall)",
        "coords": {
            "latitude": 53.4846634,
            "longitude": -2.2451047
        }
    },
    {
        "id": 102,
        "name": "Redondo Beach",
        "description": "Where the victims of Neil Lagorio's spider wash up, one by one, every February (MAG 110: Creature Feature)",
        "coords": {
            "latitude": 33.8553117,
            "longitude": -118.4003383
        }
    },
    {
        "id": 103,
        "name": "Camden Whiskey Shop",
        "description": "Where Debbie Truss caught and killed Jamie Sanders (MAG 112: Thrill of the Chase)",
        "coords": {
            "latitude": 51.5460655,
            "longitude": -0.1622365
        }
    },
    {
        "id": 104,
        "name": "Leytonstone Pedestrian Bridge",
        "description": "Where Lisa Carmel caught and killed Evelyn Kaleka (MAG 112: Thrill of the Chase)",
        "coords": {
            "latitude": 51.5666673,
            "longitude": 0.0065312
        }
    },
    {
        "id": 105,
        "name": "Andrew Cochrane's House",
        "description": "Where Lisa Carmel went looking for her first kill (MAG 112: Thrill of the Chase)",
        "coords": {
            "latitude": 51.5546779,
            "longitude": -0.1789042
        }
    },
    {
        "id": 106,
        "name": "Camden Lock",
        "description": "Where Debbie Truss almost caught Lisa Carmel (MAG 112: Thrill of the Chase)",
        "coords": {
            "latitude": 51.541394,
            "longitude": -0.1452336
        }
    },
    {
        "id": 107,
        "name": "Croydon Alleyway",
        "description": "Where Ananya Kaleka caught and killed Lisa Carmel and was apprehended by the police, marking the end of Murder Club (MAG 112: Thrill of the Chase)",
        "coords": {
            "latitude": 51.3740814,
            "longitude": -0.0951731
        }
    },
    {
        "id": 108,
        "name": "Whipps Cross Hospital",
        "description": "Where Justin Gough was admitted for carbon monoxide poisoning, died for 52 seconds, and came back an avatar of The End (MAG 113: Breathing Room)",
        "coords": {
            "latitude": 51.576603,
            "longitude": 0.00365
        }
    },
    {
        "id": 109,
        "name": "East London Care Home",
        "description": "Where Justin Gough stayed for 3 years while he recovered from his lobotomization (MAG 113: Breathing Room)",
        "coords": {
            "latitude": 51.5443288,
            "longitude": 0.0170415
        }
    },
    {
        "id": 110,
        "name": "Schönbrunn Palace",
        "description": "Where Wolfgang von Kempelen and Abraham Janssen debuted The Turk for Empress Maria Theresa (MAG 116: The Show Must Go On)",
        "coords": {
            "latitude": 48.1858124,
            "longitude": 16.3127641
        }
    },
    {
        "id": 111,
        "name": "HMP Eastwood Park",
        "description": "Where Deborah Madaki was imprisoned after the body of Mary Randall was discovered in her basement (MAG 126: Sculptor's Tool)",
        "coords": {
            "latitude": 51.6350471,
            "longitude": -2.468383
        }
    },
    {
        "id": 112,
        "name": "Offices of Eberhart and Strauss",
        "description": "Where Kulbir Shakya went to seek relief from his debt (MAG 129: Submerged)",
        "coords": {
            "latitude": 51.4934949,
            "longitude": -0.217865
        }
    },
    {
        "id": 113,
        "name": "Regent's Canal",
        "description": "Where Kulbir Shakya was fished out after he drowned in his home (MAG 129: Submerged)",
        "coords": {
            "latitude": 51.5331262,
            "longitude": -0.1022478
        }
    },
    {
        "id": 114,
        "name": "70 Clairmont Gardens",
        "description": "Where the first of Elias Bouchard's letters to Jared Hopworth directed him, to collect the bones of Regan Hasnain (MAG 131: Flesh)",
        "coords": {
            "latitude": 55.8666844,
            "longitude": -4.2786937
        }
    },
    {
        "id": 115,
        "name": "King William Island",
        "description": "Where John Franklin and his men joined the Everchase in their hunt for the Northwest Passage (MAG 133: Dead Horse)",
        "coords": {
            "latitude": 70.0833333,
            "longitude": -98.3833333
        }
    },
    {
        "id": 116,
        "name": "Bennett Island",
        "description": "Where Eduard von Toll joined the Everchase in his hunt for Zemlya Sannikova (MAG 133: Dead Horse)",
        "coords": {
            "latitude": 76.6625845,
            "longitude": 148.8853257
        }
    },
    {
        "id": 117,
        "name": "Scunthorpe Steel Works",
        "description": "Where Eugene Vanderstock sacrificed immigrant workers to the flame, who he turned into tallow candles for Agnes Montague (MAG 139: Chosen)",
        "coords": {
            "latitude": 53.5806528,
            "longitude": -0.6173667
        }
    },
    {
        "id": 118,
        "name": "The Royal Observatory",
        "description": "Where John Flamsteed saw Edmund Halley (Maxwell Rayner) alive after he had killed him two days previous (MAG 140: The Movement of the Heavens)",
        "coords": {
            "latitude": 51.476853,
            "longitude": -0.0005002
        }
    },
    {
        "id": 119,
        "name": "The Royal Astronomical Society",
        "description": "Where John Flamsteed would often begin his tailing of Edmund Halley (Maxwell Rayner), including on the night he killed him (MAG 140: The Movement of the Heavens)",
        "coords": {
            "latitude": 51.5085251,
            "longitude": -0.1390067
        }
    },
    {
        "id": 120,
        "name": "Pinnacle Coffeeshop",
        "description": "Where Jonathan Sims forcibly extracted a statement from an unnamed bystander (MAG 142: Scrutiny)",
        "coords": {
            "latitude": 51.5153326,
            "longitude": -0.0828384
        }
    },
    {
        "id": 121,
        "name": "The Streets of Horsell",
        "description": "Where Angie Santos and Gregory Cox were accosted by a victim of Chelicerae",
        "coords": {
            "latitude": 51.3235447,
            "longitude": -0.5789356
        }
    },
    {
        "id": 122,
        "name": "Old Fishmarket Close",
        "description": "Where The Anglerfish failed to lure in Nathan Watts, but took at least six others (MAG001: Anglerfish)",
        "coords": {
            "latitude": 55.9492115,
            "longitude": -3.1895134
        }
    },
    {
        "id": 123,
        "name": "Amsterdam Cafe",
        "description": "Where Joshua Gillespie agreed to hold onto a package for \"John\" in exchange for £10,000 (MAG002: Do Not Open).",
        "coords": {
            "latitude": 52.3702917,
            "longitude": 4.8802503
        }
    },
    {
        "id": 124,
        "name": "Joshua Gillespie's Flat",
        "description": "Where Joshua Gillespie lived with The Coffin for almost a year and a half, successfully resisting its pull. This led to \"John\" being drawn in when he came to retrieve it. (MAG002: Do Not Open)",
        "coords": {
            "latitude": 50.7201381,
            "longitude": -1.8844406
        }
    },
    {
        "id": 125,
        "name": "Birkbeck College",
        "description": "Where Amy Patel met Graham Folger during a night criminology course, and noticed his odd behaviour (MAG003: Across the Street).",
        "coords": {
            "latitude": 51.5202249,
            "longitude": -0.1299351
        }
    },
    {
        "id": 126,
        "name": "M1 Near Sheffield",
        "description": "Where Graham Folger's parents passed away in a car accident, leaving him their London flat and a hefty inheritance (MAG003: Across the Street).",
        "coords": {
            "latitude": 53.3990584,
            "longitude": -1.3304511
        }
    },
    {
        "id": 127,
        "name": "Amy Patel's Flat",
        "description": "Where Amy Patel watched Graham Folger for months, and eventually saw him taken by NotThem (MAG003: Across the Street).",
        "coords": {
            "latitude": 51.4642581,
            "longitude": -0.1430456
        }
    },
    {
        "id": 128,
        "name": "Graham Folger's Flat",
        "description": "Where Amy Patel briefly stayed after suffering a concussion, noticing the odd pull of The Web Table. And where the NotThem took Graham Folger's identity (MAG 3: Across the Street),",
        "coords": {
            "latitude": 51.464349,
            "longitude": -0.1426897
        }
    },
    {
        "id": 129,
        "name": "Oxfam Charity Shop",
        "description": "Where Dominic Swain discovered and purchased Ex Altiora (MAG004: Page Turner).",
        "coords": {
            "latitude": 51.5088232,
            "longitude": -0.1995058
        }
    },
    {
        "id": 130,
        "name": "Gate Theatre",
        "description": "Where Dominic Swain first smelt ozone after purchasing Ex Altiora (MAG004: Page Turner)",
        "coords": {
            "latitude": 51.5093542,
            "longitude": -0.1974478
        }
    },
    {
        "id": 131,
        "name": "Courtyard Theatre",
        "description": "Where Dominic Swain smelt ozone again during his technician work, and walked out into the night (MAG004: Page Turner)",
        "coords": {
            "latitude": 51.5280358,
            "longitude": -0.0834107
        }
    },
    {
        "id": 132,
        "name": "93 Lancaster Road",
        "description": "Where Kieran Woodward's refuse collection crew came across several bags of strange rubbish over the course of a few months, leading to Alan Parfitt's disappearance while staking out the house (MAG005: Thrown Away)",
        "coords": {
            "latitude": 51.5945214,
            "longitude": -0.0398359
        }
    },
    {
        "id": 133,
        "name": "The Dogstar",
        "description": "Where Timothy Hodge met Harriet Lee (MAG006: Squirm)",
        "coords": {
            "latitude": 51.461714,
            "longitude": -0.111912
        }
    },
    {
        "id": 134,
        "name": "Timothy Hodge's Flat",
        "description": "Where Harriet Lee infected Timothy Hodge before succumbing to the worms, leading Timothy to burn down the building (MAG006: Squirm)",
        "coords": {
            "latitude": 51.4581777,
            "longitude": -0.1109799
        }
    },
    {
        "id": 135,
        "name": "Elthorne Road",
        "description": "Where Harriet Lee was accosted and infected by Jane Prentiss (MAG006: Squirm)",
        "coords": {
            "latitude": 51.5660834,
            "longitude": -0.1307055
        }
    },
    {
        "id": 136,
        "name": "The Hindenberg Line at Savy Forest",
        "description": "Where Wilfred Owen met the War (MAG007: The Piper)",
        "coords": {
            "latitude": 49.8450183,
            "longitude": 3.2006252
        }
    },
    {
        "id": 137,
        "name": "Craiglockhart Hydropathic",
        "description": "Where Wilfred Owen was sent to recover from his experience with the Piper (MAG007: The Piper)",
        "coords": {
            "latitude": 55.918006,
            "longitude": -3.2396042
        }
    },
    {
        "id": 138,
        "name": "Joncourt",
        "description": "Where Clarence Berry saw Wilfred Owen's actions as an avatar of The Slaughter (MAG007: The Piper)",
        "coords": {
            "latitude": 49.9364987,
            "longitude": 3.2430945
        }
    },
    {
        "id": 139,
        "name": "Sambre-Oise Canal",
        "description": "Where Wilfred Owen died crossing the canal, and the war died with him (MAG007: The Piper)",
        "coords": {
            "latitude": 50.062121,
            "longitude": 3.648312
        }
    },
    {
        "id": 140,
        "name": "John Radcliffe Hospital",
        "description": "Where Ivo Lensik was taken after his experience and injury at Hill Top Road, and where Anna Kasuma told him of the place's past (MAG008: Burned Out). Also where Father Edwin Burroughs attempted an exorcism on Bethany O'Connor at the request of Anne Willet, leading to her death, and the entrance of The Spiral into Burroughs' mind (MAG019: Confession)",
        "coords": {
            "latitude": 51.764391,
            "longitude": -1.2188774
        }
    },
    {
        "id": 141,
        "name": "The Montauk Residence",
        "description": "Where Robert Montauk murdered 41 people to protect himself and his daughter Julia from The Still And Lightless Beast, which had earlier taken his wife (MAG009: A Father's Love)",
        "coords": {
            "latitude": 51.4417664,
            "longitude": 0.2276824
        }
    },
    {
        "id": 142,
        "name": "Sylvia McDonald's House",
        "description": "Where Trevor Herbert killed his first vampire, Sylvia McDonald, after it drank his brother Nigel (MAG010: Vampire Killer)",
        "coords": {
            "latitude": 53.4849917,
            "longitude": -2.2289385
        }
    },
    {
        "id": 143,
        "name": "Kings Arms Hotel",
        "description": "Where Sylvia McDonald lured Trevor and Nigel Herbert to its lair (MAG010: Vampire Killer)",
        "coords": {
            "latitude": 53.4736039,
            "longitude": -2.2260415
        }
    },
    {
        "id": 144,
        "name": "The Oasis Club",
        "description": "Where Trevor Herbert located his second vampire, Robert Arden (MAG 10: Vampire Killer)",
        "coords": {
            "latitude": 53.4791404,
            "longitude": -2.2473734
        }
    },
    {
        "id": 145,
        "name": "One Churchill Place",
        "description": "Where Oliver Banks (Antonio Blake) worked for Barclays Bank shortly before his dreams of death began, and where he saw the death of his former line manager John Uzel; the first he had seen of someone he had known (MAG011: Dreamer).",
        "coords": {
            "latitude": 51.5057361,
            "longitude": -0.0214097
        }
    },
    {
        "id": 146,
        "name": "One Canada Square",
        "description": "Where Oliver Banks (Antonio Blake) always began his dreams of death atop of (MAG011: Dreamer).",
        "coords": {
            "latitude": 51.5049489,
            "longitude": -0.0195006
        }
    },
    {
        "id": 147,
        "name": "Oxford Street",
        "description": "Where Oliver Banks (Antonio Blake) saw the coming death of his father, who he was unable to save (MAG011: Dreamer)",
        "coords": {
            "latitude": 51.5150439,
            "longitude": -0.143884
        }
    },
    {
        "id": 148,
        "name": "Building Site near St. Mary's Churchyard",
        "description": "Where Gerard Keay and Diego Molina were found near a fire covered in severe burns (MAG012: First Aid)",
        "coords": {
            "latitude": 51.4930323,
            "longitude": -0.1037331
        }
    },
    {
        "id": 149,
        "name": "St. Thomas' Hospital",
        "description": "Where Gerard Keay and Diego Molina were taken for treatment, and Lesere Saraki watched Gerard kill Diego, marking her for The Eye (MAG 12: First Aid)",
        "coords": {
            "latitude": 51.499032,
            "longitude": -0.1176306
        }
    },
    {
        "id": 150,
        "name": "Leeds Universities Catholic Chaplaincy",
        "description": "Where Pastor David cautioned Naomi Herne that if she continued her solitary lifestyle she might \"get lost\" (MAG013: Alone)",
        "coords": {
            "latitude": 53.8105475,
            "longitude": -1.5532017
        }
    },
    {
        "id": 151,
        "name": "Woking College",
        "description": "Where Naomi Herne worked as a science technician after graduating with no connections (MAG013: Alone)",
        "coords": {
            "latitude": 51.3060268,
            "longitude": -0.5492672
        }
    },
    {
        "id": 152,
        "name": "University College London Department of Biochemical Engineering",
        "description": "Where Naomi Herne met Evan Lukas at a job interview (MAG013: Alone)",
        "coords": {
            "latitude": 51.524695,
            "longitude": -0.1332852
        }
    },
    {
        "id": 153,
        "name": "Moorland House",
        "description": "Where Naomi Herne attended Evan Lukas' funeral, and was told to leave by his relatives (MAG013: Alone). Where Peter Lukas grew up alone (MAG159: The Last).",
        "coords": {
            "latitude": 51.2755514,
            "longitude": 0.7407843
        }
    },
    {
        "id": 154,
        "name": "Road near Wormshill",
        "description": "Where Naomi Herne escaped the Lonely by following Evan Lukas' voice into the road, where she was hit by Michael Getty's car (MAG013: Alone)",
        "coords": {
            "latitude": 51.2803045,
            "longitude": 0.6913253
        }
    },
    {
        "id": 155,
        "name": "Memorial Hospital Sittingbourne",
        "description": "Where Naomi Herne was taken for treatment after escaping The Lonely via car crash (MAG013: Alone)",
        "coords": {
            "latitude": 51.3347434,
            "longitude": 0.7367448
        }
    },
    {
        "id": 156,
        "name": "Lewisham Side Street",
        "description": "Where Lee Rentoul realised he needed to think outside the box to get his revenge on Paul Noriega, after being beaten up by his muscle (MAG014: Piecemeal)",
        "coords": {
            "latitude": 51.4631442,
            "longitude": -0.0010929
        }
    },
    {
        "id": 157,
        "name": "Angela's House",
        "description": "Where Angela laid a curse upon Paul Noriega that he would lose himself piece by piece, and where Lee Rentoul lost his hand after the curse transferred onto him (MAG 14: Piecemeal).",
        "coords": {
            "latitude": 51.445012,
            "longitude": 0.1495688
        }
    },
    {
        "id": 158,
        "name": "Docklands Warehouse",
        "description": "Where Lee Rentoul killed Paul Noriega, transferring Angela's curse onto himself.",
        "coords": {
            "latitude": 51.4935862,
            "longitude": 0.0021099
        }
    },
    {
        "id": 159,
        "name": "Tottenham Marshes Bridge",
        "description": "Where Lee Rentoul found and lost the first piece of himself: a finger (MAG 14: Piecemeal)",
        "coords": {
            "latitude": 51.5989426,
            "longitude": -0.0504629
        }
    },
    {
        "id": 160,
        "name": "White Scar Cave",
        "description": "Where Laura Popham went on a school trip, and fell in love with the true darkness of underground (MAG015: Lost Johns' Cave)",
        "coords": {
            "latitude": 54.1655946,
            "longitude": -2.4411788
        }
    },
    {
        "id": 161,
        "name": "Lost Johns' Cave",
        "description": "Where Laura Popham lost her sister and almost herself (MAG015: Lost Johns' Cave)",
        "coords": {
            "latitude": 54.2025,
            "longitude": -2.50611111111111
        }
    },
    {
        "id": 162,
        "name": "Carlos Vittery's Flat",
        "description": "Where the spider Carlos Vittery killed in his youth came back to haunt him, and he met a sticky end (MAG016: Arachnophobia). Where, in the basement, Martin Blackwood came across Jane Prentiss (MAG022: Colony)",
        "coords": {
            "latitude": 51.565825,
            "longitude": -0.1317412
        }
    },
    {
        "id": 163,
        "name": "Carlos Vittery's Grandparents' House",
        "description": "Where Carlos Vittery accidentally crushed a spider and its egg sac, giving birth to his lifelong arachnophobia (MAG016: Arachnophobia)",
        "coords": {
            "latitude": 50.8236393,
            "longitude": -1.5926651
        }
    },
    {
        "id": 164,
        "name": "Chiswick Library",
        "description": "Where Jared Hopworth found The Boneturner's Tale, and started his path to becoming The Boneturner. (MAG017: The Boneturner's Tale)",
        "coords": {
            "latitude": 51.4915797,
            "longitude": -0.2610299
        }
    },
    {
        "id": 165,
        "name": "Welbeck House",
        "description": "Where Toby Carlisle's hammered meat into every surface of his flat, and eventually died from the fallout of The Last Feast's failure (MAG018: The Man Upstairs).",
        "coords": {
            "latitude": 51.4566245,
            "longitude": -0.1920388
        }
    },
    {
        "id": 166,
        "name": "89 Bullingdon Road",
        "description": "Where Bethany O'Connor began to lose her mind (MAG019: Confession) Where Father John Burroughs murdered and ate Christopher Bilham and James Mann in a perversion of the Eucharist (MAG020: Desecrated Host)",
        "coords": {
            "latitude": 51.745142,
            "longitude": -1.2381751
        }
    },
    {
        "id": 167,
        "name": "Oxford Oratory Church of St. Aloysius Gonzaga",
        "description": "Where Breekon and Hope delivered a pale yellow stole shortly before the time of Father Edwin Burroughs' crimes (MAG020: Desecrated Host)",
        "coords": {
            "latitude": 51.7595068,
            "longitude": -1.2612502
        }
    },
    {
        "id": 168,
        "name": "Open Skydiving Drop Site",
        "description": "Where Robert Kelly was trapped in the sky by Simon Fairchild (MAG021: Freefall)",
        "coords": {
            "latitude": 53.5206778,
            "longitude": -1.0558488
        }
    },
    {
        "id": 169,
        "name": "Martin Blackwood's Flat",
        "description": "Where Martin Blackwood was trapped for 13 days by Jane Prentiss (MAG022: Colony)",
        "coords": {
            "latitude": 51.4750911,
            "longitude": -0.1232405
        }
    },
    {
        "id": 170,
        "name": "Nikolai Denikin's House",
        "description": "Where Leanne Denikin discovered an antique Calliope Organ and a steamer trunk containing 23 clown dolls, eventually resulting in the death of her boyfriend, Joshua Drury (MAG 24: Strange Music)",
        "coords": {
            "latitude": 53.4427438,
            "longitude": -2.9866105
        }
    },
    {
        "id": 171,
        "name": "Hither Green Dissenters Chapel",
        "description": "Where Mark Bilham collapsed a portion of The Extinguished Sun being performed by The People's Church of the Divine Host (MAG025: Growing Dark)",
        "coords": {
            "latitude": 51.438291,
            "longitude": 0.0066248
        }
    },
    {
        "id": 172,
        "name": "Sasha James' Flat",
        "description": "Where Sasha James first caught a glimpse of The Distortion outside (MAG026: A Distortion)",
        "coords": {
            "latitude": 51.5682064,
            "longitude": -0.1066033
        }
    },
    {
        "id": 173,
        "name": "Coffee Shop near Victoria Station",
        "description": "Where Sasha James met The Distortion (MAG026: A Distortion)",
        "coords": {
            "latitude": 51.4928483,
            "longitude": -0.1403689
        }
    },
    {
        "id": 174,
        "name": "Hanwell Cemetery",
        "description": "Where Sasha James met the Distortion for the second time (MAG026: A Distortion)",
        "coords": {
            "latitude": 51.5086783,
            "longitude": -0.3319815
        }
    },
    {
        "id": 175,
        "name": "Abandoned Pub on Azalea Close",
        "description": "Where Sasha James and The Distortion discovered what remained of Timothy Hodge (MAG026: A Distortion)",
        "coords": {
            "latitude": 51.5101259,
            "longitude": -0.3316069
        }
    },
    {
        "id": 176,
        "name": "Sarah Baldwin's Flat",
        "description": "Where \"Sarah Baldwin\" allegedly lived after being taken by The Anglerfish (MAG028: Skintight)",
        "coords": {
            "latitude": 51.4255093,
            "longitude": -0.0585407
        }
    },
    {
        "id": 177,
        "name": "Cambridge Military Hospital",
        "description": "Where Melanie King witnessed Sarah Baldwin stapling her skin back on after running afoul of a manifestation of The Slaughter (MAG028: Skintight)",
        "coords": {
            "latitude": 51.244,
            "longitude": -0.765
        }
    },
    {
        "id": 178,
        "name": "Bunker Hill Farmhouse",
        "description": "Where Nathaniel Thorp beat Death dishonestly in a game of Faro, dooming himself to take its place (MAG029: Cheating Death).",
        "coords": {
            "latitude": 42.3830251,
            "longitude": -71.0670795
        }
    },
    {
        "id": 179,
        "name": "Aver Meats Abattoir",
        "description": "Where David Laylow lost himself in the slaughterhouse at the hands of Tom Haan (MAG030: Killing Floor)",
        "coords": {
            "latitude": 51.5452437,
            "longitude": -0.0764418
        }
    },
    {
        "id": 180,
        "name": "Tom Haan's House",
        "description": "Where Tom Haan lived for ten years, including the time he worked for Aver Meats, it was found dilapidated by his landlord after his disappearance (MAG030: Killing Floor)",
        "coords": {
            "latitude": 51.5954317,
            "longitude": -0.0377719
        }
    },
    {
        "id": 181,
        "name": "Arden Neeli's House",
        "description": "Where Lawrence Mortimer met up with Arden Neeli to go hunting in the mountains (MAG031: First Hunt)",
        "coords": {
            "latitude": 37.5191401,
            "longitude": -77.5600953
        }
    },
    {
        "id": 182,
        "name": "Blue Ridge Mountains",
        "description": "Where an Avatar(?) of The Hunt killed Arden Neeli, but failed to kill Lawrence Mortimer (MAG031: First Hunt).",
        "coords": {
            "latitude": 37.8819114,
            "longitude": -78.9835344
        }
    },
    {
        "id": 183,
        "name": "Jane Prentiss' Flat",
        "description": "Where Jane Prentiss lived during her transformation into The Hive (MAG032: Hive) Where Jordan Kennedy was called in to deal with the infestation and Arthur Nolan immolated (MAG055: Pest Control)",
        "coords": {
            "latitude": 51.568783,
            "longitude": -0.1324237
        }
    },
    {
        "id": 184,
        "name": "Whittington Hospital",
        "description": "Where Jane Prentiss was taken for treatment for her infection, resulting in the deaths of seven hospital staff (MAG032: Hive)",
        "coords": {
            "latitude": 51.5668985,
            "longitude": -0.1382716
        }
    },
    {
        "id": 185,
        "name": "Porto do Itaqui",
        "description": "Where Carlita Sloane embarked on The Tundra with Peter Lukas (MAG033: Boatswain's Call)",
        "coords": {
            "latitude": -2.577658,
            "longitude": -44.3673458
        }
    },
    {
        "id": 186,
        "name": "Port of Felixstowe",
        "description": "Where Sean Kelly embarked on The Tundra (MAG033: Boatswain's Call)",
        "coords": {
            "latitude": 51.9491514,
            "longitude": 1.3239048
        }
    },
    {
        "id": 187,
        "name": "Coast of Morocco",
        "description": "Where Sean Kelly's body washed up after he was given to The Lonely aboard the Tundra (MAG033: Boatswain's Call)",
        "coords": {
            "latitude": 32.9261107,
            "longitude": -8.8051733
        }
    },
    {
        "id": 188,
        "name": "King's College London",
        "description": "Where Dr. Lionel Elliot taught the Anatomy Students \"the insides\" (MAG034: Anatomy Class)",
        "coords": {
            "latitude": 51.5110457,
            "longitude": -0.1157824
        }
    },
    {
        "id": 189,
        "name": "Anatomy Students' House",
        "description": "Where the Anatomy Students lived while they took Introduction to Human Anatomy and Physiology with Dr. Lionel Elliott (MAG034: Anatomy Class)",
        "coords": {
            "latitude": 51.5256805,
            "longitude": 0.0346801
        }
    },
    {
        "id": 190,
        "name": "St Mary's University, Twickenham",
        "description": "Where Dr. Rashid Sadana \"took his own life\" while teaching the Anatomy Students (MAG034: Anatomy Class)",
        "coords": {
            "latitude": 51.4371091,
            "longitude": -0.335346
        }
    },
    {
        "id": 191,
        "name": "The Reform Club at 100 Pall Mall",
        "description": "Where Harold Silvana and Gerard Keay discovered Robert Smirke's 'Balance and Fear', an architectural piece in the basement representing the 14 Entities (MAG035: Old Passages)",
        "coords": {
            "latitude": 51.506551,
            "longitude": -0.1334814
        }
    },
    {
        "id": 192,
        "name": "Ivy Meadows Care Home",
        "description": "Where John Amherst took over and brought down a plague (MAG036: Taken Ill)",
        "coords": {
            "latitude": 53.4335137,
            "longitude": -2.0929788
        }
    },
    {
        "id": 193,
        "name": "Gertrude's Ritual Circle",
        "description": "Where Jason North doomed himself to the flame by disturbing the circle (MAG037: Burnt Offering). Where Gertrude Robinson tied her fate to Agnes Montague (MAG139: Chosen)",
        "coords": {
            "latitude": 57.7170445,
            "longitude": -4.5058146
        }
    },
    {
        "id": 194,
        "name": "Raigmore Hospital",
        "description": "Where Jason North died three days after being taken in for treatment when he self-immolated following his visit to the ritual circle (MAG037: Burnt Offering)",
        "coords": {
            "latitude": 57.4741613,
            "longitude": -4.1934553
        }
    },
    {
        "id": 195,
        "name": "The Good Ship",
        "description": "Where Lee Kipple went to a performance by Grifter's Bone, leaving him with multiple slashes across his chest and a never-ending trickle of blood from his ears (MAG042: Grifter's Bone)",
        "coords": {
            "latitude": 51.5437325,
            "longitude": -0.2004032
        }
    },
    {
        "id": 196,
        "name": "Tarot Shop",
        "description": "Where Oliver Banks warned Jennifer Ling against pursuing Grifter's Bone (MAG042: Grifter's Bone)",
        "coords": {
            "latitude": 51.5150424,
            "longitude": -0.1264705
        }
    },
    {
        "id": 197,
        "name": "Dean Street Jazz Club",
        "description": "Where Jennifer Ling recorded and then witnessed the gruesome aftermath of a Grifter's Bone show (MAG042: Grifter's Bone)",
        "coords": {
            "latitude": 51.5140696,
            "longitude": -0.1326219
        }
    },
    {
        "id": 198,
        "name": "Clapham Fire",
        "description": "Where Basira Hussain and John Spencer arrested Diego Molina, after which John Spencer boiled himself alive (MAG043: Section 31). Perhaps also where Lynne 'Celia' Hammond saw a ghost (MAG100: I Guess You Had To Be There)",
        "coords": {
            "latitude": 51.4655939,
            "longitude": -0.1388909
        }
    },
    {
        "id": 199,
        "name": "Natural History Museum",
        "description": "Where Diego Molina worked while living in London (MAG043: Section 31)",
        "coords": {
            "latitude": 51.496715,
            "longitude": -0.1763672
        }
    },
    {
        "id": 200,
        "name": "Kensington Flat",
        "description": "Where Basira Hussain and Alice 'Daisy' Tonner came across an attempted suicide by a deathless being (MAG043: Section 31)",
        "coords": {
            "latitude": 51.4988722,
            "longitude": -0.193966
        }
    },
    {
        "id": 201,
        "name": "Algasovo",
        "description": "Where Ivan Utkin was an unwilling participant in a performance by the Circus of the Other, and his brother Yuri was an unwilling spectator (MAG044: Tightrope)",
        "coords": {
            "latitude": 53.6948491,
            "longitude": 41.6117855
        }
    },
    {
        "id": 202,
        "name": "London School of Hygiene and Tropical Medicine",
        "description": "Where Dr. Neil Thompson was sucked dry by his own mosquitos (MAG045: Blood Bag)",
        "coords": {
            "latitude": 51.5206176,
            "longitude": -0.1299953
        }
    },
    {
        "id": 203,
        "name": "Three Greyhounds Pub",
        "description": "Where Dr. Neil Thompson and Thomas Neill sold John Snow's Syringe to Mikaele Salesa (MAG045: Blood Bag)",
        "coords": {
            "latitude": 51.5134501,
            "longitude": -0.1302928
        }
    },
    {
        "id": 204,
        "name": "Trinity College London",
        "description": "Where Timothy Stoker received his First in Anthropology (MAG045: Blood Bag)",
        "coords": {
            "latitude": 51.5061787,
            "longitude": -0.1002402
        }
    },
    {
        "id": 205,
        "name": "Lion Street Books",
        "description": "Where Michael Crew purchased many esoteric texts from Herbert Knox, and eventually, Ex Altiora. (MAG046: Literary Heights)",
        "coords": {
            "latitude": 50.8378708,
            "longitude": -0.7779374
        }
    },
    {
        "id": 206,
        "name": "Chichester Cathedral",
        "description": "Where Michael Crew leapt from the belltower, giving himself to the The Vast and trapping The Lichtenberg Figure in Ex Altiora (MAG046: Literary Heights)",
        "coords": {
            "latitude": 50.8366424,
            "longitude": -0.7813573
        }
    },
    {
        "id": 207,
        "name": "Kirstin Bowman's Bookstore",
        "description": "Where Kirstin Bowman read Ex Altiora and fell down the stairs, breaking her neck, resulting in the book being passed on to Herbert Knox (MAG046: Literary Heights)",
        "coords": {
            "latitude": 51.0713603,
            "longitude": -1.7939677
        }
    },
    {
        "id": 208,
        "name": "Wolverton Kendrick Property",
        "description": "Where Helen Richardson first entered into The Distortion's door (MAG047: The New Door)",
        "coords": {
            "latitude": 51.4992472,
            "longitude": -0.2621286
        }
    },
    {
        "id": 209,
        "name": "The Streets of Dulwich",
        "description": "Where Helen Richardson temporarily escaped the hallways of The Distortion (MAG047: The New Door)",
        "coords": {
            "latitude": 51.4498114,
            "longitude": -0.0704301
        }
    },
    {
        "id": 210,
        "name": "Severn Bridge",
        "description": "Where, as a child, Andrea Nunis always felt the rush of exploration come over her, while crossing into Wales (MAG048: Lost in the Crowd).",
        "coords": {
            "latitude": 51.6090529,
            "longitude": -2.6377624
        }
    },
    {
        "id": 211,
        "name": "Florence Hostel",
        "description": "Where Andrea Nunis first met Ethan Taylor (MAG048: Lost in the Crowd)",
        "coords": {
            "latitude": 43.7657367,
            "longitude": 11.2390767
        }
    },
    {
        "id": 212,
        "name": "Manena Hostel",
        "description": "Where Andrea Nunis and Ethan Taylor stayed before they were taken by The Lonely, from which Andrea narrowly escaped (MAG048: Lost in the Crowd)",
        "coords": {
            "latitude": 44.4104239,
            "longitude": 8.9333664
        }
    },
    {
        "id": 213,
        "name": "Hector Laredo's Workplace",
        "description": "Where Hector Laredo worked before he met his end (MAG049: The Butcher's Window)",
        "coords": {
            "latitude": 51.5175746,
            "longitude": -0.0822992
        }
    },
    {
        "id": 214,
        "name": "River Road Warehouse",
        "description": "Where Hector Laredo was delivering heroin for the Ukrainian mafia, and where they sent him to see Jared Hopworth after he failed to make a drop (MAG049: The Butcher's Window)",
        "coords": {
            "latitude": 51.5212048,
            "longitude": 0.0974291
        }
    },
    {
        "id": 215,
        "name": "Jared's Butcher's Shop",
        "description": "Where Jared Hopworth plied his craft for the Ukrainian mafia, until Gregory Pryor saw him rendering Hector Laredo (MAG049: The Butcher's Window)",
        "coords": {
            "latitude": 51.4797531,
            "longitude": -0.1274161
        }
    },
    {
        "id": 216,
        "name": "Christ Church College",
        "description": "Where Elias Bouchard received a Third in Philosophy, Politics and Economics (MAG049: The Butcher's Window)",
        "coords": {
            "latitude": 51.7498733,
            "longitude": -1.2558446
        }
    },
    {
        "id": 217,
        "name": "Carlton Chambers",
        "description": "Where George Gilbert Scott apprenticed under Sampson Kempthorne, and, on one dark night, Kempthorne caught sight of The Governor (MAG050: Foundations)",
        "coords": {
            "latitude": 51.5133897,
            "longitude": -0.1405104
        }
    },
    {
        "id": 218,
        "name": "Guildford Workhouse",
        "description": "Where Harry was encased in the wall by The Governor for his 'idleness', as the building was constructed under the watch of George Gilbert Scott and William Bonython Moffatt (MAG050: Foundations)",
        "coords": {
            "latitude": 51.2356059,
            "longitude": -0.5559139
        }
    },
    {
        "id": 219,
        "name": "Sable Island",
        "description": "Where Antonia Hayley dived deeper than she bargained for, under the direction of Simon Fairchild (MAG051: High Pressure)",
        "coords": {
            "latitude": 43.9327347,
            "longitude": -59.9166291
        }
    },
    {
        "id": 220,
        "name": "Hackney Jewelers",
        "description": "Where Simon Fairchild cracked the cases which contained his jewels (MAG051: High Pressure)",
        "coords": {
            "latitude": 51.5483054,
            "longitude": -0.0549902
        }
    },
    {
        "id": 221,
        "name": "Madame Tussauds London",
        "description": "Where NotSasha went on extra long lunch breaks, supposedly to meet with her new boyfriend (MAG051: High Pressure)",
        "coords": {
            "latitude": 51.5230174,
            "longitude": -0.1543613
        }
    },
    {
        "id": 222,
        "name": "HMP Wakefield",
        "description": "Where Father Edwin Burroughs was imprisoned for his crimes (MAG020: Desecrated Host) Where Robert Montauk was imprisoned for his crimes and eventually killed by The Still And Lightless Beast (MAG052: Exceptional Risk)",
        "coords": {
            "latitude": 53.6820424,
            "longitude": -1.5065964
        }
    },
    {
        "id": 223,
        "name": "Bir el Gubi",
        "description": "Where Sergeant Walter Heller was wounded in battle during Operation Crusader (MAG053: Crusader)",
        "coords": {
            "latitude": 31.5383333,
            "longitude": 24.0311111
        }
    },
    {
        "id": 224,
        "name": "Serapeum of Alexandria",
        "description": "Where Sergeant Walter Heller encountered a previous iteration of The Archives, which Gertrude Robinson later destroyed with explosives (MAG053: Crusader)",
        "coords": {
            "latitude": 31.1824249,
            "longitude": 29.8957361
        }
    },
    {
        "id": 225,
        "name": "The Trophy Room Taxidermy",
        "description": "Where Alexander Scaplehorn came across agents of The Stranger and almost became a victim of The Anglerfish (MAG054: Still Life)",
        "coords": {
            "latitude": 51.6170746,
            "longitude": -0.1765656
        }
    },
    {
        "id": 226,
        "name": "John Amherst's House",
        "description": "Where Jordan Kennedy was called in by a concerned neighbour to deal with an ant infestation (MAG055: Pest Control)",
        "coords": {
            "latitude": 51.3990943,
            "longitude": 0.0074965
        }
    },
    {
        "id": 227,
        "name": "Piccadilly Gardens",
        "description": "Where Trevor Herbert witnessed an interaction between Alard Dupont and two police officers that convinced him Dupont was a vampire (MAG056: Children of the Night)",
        "coords": {
            "latitude": 53.4809634,
            "longitude": -2.2369427
        }
    },
    {
        "id": 228,
        "name": "The Haçienda",
        "description": "Where Alard Dupont exited with a friend and was murdered a few streets away by Trevor Herbert in the grips of The Hunt (MAG056: Children of the Night)",
        "coords": {
            "latitude": 53.4742051,
            "longitude": -2.2471088
        }
    },
    {
        "id": 229,
        "name": "Burke County, North Carolina",
        "description": "Where Benjamin Carlisle grew up, and where he set out from on his journey to the Willamette Valley (MAG058: Trail Rations)",
        "coords": {
            "latitude": 35.7616931,
            "longitude": -81.734942
        }
    },
    {
        "id": 230,
        "name": "Savannah, Missouri",
        "description": "Where Benjamin Carlisle married Mrs. Carlisle, and they began on their doomed journey to the Willamette Valley (MAG058: Trail Rations)",
        "coords": {
            "latitude": 39.9416606,
            "longitude": -94.8302451
        }
    },
    {
        "id": 231,
        "name": "Fort John",
        "description": "Where the Carlisles were lead into the mountains by Eustace Wick (MAG058: Trail Rations)",
        "coords": {
            "latitude": 42.2032788,
            "longitude": -104.5570268
        }
    },
    {
        "id": 232,
        "name": "The Oregon Trail",
        "description": "Where Mrs. Carlisle refused(?) to succumb to cannibalism (MAG058: Trail Rations)",
        "coords": {
            "latitude": 42.6830583,
            "longitude": -108.9670581
        }
    },
    {
        "id": 233,
        "name": "Christopher Meyer's House",
        "description": "Where Rosa Meyer broke a mirror and turned The Eye's gaze upon herself (MAG060: Observer Effect)",
        "coords": {
            "latitude": 50.9315169,
            "longitude": -1.452159
        }
    },
    {
        "id": 234,
        "name": "BBC Norfolk",
        "description": "Where Rosa Meyer had a nervous breakdown on air due to the effects of the mirror (MAG060: Observer Effect)",
        "coords": {
            "latitude": 52.6274149,
            "longitude": 1.2910357
        }
    },
    {
        "id": 235,
        "name": "Intersection North of Vauxhall Bridge",
        "description": "Where Rosa Meyer was arrested after murdering Danilo Costich and loading his van with explosives, in an apparent attempt to destroy the Magnus Institute (MAG060: Observer Effect)",
        "coords": {
            "latitude": 51.4887416,
            "longitude": -0.1295103
        }
    },
    {
        "id": 236,
        "name": "HMP Holloway",
        "description": "Where Rosa Meyer was imprisoned and eventually died after her attempt to destroy the Magnus Institute (MAG060: Observer Effect)",
        "coords": {
            "latitude": 51.5533014,
            "longitude": -0.1244038
        }
    },
    {
        "id": 237,
        "name": "M6, near Preston",
        "description": "Where Alice 'Daisy' Tonner witnessed Isaac Masters' descent into The Coffin (MAG061: Hard Shoulder)",
        "coords": {
            "latitude": 53.7913994,
            "longitude": -2.6653254
        }
    }
]

export default items