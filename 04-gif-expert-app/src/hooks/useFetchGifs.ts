import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifts";

interface GetImageReturn {
  id: string;
  title: string;
  url: string;
}

const useFetchGifs = (category: string) => {
  const [images, setImages] = useState<GetImageReturn[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getImages = async () => {
      try {
        const newImages = await getGifts(category);
        setImages(newImages);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getImages();
  }, [category]);

  return {
    images,
    isLoading,
  };
};

export default useFetchGifs;

