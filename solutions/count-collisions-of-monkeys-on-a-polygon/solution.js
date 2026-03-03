// Problem: Count Collisions of Monkeys on a Polygon
// LeetCode: https://leetcode.com/problems/count-collisions-of-monkeys-on-a-polygon/
// Language: javascript
// Runtime: 60 ms
// Memory: 41.5 MB
// Submitted: 2023-01-31


var monkeyMove = function(n) {
    let MOD = BigInt(10**9+7)
    const calculatePow = (x, y) => {
        let ans = 1n;
        let base = 2n;
        while(y>0){
            if (y%2)
                ans=(ans*base)%MOD;
            base = (base*base)%MOD;
            y=y>>1;
        }
        
        return ans;
    }
    
    return (calculatePow(2,n) - 2n +MOD)%MOD

};
