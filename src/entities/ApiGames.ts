import { Genre } from "../hooks/useGenres";
import { Platforms } from "../hooks/usePlatforms";
import { Publishers } from "./Publishers";

export interface ApiGames {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  genres: Genre[]
  publishers:Publishers[]
  background_image: string;
  parent_platforms: { platform: Platforms; }[];
  metacritic: number;
  rating_top: number;
}
