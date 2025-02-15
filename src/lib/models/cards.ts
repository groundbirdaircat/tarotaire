export type ElementName = 'air' | 'earth' | 'water' | 'fire';

export interface Card {
  name: string;
  image: string;
  rank: number | string;
  suit: string;
  planet: string | null;
  element: ElementName;
  sign: string[];
  meanings: {
    upright: string[];
    reversed: string[];
  };
  type: string;
  description: string;
  description2: string;
}
