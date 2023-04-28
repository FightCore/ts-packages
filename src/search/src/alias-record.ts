import { Character } from '@fightcore/models';

export class AliasRecord {
  name!: string;
  names!: string[];
  moves?: Map<string, string>;
  fightCoreId!: number;
  character?: Character;
}
