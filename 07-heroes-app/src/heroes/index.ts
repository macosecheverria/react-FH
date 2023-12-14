import { getHeroesByPublisher } from "./helpers/getHeroesByPublisher";
import DcPages from "./pages/DcPage";
import HeroPage from "./pages/HeroPage";
import MarvelPage from "./pages/MarvelPage";
import SearchPage from "./pages/SearchPage";
import HeroesRoute from "./routes/HeroesRoute";
import HeroesList from "./components/HeroesList";
import HeroCard from "./components/HeroCard";
import CharactersByHero from "./components/CharactersByHero";
import { getHeroById } from "./helpers/getHeroById";
import { IHeroes, heroes } from "./data/heroes";


export {
    MarvelPage,
    DcPages,
    HeroesRoute,
    SearchPage,
    HeroPage,
    getHeroesByPublisher,
    HeroesList,
    HeroCard,
    CharactersByHero,
    getHeroById,
    heroes
};

export type { IHeroes };
