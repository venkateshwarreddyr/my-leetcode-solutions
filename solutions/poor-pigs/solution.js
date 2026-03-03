// Problem: Poor Pigs
// LeetCode: https://leetcode.com/problems/poor-pigs/
// Language: javascript
// Runtime: 0 ms
// Memory: 55 MB
// Submitted: 2026-01-15

/*
pig1        pig2
4 1(common) 4
3 1(common) 3
2 1(common) 2
1 1(common) 1
     1 (left over)

total = 25

if a pig dies, other pig tests sequentially
*/

var poorPigs = function (buckets, minutesToDie, minutesToTest) {
    if (buckets === 1) return 0; // only bucket is poisonous bucket

    const states = Math.floor(minutesToTest / minutesToDie) + 1;
    let pigs = 0;
    let currentBuckets = 1;

    while (currentBuckets < buckets) {
        pigs++;
        currentBuckets *= states;
    }

    return pigs;
}

/*
Example: 60 minutes to test, pig dies in 15 minutes → you can test at time 0, 15, 30, 45
→ 4 intervals + final observation → 5 possible states for each pig:

dies in first 15 min
dies in 15-30 min
dies in 30-45 min
dies in 45-60 min
never dies
So each pig has 5 possible outcomes (states).

With p pigs, total distinguishable outcomes = states^p.

We need states^p >= buckets → smallest p that satisfies this.

That’s the whole problem – pure math / information theory.

Classic example:
1000 buckets, 15 min to die, 60 min to test → states = 5
5⁴ = 625 < 1000, 5⁵ = 3125 ≥ 1000 → answer = 5 pigs
*/

