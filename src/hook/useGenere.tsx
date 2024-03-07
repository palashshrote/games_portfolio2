import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenere = () => {
  return useData<Genre>("/genres");
};

export default useGenere;
