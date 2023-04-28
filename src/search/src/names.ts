import { AliasRecord } from './alias-record';

export class Names {
  static data: AliasRecord[] = [
    {
      name: 'Bowser',
      names: ['bowser'],
      fightCoreId: 241,
    },
    {
      name: 'Captain Falcon',
      names: ['falcon', 'captainfalcon', 'cptfalcon', 'cf', 'cp', 'cpt'],
      moves: new Map<string, string>([
        ['knee', 'fair'],
        ['stomp', 'dair'],
        ['punch', 'neutralb'],
      ]),
      fightCoreId: 227,
    },
    {
      name: 'Donkey Kong',
      names: ['donkeykong', 'dk'],
      fightCoreId: 242,
      moves: new Map<string, string>([
        ['punch', 'neurtalb'],
        ['superpunch', 'neurtalb'],
        ['megapunch', 'neurtalb'],
        ['ultrapunch', 'neurtalb'],
      ]),
    },
    {
      name: 'Dr. Mario',
      names: ['drmario', 'doc', 'doctormario'],
      moves: new Map<string, string>([
        ['pill', 'neutralb'],
        ['cape', 'sideb'],
      ]),
      fightCoreId: 215,
    },
    {
      name: 'Falco',
      names: ['falco'],
      moves: new Map<string, string>([
        ['laser', 'neutralb'],
        ['shine', 'downb'],
        ['aerialblaster', 'aneutralb'],
        ['aeriallaser', 'aneutralb'],
        ['drill', 'dair'],
      ]),
      fightCoreId: 218,
    },
    {
      name: 'Fox',
      names: ['fox'],
      fightCoreId: 224,
      moves: new Map<string, string>([
        ['shine', 'downb'],
        ['laser', 'neutralb'],
        ['aerialblaster', 'aneutralb'],
        ['aeriallaser', 'aneutralb'],
        ['drill', 'dair'],
      ]),
    },
    {
      name: 'Ganondorf',
      names: ['ganondorf', 'ganon'],
      moves: new Map<string, string>([['stomp', 'dair']]),
      fightCoreId: 216,
    },
    {
      name: 'Ice Climbers',
      names: ['iceclimbers', 'ic', 'ics', 'icies'],
      fightCoreId: 209,
    },
    {
      name: 'Jigglypuff',
      names: ['jigglypuff', 'jiggs', 'puff', 'purin', 'rondoudou', 'pummeluff'],
      fightCoreId: 214,
    },
    {
      name: 'Kirby',
      names: ['kirby'],
      fightCoreId: 210,
    },
    {
      name: 'Link',
      names: ['link'],
      moves: new Map<string, string>([['tether', 'zair']]),
      fightCoreId: 238,
    },
    {
      name: 'Luigi',
      names: ['luigi'],
      fightCoreId: 213,
    },
    {
      name: 'Mario',
      names: ['mario'],
      fightCoreId: 236,
    },
    {
      name: 'Marth',
      names: ['marth'],
      fightCoreId: 222,
    },
    {
      name: 'Mewtwo',
      names: ['mewtwo', 'mew2', 'm2'],
      fightCoreId: 217,
    },
    {
      name: 'Mr. Game & Watch',
      names: ['mrgame&watch', 'mrgameandwatch', 'gameandwatch', 'game&watch', 'gamenwatch', 'g&w', 'gnw', 'gw'],
      moves: new Map<string, string>([['hammer', 'sideb']]),
      fightCoreId: 219,
    },
    {
      name: 'Ness',
      names: ['ness'],
      fightCoreId: 243,
    },
    {
      name: 'Pichu',
      names: ['pichu'],
      moves: new Map<string, string>([['jolt', 'neutralb']]),
      fightCoreId: 221,
    },
    {
      name: 'Pikachu',
      names: ['pikachu', 'pika'],
      moves: new Map<string, string>([['jolt', 'neutralb']]),
      fightCoreId: 237,
    },
    {
      name: 'Peach',
      names: ['princesspeach', 'peach'],
      moves: new Map<string, string>([['turnip', 'downb']]),
      fightCoreId: 240,
    },
    {
      name: 'Zelda',
      names: ['princesszelda', 'zelda'],
      fightCoreId: 239,
    },
    {
      name: 'Roy',
      names: ['roy'],
      fightCoreId: 223,
    },
    {
      name: 'Samus',
      names: ['samus'],
      moves: new Map<string, string>([['rocket', 'sideb']]),
      fightCoreId: 212,
    },
    {
      name: 'Sheik',
      names: ['sheik', 'shiek'],
      moves: new Map<string, string>([['boostgrab', 'dashgrab']]),
      fightCoreId: 260,
    },
    {
      name: 'Yoshi',
      names: ['yoshi'],
      fightCoreId: 211,
    },
    {
      name: 'Young Link',
      names: ['younglink', 'ylink', 'yink', 'yl', 'young'],
      moves: new Map<string, string>([['hookshot', 'zair']]),
      fightCoreId: 220,
    },
    {
      name: 'F-Wireframe',
      names: ['fwireframe', 'female', 'femalewireframe'],
      fightCoreId: -1,
    },
  ];
}
