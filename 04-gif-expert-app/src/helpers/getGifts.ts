export interface GetImage {
  id: string;
  title: string;
  images: GetImageUrl;
}

export interface GetImageUrl {
  original: {
    url: string;
  };
}

export const getGifts = async (category: string) => {
  try {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ONMaq4VnR25rMk2NUlaK8EQbKIl7tVA0&q=${category}&limit=10`;

    const res = await fetch(url);
    const { data } = await res.json();

    const gifs = data.map((img: GetImage) => ({
      id: img.id,
      title: img.title,
      url: img.images.original.url,
    }));

    return gifs;
  } catch (error) {
    console.error(error);
  }
};
