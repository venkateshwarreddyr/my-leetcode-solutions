// Problem: Determine the Winner of a Bowling Game
// LeetCode: https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/
// Language: javascript
// Runtime: 87 ms
// Memory: 48.7 MB
// Submitted: 2023-05-23

/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
var isWinner = function(player1, player2) {
    let sp1 = 0;
    const calc = (player) => {
    let sp1 = 0;
    let obj1 = {}
    for(let i=0;i<player.length;i++){
        if(player[i] === 10){
            obj1[i+1] = true
            obj1[i+2] = true
        }
        if(obj1[i]){
            sp1+=(2*player[i])
        } else {
             sp1+=(player[i])
        }
        // console.log({sp1}, player[i])
        
    }
        
        return sp1;
    }
    s1 = calc(player1)
    s2 = calc(player2)
    // console.log({s1, s2})
    
    if(s1 === s2) return 0;
    return s1>s2 ?1:2
};
