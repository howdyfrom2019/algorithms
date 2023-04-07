function solution(players, callings) {
  const cntRank = {};
  players.forEach((player, i) => {
    cntRank[player] = { rank: i, prev: i === 0 ? null : i - 1};
  });

  callings.forEach((player) => {
    const { rank, prev } = cntRank[player];
    const { rank: nextRank, prev: grandPrev } = cntRank[players[prev]];

    cntRank[player] = { rank: nextRank, prev: grandPrev };
    cntRank[players[prev]] = { rank: rank, prev: prev };
    [players[rank], players[prev]] = [players[prev], players[rank]];
  });

  return players;
}
