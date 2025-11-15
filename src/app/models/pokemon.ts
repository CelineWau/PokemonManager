export interface Pokemon {
  name: string;
  height: number;
  weight: number;
  url: string;
  sprites: {
    front_default: string;
    back_default: string;
  }
}
