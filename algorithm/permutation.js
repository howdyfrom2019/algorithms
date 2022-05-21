function permutation (arr, n) {
    if (n === 1) return arr.map(v => [v]);
    let result = [];

    arr.forEach((item, index, arr) => {
        const rest = arr.filter((_, restIdx) => restIdx !== index);
        const perms = permutation(rest, n - 1);
        const combine = perms.map((v) => [item, ...v]);
        result.push(...combine);
    });
    return result;
}

function combinations(arr, n) {
    if (n === 1) return arr.map(v => [v]);
    let result = [];

    arr.forEach((item, index, arr) => {
        const rest = arr.slice(index + 1);
        const combis = combinations(rest, n - 1);
        const combine = combis.map((v) => [item, ...v]);
        result.push(...combine);
    });
    return result;
}

console.log(permutation([4,5,6,7,8,2,3], 2));
console.log(combinations([4,5,6,7,8,2,3], 2))