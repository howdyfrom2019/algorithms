const example = '4 7\n' +
    '6 13\n' +
    '4 8\n' +
    '3 6\n' +
    '5 12';

const input = example.toString().split('\n');
const [N, K] = input.shift().split(' ').map((item) => parseInt(item));
const intInput = input.map((line) => line.split(' ').map((item) => parseInt(item)));

const recurse = (index, weight, values) => {
    let sum = values.reduce((acc, val, index) => {
        if (weight > K) {
            index < values.length - 1 && (acc += val);
        } else {
            acc += val;
        }
        return acc;
    });

    if (index + 1 === N) return sum;
    if (values.length === N) return sum;
    if (weight >= K) return sum;

    const result = [];
    for (let i = index + 1; i < N; i++) {
        const newWeight = weight + intInput[i][0];
        const newValues = [...values, intInput[i][1]];

        result.push(recurse(i, newWeight, newValues));
    }
    return Math.max(...result);
};

const answer = [];
let index = 0;
for (const [weight, value] of intInput) {
    answer.push(recurse(index, weight, [value]));
    index++;
}
console.log(answer);