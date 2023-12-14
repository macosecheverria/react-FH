import { useEffect, useState } from "react";

type InitialStateApi = {
  isLoading: boolean;
  hasError?: boolean;
};


type DataApi = {
  id?: number;
  quote: string;
  author: string;
}

const useFetch = (url: string) => {
  const [data, setData] = useState<DataApi[]>([] as DataApi[]);

  const [state, setState] = useState<InitialStateApi>({
    isLoading: true,
    hasError: false,
  });

  useEffect(() => {
    const getFetch = async (): Promise<DataApi[]> => {
      try {
        setState(() => ({
          hasError: false,
          isLoading: true,
        }));

        const resp = await fetch(url);
        const data:DataApi[] = await resp.json();

        setState(() => ({
          isLoading: false,
          hasError: false,
        }));
        
        setData(data);
      } catch (error) {
        setState(() => ({
          isLoading: false,
          hasError: true
        }))
        console.log(error);

      }
      return []
    };

    getFetch();
  }, [url]);

  return {
    data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};

export default useFetch;
