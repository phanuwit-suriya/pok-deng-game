import { Player } from '../src/Player';

describe('Player class', () => {
  it('has accessible class properties: username, credit', () => {
    const player = new Player('Player');
    expect(typeof(player.username)).toBe('string');
    expect(typeof(player.credit)).toBe('number');
  });
});