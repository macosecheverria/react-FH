import {  IHeroes, heroes } from "..";

export const getHeroesByName  = (name: string = ''): IHeroes[] => {
    name =  name.toLocaleLowerCase().trim();

    if(name.length === 0) return [];

    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().trim().includes(name));
}