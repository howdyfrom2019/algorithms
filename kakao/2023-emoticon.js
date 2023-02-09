function solution(users, emoticons) {
  const prices = emoticons.map((emoticon, i) => Array.from({ length: 4 }, (_, i) => emoticon * (10 - i - 1) / 10));
  const allCases = findAllCases(0, []);
  let [subscribers, sales] = [0, 0];

  allCases.forEach((cases) => {
    let [cntSubscribers, cntSales] = [0, 0];
    users.forEach((user) => {
      const [dc, criteria] = user;
      const userI = Math.ceil(dc / 10) - 1;
      let thisUserPaying = 0;
      for (const { i, target } of cases) {
        if (userI <= i) {
          thisUserPaying += target;
        }
      }

      if (thisUserPaying >= criteria) {
        cntSubscribers++;
      } else {
        cntSales += thisUserPaying;
      }
    });

    if (subscribers < cntSubscribers) {
      subscribers = cntSubscribers;
      sales = cntSales;
    } else if (subscribers === cntSubscribers) {
      sales = Math.max(sales, cntSales);
    }
  });

  return [subscribers, sales];


  function findAllCases (cursor, targets) {
    if (cursor === prices.length) {
      return [targets.map(v => v)];
    }

    const result = [];
    for (let i = 0; i < 4; i++) {
      result.push(...findAllCases(cursor + 1, [...targets, { i, target:prices[cursor][i] }]));
    }

    return result;
  }
}