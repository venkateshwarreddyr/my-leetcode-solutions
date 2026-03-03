// Problem: Design Twitter
// LeetCode: https://leetcode.com/problems/design-twitter/
// Language: javascript
// Runtime: 28 ms
// Memory: 73.4 MB
// Submitted: 2025-12-31

class Twitter {
    followMap = new Map(); // follow Map
    tweetMap = new Map(); // tweet Map
    tweetTime = 0;

    follow(from, to) {
        let { followMap, tweetMap } = this;
        if (!followMap.has(from)) {
            followMap.set(from, new Set()); // set
        }
        followMap.get(from).add(to); // append
    }
    unfollow(from, to) {
        let { followMap, tweetMap } = this;
        if (followMap.has(from)) {
            followMap.get(from).delete(to);
        }
    }
    postTweet(from, tweetId) {
        let { followMap, tweetMap } = this;
        if (!tweetMap.has(from)) {
            tweetMap.set(from, new Map());
        }
        tweetMap.get(from).set(tweetId, this.tweetTime++); // append
        if (tweetMap.get(from).size > 10) {
            let [tweetId] = tweetMap.get(from).entries().next().value;
            tweetMap.get(from).delete(tweetId); // 11 elements, delete 1st
        }
    }
    getNewsFeed = function (from) {
        let { followMap, tweetMap } = this;
        let toSet = followMap.get(from) || new Set();
        let ans = [];
        for (let from2 of [from, ...toSet]) // person & friends
            for (let [toTweetId2, time2] of tweetMap.get(from2) || new Map()) {
                ans.push([toTweetId2, time2]);
            }
        return ans
            .sort((a, b) => b[1] - a[1]) // order by time desc
            .map(e => e[0]) // take tweetIds
            .slice(0, 10); // latest 10 tweets (from & followers of from)
    };
}
