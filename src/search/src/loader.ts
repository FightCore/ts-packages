import { Character } from '@fightcore/models';

export interface Loader {
  get data(): Character[];

  load(): Promise<void>;
}
