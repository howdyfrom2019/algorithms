function solution(n) {
    const prime = [false, false, ...Array(n - 1).fill(true)]
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (prime[i]) {
            for (let j = 2; j < n; j++) {
                if (i * j > n) break;
                prime[i * j] = false;
            }
        }
    }
    console.log(prime.filter(Boolean).length);
}
solution(100);