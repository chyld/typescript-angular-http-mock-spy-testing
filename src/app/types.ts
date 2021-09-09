export interface Info {
  count: number;
  next: string;
  pages: number;
  prev: string;
}

export interface Episode {
  id: number;
  name: string;
  url: string;
  episode: string;
  air_date: string;
  characters: string[];
}

export interface Episodes {
  info: Info;
  results: Episode[];
}

export interface Character {
  id: number;
  name: string;
}
