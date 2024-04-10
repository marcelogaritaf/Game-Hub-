import { Platforms } from "../hooks/usePlatforms";

export interface ApiGames {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platforms; }[];
  metacritic: number;
  rating_top: number;
}
