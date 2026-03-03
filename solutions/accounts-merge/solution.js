// Problem: Accounts Merge
// LeetCode: https://leetcode.com/problems/accounts-merge/
// Language: javascript
// Runtime: 145 ms
// Memory: 54.8 MB
// Submitted: 2023-05-18

cl = console.log;
var accountsMerge = function (accounts) {
    let n = accounts.length;

    let parents = {};
    email2name = {};

    function find(a) {
        if (a !== parents[a]) {
            parents[a] = find(parents[a]);
        }

        return parents[a];
    }

    function union(a, b) {
        parents[find(a)] = find(b);
    }

    for (let [name, ...emails] of accounts) {
        for (let email of emails) {
            if (!parents[email]) {
                parents[email] = email;
            }
            
            union(email, emails[0])
            email2name[email] = name;
        }
    }

    let obj = {}
    for (let parent in parents) {
        let x = find(parents[parent])
        if (!obj[x]) obj[x] = [];
        obj[x].push(parent)
    }
    // cl(parents)
    // cl(email2name)
    // cl(obj)
    let an = []
    for (let key in obj) {
        an.push([email2name[key], ...obj[key].sort()])
    }

    return an;
};
