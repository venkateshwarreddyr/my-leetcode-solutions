// Problem: Get Watched Videos by Your Friends
// LeetCode: https://leetcode.com/problems/get-watched-videos-by-your-friends/
// Language: javascript
// Runtime: 138 ms
// Memory: 57 MB
// Submitted: 2023-07-27


cl = console.log
/**
 * @param {string[][]} watchedVideos
 * @param {number[][]} friends
 * @param {number} id
 * @param {number} level
 * @return {string[]}
 */
var watchedVideosByFriends = function (watchedVideos, g, id, level) {
    let q = [[id, 0]]
    let ob = {}
    let visited = new Set([id]);

    while (q.length) {
        let [u, l] = q.shift()
        if (l > level) break;
        if (l === level) {
            for (let vid of watchedVideos[u]) {
                ob[vid] = ob[vid] ?? 0
                ob[vid]++
            }
        }
        for (let v of g[u]) {
            if (visited.has(v)) continue
            visited.add(v)
            q.push([v, l + 1])
        }
    }

    const videos = [...Object.entries(ob)].sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0]));

    return videos.map(([video]) => video);
};
