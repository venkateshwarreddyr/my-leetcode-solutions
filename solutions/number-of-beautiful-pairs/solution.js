// Problem: Number of Beautiful Pairs
// LeetCode: https://leetcode.com/problems/number-of-beautiful-pairs/
// Language: javascript
// Runtime: 175 ms
// Memory: 47.5 MB
// Submitted: 2023-06-25

var countBeautifulPairs = function(a) {
    const gcd = (a, b) => (!b ? a : gcd(b, a % b))

    let cl = console.log
    let cc = 0
    let n = a.length
    for (let i=0;i<n;i++)
    for (let j=i+1;j<n;j++) {
        let sx = (''+a[i])
        let sy = (''+a[j])
        let x = +sx[0]
        let y = +sy[sy.length-1]
        if ( ( (x!==1)&&(y!==1)) && (( gcd (x,y) !== 1 ))   ) {
        } else {
            cc ++
        }
        // cl(( x%y === 0 ) , ( y%x === 0 ) )
        // cl(i,j, ' sx,sy', sx, sy, ' fd,ld ', x, y, ' cp',  !(( x%y === 0 ) || ( y%x === 0 )), ' cc',  cc)
    }
    return cc
};

