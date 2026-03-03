// Problem: People Whose List of Favorite Companies Is Not a Subset of Another List
// LeetCode: https://leetcode.com/problems/people-whose-list-of-favorite-companies-is-not-a-subset-of-another-list/
// Language: javascript
// Runtime: 657 ms
// Memory: 74 MB
// Submitted: 2025-11-28

function peopleIndexes(favoriteCompanies) {
    const result = [];

    for (let i = 0; i < favoriteCompanies.length; i++) {
        let isSubset = false;

        for (let j = 0; j < favoriteCompanies.length; j++) {
            if (i === j) continue;

            if (isSubsetOf(favoriteCompanies[i], favoriteCompanies[j])) {
                isSubset = true;
                break;
            }
        }

        if (!isSubset) {
            result.push(i);
        }
    }

    return result;
}

function isSubsetOf(listA, listB) {
    if (listA.length > listB.length) return false;

    const setB = new Set(listB);
    return listA.every(company => setB.has(company));
}
