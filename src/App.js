import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Games from "./components/Games/Games";
import Genres from "./components/Genres/Genres";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favorites: [],
      currentGames: [],
      games: [
         {
            id: 1,
            img: "batman.jpg",
            title: "Batman: Arkham Knight",
            genre: ["Action", "Adventure"],
            developer: "Rocksteady Studios",
            publisher: "Warner Bros. Interactive Entertainment",
            release_date: "June 23, 2015",
            platforms: ["PC", "PlayStation 4", "Xbox One"],
            game_modes: ["Single-player", "Multiplayer"],
            description: "Batman: Arkham Knight is the concluding installment of the Arkham series developed by Rocksteady Studios. Players once again take on the role of Batman in the open world of Gotham City, battling villains including Scarecrow and the Arkham Knight.",
            price: "19.99$"
          },
          {
            id: 2,
            img: "Fortnite.jpg",
            title: "Fortnite",
            genre: ["Battle Royale", "Survival"],
            developer: "Epic Games",
            publisher: "Epic Games",
            release_date: "July 25, 2017",
            platforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch", "iOS", "Android"],
            game_modes: ["Multiplayer"],
            description: "Fortnite is a popular online multiplayer battle royale game developed and published by Epic Games. Players compete against each other to be the last one standing in a shrinking play zone.",
            price: "Free-to-play"
          },
          {
            id: 3,
            img: "Rocket League.jpg",
            title: "Rocket League",
            genre: ["Sports", "Racing"],
            developer: "Psyonix LLC",
            publisher: "Psyonix LLC",
            release_date: "July 7, 2015",
            platforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
            game_modes: ["Single-player", "Multiplayer"],
            description: "Rocket League is a vehicular soccer video game developed and published by Psyonix. In the game, players control rocket-powered cars to hit a ball into the opponent's goal and score points over the course of a match.",
            price: "19.99$"
          },
          {
            id: 4,
            img: "Genshin Impact.jpg",
            title: "Genshin Impact",
            genre: ["Action", "Adventure", "RPG"],
            developer: "miHoYo",
            publisher: "miHoYo",
            release_date: "September 28, 2020",
            platforms: ["PC", "PlayStation 4", "PlayStation 5", "iOS", "Android"],
            game_modes: ["Single-player", "Multiplayer"],
            description: "Genshin Impact is an action role-playing game developed and published by miHoYo. The game takes place in the fantasy world of Teyvat, where players take on the role of the Traveler on a quest to search for their lost sibling and unravel the mysteries of the world. With its anime-inspired visuals and open-world exploration, Genshin Impact offers a rich gaming experience for players.",
            price: "Free-to-play"
          },
          {
            id: 5,
            img: "Cyberpunk 2077.jpg",
            title: "Cyberpunk 2077",
            genre: ["Action", "Role-playing"],
            developer: "CD Projekt Red",
            publisher: "CD Projekt",
            release_date: "December 10, 2020",
            platforms: ["PC", "PlayStation 4", "Xbox One", "Google Stadia"],
            game_modes: ["Single-player"],
            description: "Cyberpunk 2077 is an action role-playing video game developed and published by CD Projekt. The story takes place in Night City, an open world set in the Cyberpunk universe. Players assume the first-person perspective of a customizable mercenary known as V, who can acquire skills in hacking and machinery with options for melee and ranged combat.",
            price: "49.99$"
          },
          {
            id: 6,
            img: "League of Legends.jpg",
            title: "League of Legends",
            genre: ["MOBA", "Strategy"],
            developer: "Riot Games",
            publisher: "Riot Games",
            release_date: "October 27, 2009",
            platforms: ["PC"],
            game_modes: ["Multiplayer"],
            description: "League of Legends is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements. Two teams of powerful champions, each with a unique design and playstyle, battle head-to-head across multiple battlefields and game modes.",
            price: "Free-to-play"
          },
          {
            id: 7,
            img: "Minecraft.jpg",
            title: "Minecraft",
            genre: ["Sandbox", "Survival"],
            developer: "Mojang Studios",
            publisher: "Mojang Studios",
            release_date: "November 18, 2011",
            platforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch", "iOS", "Android"],
            game_modes: ["Single-player", "Multiplayer"],
            description: "Minecraft is a sandbox video game developed and published by Mojang Studios. In Minecraft, players explore a blocky, procedurally-generated 3D world with infinite terrain, and may discover and extract raw materials, craft tools and Games, and build structures or earthworks.",
            price: "26.95$"
          },
          {
            id: 8,
            img: "Among Us.jpg",
            title: "Among Us",
            genre: ["Social deduction", "Indie"],
            developer: "InnerSloth",
            publisher: "InnerSloth",
            release_date: "June 15, 2018",
            platforms: ["PC", "iOS", "Android"],
            game_modes: ["Multiplayer"],
            description: "Among Us is a multiplayer online social deduction game developed and published by InnerSloth. The game takes place in a space-themed setting where players are divided into crewmates and impostors. Crewmates must complete tasks while trying to identify the impostors among them, while impostors must sabotage the tasks and eliminate crewmates without being identified.",
            price: "Free-to-play"
          },
          {
            id: 9,
            img: "Hogwarts Legacy.jpg",
            title: "Hogwarts Legacy",
            genre: ["Action", "Adventure", "RPG"],
            developer: "Portkey Games",
            publisher: "Warner Bros. Interactive Entertainment",
            release_date: "2022",
            platforms: ["PC", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X/S"],
            game_modes: ["Single-player"],
            description: "Hogwarts Legacy is an action-adventure role-playing game set in the Wizarding World of Harry Potter. Players take on the role of a student at Hogwarts School of Witchcraft and Wizardry in the 1800s, exploring an open-world rendition of the magical school and its surroundings while uncovering mysteries and mastering spells.",
            price: "49.99$"
          },
          {
            id: 10,
            img: "Shadow of the Tomb Raider.jpg",
            title: "Shadow of the Tomb Raider",
            genre: ["Action", "Adventure"],
            developer: "Eidos-Montreal",
            publisher: "Square Enix",
            release_date: "September 14, 2018",
            platforms: ["PC", "PlayStation 4", "Xbox One"],
            game_modes: ["Single-player"],
            description: "Shadow of the Tomb Raider is the third installment in the rebooted Tomb Raider series, following Lara Croft's adventures as she races to save the world from a Maya apocalypse. Players explore lush jungles, solve intricate puzzles, and engage in thrilling combat.",
            price: "39.99$"
          },
          {
            id: 11,
            img: "The Elder Scrolls Online.jpg",
            title: "The Elder Scrolls Online",
            genre: ["MMORPG"],
            developer: "Zenimax Online Studios",
            publisher: "Bethesda Softworks",
            release_date: "April 4, 2014",
            platforms: ["PC", "PlayStation 4", "Xbox One"],
            game_modes: ["Multiplayer"],
            description: "The Elder Scrolls Online is a massively multiplayer online role-playing game set in the continent of Tamriel. Players can explore the world, complete quests, engage in player versus player combat, and more.",
            price: "29.99$"
          },
          {
            id: 12,
            img: "God of War.jpg",
            title: "God of War",
            genre: ["Action", "Adventure"],
            developer: "Santa Monica Studio",
            publisher: "Sony Interactive Entertainment",
            release_date: "April 20, 2018",
            platforms: ["PlayStation 4"],
            game_modes: ["Single-player"],
            description: "God of War is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment. It is the eighth installment in the God of War series, the sequel to God of War III, and the first game to be set in Norse mythology. Players control Kratos, a warrior who battles mythological beings in a quest to teach his son Atreus about responsibility and control his own rage.",
            price: "39.99$"
          },
          {
            id: 13,
            img: "The Witcher 3.jpg",
            title: "The Witcher 3: Wild Hunt",
            genre: ["Action", "RPG"],
            developer: "CD Projekt Red",
            publisher: "CD Projekt",
            release_date: "May 19, 2015",
            platforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
            game_modes: ["Single-player"],
            description: "The Witcher 3: Wild Hunt is an action role-playing game developed and published by CD Projekt Red. It is based on the Witcher series of fantasy novels by Andrzej Sapkowski. Players control Geralt of Rivia, a monster hunter known as a Witcher, as he searches for his missing adopted daughter on a vast open-world map.",
            price: "29.99$"
          },
          {
            id: 14,
            img: "Stellaris Nexus.jpg",
            title: "Stellaris Nexus",
            genre: ["Strategy", "Space"],
            developer: "Paradox Development Studio",
            publisher: "Paradox Interactive",
            release_date: "October 20, 2023",
            platforms: ["PC"],
            game_modes: ["Single-player", "Multiplayer"],
            description: "Stellaris Nexus is a grand strategy game set in the vastness of space. Players lead their civilization to explore, expand, exploit, and exterminate across a procedurally generated galaxy, encountering other alien species, managing diplomacy, warfare, and technology.",
            price: "29.99$"
          },
          {
            id: 15,
            img: "World of Warships.jpg",
            title: "World of Warships",
            genre: ["Action", "Strategy", "Simulation"],
            developer: "Wargaming",
            publisher: "Wargaming",
            release_date: "September 17, 2015",
            platforms: ["PC", "Mac", "Linux"],
            game_modes: ["Multiplayer"],
            description: "World of Warships is a naval warfare-themed multiplayer online game developed by Wargaming. Players command ships from various naval forces and engage in battles across different modes and scenarios.",
            price: "Free-to-play"
          },
          {
            id: 16,
            img: "Marvel's Spider-Man.jpg",
            title: "Marvel's Spider-Man",
            genre: ["Action", "Adventure"],
            developer: "Insomniac Games",
            publisher: "Sony Interactive Entertainment",
            release_date: "September 7, 2018",
            platforms: ["PlayStation 4", "PlayStation 5"],
            game_modes: ["Single-player"],
            description: "Marvel's Spider-Man is an action-adventure game developed by Insomniac Games. Players control Spider-Man as he traverses New York City, fighting crime and battling supervillains. The game features an original storyline with iconic characters from the Marvel Universe.",
            price: "29.99$"
          },
          {
            id: 17,
            img: "STAR WARS Jedi.jpg",
            title: "STAR WARS Jedi: Survivor",
            genre: ["Action", "Adventure"],
            developer: "LucasArts",
            publisher: "Electronic Arts",
            release_date: "November 15, 2023",
            platforms: ["PC", "PlayStation 5", "Xbox Series X/S"],
            game_modes: ["Single-player"],
            description: "STAR WARS Jedi: Survivor is an action-adventure game set in the Star Wars universe. Players take on the role of a Jedi Padawan who survived Order 66 and must navigate through a dangerous galaxy, facing off against the remnants of the Sith and the Empire.",
            price: "59.99$"
          },
          {
            id: 18,
            img: "God of War_Ragnarok.jpg",
            title: "God of War: Ragnarok",
            genre: ["Action", "Adventure"],
            developer: "Santa Monica Studio",
            publisher: "Sony Interactive Entertainment",
            release_date: "TBD",
            platforms: ["PlayStation 5"],
            game_modes: ["Single-player"],
            description: "God of War: Ragnarok is the sequel to the critically acclaimed God of War (2018). Developed by Santa Monica Studio, this action-adventure game continues the story of Kratos and his son Atreus as they confront Norse gods and monsters in their quest through the Nine Realms.",
            price: "TBD"
          },
          {
            id: 19,
            img: "Assassin's Creed_Valhalla.jpg",
            title: "Assassin's Creed: Valhalla",
            genre: ["Action", "Adventure"],
            developer: "Ubisoft Montreal",
            publisher: "Ubisoft",
            release_date: "November 10, 2020",
            platforms: ["PC", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X/S"],
            game_modes: ["Single-player"],
            description: "Assassin's Creed: Valhalla is the twelfth major installment in the Assassin's Creed series, set in the Viking age. Players assume the role of Eivor, a Viking raider, as they lead their clan from Norway to the shores of England in search of a new home.",
            price: "49.99$"
          },
          {
            id: 20,
            img: "Marvel’s Avengers.jpg",
            title: "Marvel’s Avengers",
            genre: ["Action", "Adventure"],
            developer: "Crystal Dynamics",
            publisher: "Square Enix",
            release_date: "September 4, 2020",
            platforms: ["PC", "PlayStation 4", "Xbox One", "PlayStation 5", "Xbox Series X/S"],
            game_modes: ["Single-player", "Multiplayer"],
            description: "Marvel’s Avengers is an action-adventure game developed by Crystal Dynamics and published by Square Enix. Players can take control of various superheroes from the Marvel Universe, including Iron Man, Thor, Hulk, Black Widow, and Captain America, as they battle against supervillains to save the world.",
            price: "39.99$"
          },
          {
            id: 21,
            img: "/World of Warcraft_Wrath of the Lich King.jpg",
            title: "World of Warcraft: Wrath of the Lich King",
            genre: ["MMORPG"],
            developer: "Blizzard Entertainment",
            publisher: "Blizzard Entertainment",
            release_date: "November 13, 2008",
            platforms: ["PC", "Mac"],
            game_modes: ["Multiplayer"],
            description: "World of Warcraft: Wrath of the Lich King is the second expansion set for the massively multiplayer online role-playing game (MMORPG) World of Warcraft. It introduces the continent of Northrend, home to the Lich King and his undead minions. Players embark on a journey to confront the Lich King and thwart his plans for Azeroth.",
            price: "29.99$"
          },
          {
            id: 22,
            img: "Overwatch.jpg",
            title: "Overwatch",
            genre: ["First-Person Shooter"],
            developer: "Blizzard Entertainment",
            publisher: "Blizzard Entertainment",
            release_date: "May 24, 2016",
            platforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
            game_modes: ["Multiplayer"],
            description: "Overwatch is a team-based multiplayer first-person shooter developed and published by Blizzard Entertainment. Set in the near-future Earth, players choose from a diverse cast of heroes, each with their own unique abilities, and work together to complete objectives.",
            price: "39.99$"
          }
      ]
    }
    this.state.currentGames = this.state.games;
    this.addToFavorites = this.addToFavorites.bind(this);
    this.deleteFavorite = this.deleteFavorite.bind(this);
    this.chooseGenre = this.chooseGenre.bind(this);
  }

  addToFavorites(game) {
    let array = false;
    this.state.favorites.forEach(el => {
      if (el.id === game.id) {
        array = true
      }
    })
    if(!array) {
      this.setState({favorites: [...this.state.favorites, game]})
    }
  }

  deleteFavorite(id) {
    this.setState({favorites: this.state.favorites.filter(el => el.id !== id)})
  }

  chooseGenre(genreKey) {
    if (genreKey === 'all') {
        this.setState({
            currentGames: this.state.games
        });
    } else {
        this.setState({
            currentGames: this.state.games.filter(el => el.genre.map(g => g.toLowerCase()).includes(genreKey))
        });
    }
  }


  render() {
    return (
      <div className="wrapper">
        <Header favorites={this.state.favorites} onDelete={this.deleteFavorite}/>
        <Genres chooseGenre={this.chooseGenre}/>
        <Games games={this.state.currentGames} onAdd={this.addToFavorites}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
