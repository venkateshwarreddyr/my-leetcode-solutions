// Problem: Digit Operations to Make Two Integers Equal
// LeetCode: https://leetcode.com/problems/digit-operations-to-make-two-integers-equal/
// Language: javascript
// Runtime: 801 ms
// Memory: 80.5 MB
// Submitted: 2025-08-30

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var minOperations = function (n, m) {
    // Build prime sieve
    const N = 100000;
    const sieve = new Array(N).fill(true);
    sieve[0] = sieve[1] = false;
    for (let i = 2; i < N; i++) {
        if (sieve[i]) {
            for (let j = i * 2; j < N; j += i) {
                sieve[j] = false;
            }
        }
    }

    if (sieve[n] || sieve[m]) return -1;

    // Min heap using PriorityQueue
    const pq = new MinPriorityQueue(x => x[0]);
    pq.enqueue([n, n]); // [sum, current number]
    const visited = new Set();

    while (!pq.isEmpty()) {
        const [sum, cur] = pq.dequeue();

        if (visited.has(cur)) continue;
        visited.add(cur);

        if (cur === m) return sum;

        const s = String(cur).split('');
        for (let i = 0; i < s.length; i++) {
            const c = s[i];

            if (s[i] < '9') {
                s[i] = String.fromCharCode(s[i].charCodeAt(0) + 1);
                const next = parseInt(s.join(''));
                if (!sieve[next] && !visited.has(next)) pq.enqueue([sum + next, next]);
                s[i] = c;
            }

            if (s[i] > '0' && !(i === 0 && s[i] === '1')) {
                s[i] = String.fromCharCode(s[i].charCodeAt(0) - 1);
                const next = parseInt(s.join(''));
                if (!sieve[next] && !visited.has(next)) pq.enqueue([sum + next, next]);
                s[i] = c;
            }
        }
    }

    return -1;
};

