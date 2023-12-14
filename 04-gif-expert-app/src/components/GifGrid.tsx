import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

type Props = {
  category: string;
};

const GifGrid: React.FC<Props> = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category} </h3>
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {images.map((images) => (
          <GifItem key={images.id} {...images} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
