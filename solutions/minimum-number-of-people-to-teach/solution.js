// Problem: Minimum Number of People to Teach
// LeetCode: https://leetcode.com/problems/minimum-number-of-people-to-teach/
// Language: javascript
// Runtime: 70 ms
// Memory: 72.9 MB
// Submitted: 2025-11-08

var minimumTeachings = function (n, languages, friendships) {

    // People who cannot communicate with at least one friend
    const needTeach = new Set();

    // Identify pairs that have no common language
    for (const [u, v] of friendships) {
        const combined = [...languages[u - 1], ...languages[v - 1]];
        const unique = new Set(combined);

        // If no duplicate → no common language
        if (combined.length === unique.size) {
            needTeach.add(u - 1);
            needTeach.add(v - 1);
        }
    }

    // Count: for each language, how many "needTeach" people already know it
    const languageCount = new Array(n + 1).fill(0);
    let mostCommonLanguageCount = 0;

    for (const person of needTeach) {
        for (const lang of languages[person]) {
            languageCount[lang]++;
            mostCommonLanguageCount = Math.max(
                mostCommonLanguageCount,
                languageCount[lang]
            );
        }
    }

    // Minimum people to teach = total problematic people - best language coverage
    return needTeach.size - mostCommonLanguageCount;
};

