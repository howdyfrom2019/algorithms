function duplicateChk(counter) {
    if (counter >= 1000) {
        return 3;
    } else if (counter >= 100) {
        return 2;
    } else if (counter >= 10) {
        return 1;
    }
    return 0;
}

function search(s) {
    if (s.length === 1) return 1;

    let len = 1;
    const answer = [];
    while (len <= Math.floor(s.length / 2)) {
        const stack = [];
        let result = 0;
        let isDuplicated = false;
        let duplicateCounter = 1;

        for (let i = 0; i < s.length; i += len) {
            let unitWord = '';
            if (i + len < s.length) {
                unitWord = s.slice(i, i + len);
            } else {
                unitWord = s.slice(i);
            }
            if (stack.length === 0) {
                stack.push(unitWord);
                result += unitWord.length;
            } else {
                if (stack[stack.length - 1] === unitWord) {
                    if (!isDuplicated) {
                        result++;
                        isDuplicated = true;
                    }
                    duplicateCounter++;
                } else {
                    if (isDuplicated) {
                        result += duplicateChk(duplicateCounter);
                        duplicateCounter = 1;
                    }
                    stack.push(unitWord);
                    result += unitWord.length;
                    isDuplicated = false;
                }
            }
        }
        len++;
        isDuplicated && (result += duplicateChk(duplicateCounter));
        answer.push(result);
    }
    return Math.min(...answer);
}

function solution(s) {
    return search(s);
}