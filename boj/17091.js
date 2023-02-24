function addToForMinutes(minutes, query) {
  const unit = minutes === 1 || minutes === 59 ? 'minute' : 'minutes'
  const unique = [15, 30, 45];

  if (unique.includes(minutes)) {
    return `${query} ${minutes === 45 ? 'to ' : 'past '}`;
  }

  if (minutes > 30) return `${query} ${unit} to `;
  else return `${query} ${unit} past `;
}
function makeMinQuery(minutes) {
  const numMin = Number(minutes);
  const minQuery = [
    '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'quarter', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
    'twenty', 'twenty one', 'twenty two', 'twenty three','twenty four','twenty five','twenty six','twenty seven','twenty eight','twenty nine',
    'half'
  ];

  if (numMin === 1) return addToForMinutes(1, minQuery[numMin]);
  if (numMin <= 30) return addToForMinutes(numMin, minQuery[numMin]);
  else return addToForMinutes(numMin, minQuery[60 - numMin]);
}

function solution(input) {
  const [h, m] = input;
  const hours = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'one'];
  if (m === 0) console.log(`${hours[h]} o' clock`);
  else console.log(`${makeMinQuery(m)}${hours[m > 30 ? h + 1 : h]}`);
}

solution([1, 0]);
solution([1, 1]);
solution([2, 10]);
solution([3, 15]);
solution([4, 28]);
solution([5, 30]);
solution([6, 40]);
solution([7, 45]);
solution([8, 47]);
solution([9, 50]);
solution([12, 53]);
solution([11, 59]);
//
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = [];

rl.on('line', (line) => {
  input.push(Number(line));
}).on('close', () => {
  solution(input)
  process.exit();
});
