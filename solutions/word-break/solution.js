// Problem: Word Break
// LeetCode: https://leetcode.com/problems/word-break/
// Language: javascript
// Runtime: 70 ms
// Memory: 44.8 MB
// Submitted: 2023-06-11

cl = console.log
function Tire() {
    this.children = {}
    this.end = false
}

function insert(word, root) {

    let r = root
    for (let c of word) {
        r.children[c] = r.children[c] ? r.children[c] : new Tire()
        r = r.children[c]
    }
    r.end = true
}

var wordBreak = function (word, wordDict) {
    let root = new Tire()
    let n = word.length
    for (let w of wordDict) {
        insert(w, root)
    }
    let set = new Set()
    function fn(i, r) {
        if (set.has(i)) return false;
        set.add(i);
        let t = r

        for (let j = i; j < word.length; j++) {
            let c = word[j]
            if (t.children[c]) {
                t = t.children[c]
                if (t.end) {
                    if (j === n - 1) {
                        return true
                    }
                    if (fn(j + 1, root)) {
                        return true
                    }
                }
            } else {
                return false
            }
        }
        return false;
    }

    return fn(0, root)
};
