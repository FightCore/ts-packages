import { MoveAlias } from './move-alias';

export class Aliases {
  static data: MoveAlias[] = [
    {
      move: 'neutralb',
      alias: ['b', 'neutralspecial', 'nb', 'nspecial'],
    },
    {
      move: 'neutraltech',
      alias: ['tech', 'techinplace', 'techneutral', 'tip'],
    },
    {
      move: 'fsmash',
      alias: ['sidesmash'],
    },
    {
      move: 'sideb',
      alias: ['sidespecial'],
    },
    {
      move: 'dowmb',
      alias: ['downspecial'],
    },
    {
      move: 'upb',
      alias: ['upspecial'],
    },
    {
      move: 'grab',
      alias: ['shieldgrab'],
    },
    {
      move: 'forwardroll',
      alias: ['froll', 'forwardsroll'],
    },
    {
      move: 'backroll',
      alias: ['broll', 'backwardroll'],
    },
    {
      move: 'dair',
      alias: ['stomp'],
    },
    {
      move: 'dashgrab',
      alias: ['runninggrab', 'rgrab', 'rungrab'],
    },
    {
      move: 'bgetup',
      alias: ['getupback'],
    },
    {
      move: 'fgetup',
      alias: ['getupattack', 'getupfront', 'getup', 'getupstomach', 'attackstomach'],
    },
  ];
}
