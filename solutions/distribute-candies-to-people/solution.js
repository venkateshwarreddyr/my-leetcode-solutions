// Problem: Distribute Candies to People
// LeetCode: https://leetcode.com/problems/distribute-candies-to-people/
// Language: javascript
// Runtime: 66 ms
// Memory: 42.1 MB
// Submitted: 2023-05-25

cl = console.log
var distributeCandies = function (candies, num_people) {
    let an = new Array(num_people).fill(0)

    let j = 1;
    let i = 0;
    while (candies > 0) {
        an[i] += candies > j ? j : candies;
        candies -= j
        j++
        i++;
        if (i === num_people) {
            i = 0
        }
    }

    return an;
};
