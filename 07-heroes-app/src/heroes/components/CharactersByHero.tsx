interface Props {
  alter_ego: string;
  characters: string;
}

const CharactersByHero = ({ alter_ego, characters }: Props) => {
  return characters === alter_ego ? <></> : <p>{characters}</p>;
};

export default CharactersByHero;
