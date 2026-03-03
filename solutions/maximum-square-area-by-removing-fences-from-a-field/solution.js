// Problem: Maximum Square Area by Removing Fences From a Field
// LeetCode: https://leetcode.com/problems/maximum-square-area-by-removing-fences-from-a-field/
// Language: javascript
// Runtime: 488 ms
// Memory: 94.2 MB
// Submitted: 2026-01-16

cl = console.log
MOD = 10 ** 9 + 7
/**
 * @param {number} m
 * @param {number} n
 * @param {number[]} hFences
 * @param {number[]} vFences
 * @return {number}
 */

function squareModulo(a, modulus) {
    return Number((BigInt(a) * BigInt(a)) % BigInt(modulus));
}


var maximizeSquareArea = function(m, n, hFences, vFences) {
    hFences = [1, ...hFences, m]
    vFences = [1, ...vFences, n]
    let anset = new Set()
    hFences.sort((a, b) => a - b);
    vFences.sort((a, b) => a - b);
    for(let i=0;i<hFences.length;i++) {
        for(let j=i+1;j<hFences.length;j++) {
            anset.add(Math.abs(hFences[i] - hFences[j]))
        }
    }
    
    let an = -1
    for(let i=0;i<vFences.length;i++) {
        for(let j=i+1;j<vFences.length;j++) {
            let x = Math.abs(vFences[i] - vFences[j])
            
            if(anset.has(x)) an = Math.max(an, x)
        }
    }
    
    if(an === -1) return -1
    return squareModulo(an, MOD)
}

var maximizeSquareArea1 = function(m, n, hFences, vFences) {


    function fn(m, n, hFences, vFences) {
    hFences.sort((a, b) => a - b);
    vFences.sort((a, b) => a - b);
        cl({hFences, vFences})
        while(true) {
         if(m>n) {
             if(!hFences.length) return -1
            let top = hFences.pop();
            let x = m - top + 1
            if( x === n) return (x-1) ** 2
            m = top;
        } else if(m<n) {
            if(!vFences.length) return -1
            let top = vFences.pop();
            let x = n - top + 1
            if( x === m) return (x-1) ** 2
            n = top;
        }
        
        if(m===n) {
            return (m-1) * (n-1)
        }
        
    }
    }
    
    let an = -1
    an = Math.max(an, fn(m, n, [...hFences], [...vFences]))
    // an = Math.max(an, fn(m, n, [...hFences].map(e => (m + 1 - e)), [...vFences]))
    // an = Math.max(an, fn(m, n, [...hFences], [...vFences].map(e => (n + 1 - e))))
    // an = Math.max(an, fn(m, n, [...hFences].map(e => (m + 1 - e)), [...vFences].map(e => (n + 1 - e))))
    cl()
    return an
};
/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} hBars
 * @param {number[]} vBars
 * @return {number}
 */
var maximizeSquareHoleArea = function(n, m, hBars, vBars) {
    hBars.sort((a, b) => a- b);
    vBars.sort((a, b) => a- b);
    

    
    function fn(a) {
        let max_hadj = 0
    let hadj = 1
        for(let i=0;i<a.length-1;i++) {
        if(a[i] + 1 === a[i+1]) {
            hadj++
        } else {
            max_hadj = Math.max(max_hadj, hadj)
            hadj = 1
        }
    }
           max_hadj = Math.max(max_hadj, hadj)
        return max_hadj
    }
    
    let max_hadj = fn(hBars);
    let max_vadj = fn(vBars);
    
    console.log({max_hadj, max_vadj})
    if(max_hadj === max_vadj) {
        return (max_hadj + 1) * (max_vadj + 1)
    }
    
    let max = Math.min(max_hadj, max_vadj)
    
    return Number((max + 1) * (max + 1))
    
};
