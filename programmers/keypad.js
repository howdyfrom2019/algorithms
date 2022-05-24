function solution(numbers, hand) {
    let [lp, rp] = [[3, 0], [3, 2]];
    let answer = '';

    numbers.forEach((number) => {
        if (number % 3 === 1) {
            answer += 'L';
            lp = [Math.floor(number / 3), 0];
        } else if (number !== 0 && (number % 3 === 0)) {
            answer += 'R';
            rp = [Math.floor(number / 3) - 1, 2];
        } else {
            let midKey = [0, 1];
            number === 0 ? midKey = [3, 1] : midKey = [Math.floor(number / 3), 1];
            const lLen = Math.abs(lp[0] - midKey[0]) + Math.abs(lp[1] - midKey[1]);
            const rLen =  Math.abs(rp[0] - midKey[0]) +  Math.abs(rp[1] - midKey[1]);
            if (lLen < rLen) {
                answer += 'L';
                lp = midKey;
            } else if (lLen > rLen) {
                answer+= 'R';
                rp = midKey;
            } else {
                if (hand === 'right') {
                    answer += 'R';
                    rp = midKey;
                } else {
                    answer += 'L';
                    lp = midKey;
                }
            }
        }
    });
    return answer;
}