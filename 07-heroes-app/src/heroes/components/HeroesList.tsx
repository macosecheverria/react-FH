import { useMemo } from "react";
import { getHeroesByPublisher } from "..";
import { HeroCard } from "..";

interface Props {
  publisher: string;
}

const HeroesList = ({ publisher }: Props) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <>
      <div className="row rows-col-1 row-cols-md-3 g-3">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </>
  );
};

export default HeroesList;
