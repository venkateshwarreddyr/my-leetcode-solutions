// Problem: Sort Integers by The Power Value
// LeetCode: https://leetcode.com/problems/sort-integers-by-the-power-value/
// Language: javascript
// Runtime: 224 ms
// Memory: 45.6 MB
// Submitted: 2021-05-14

/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
    const obj = {}
    // const fun1 x => {
    //     if(obj[x]) return obj[x]
    //     if(x==1) return 1
    //     let val;
    //     if(x%2==0){
    //         val = x / 2
    //     }else{
    //     val = 3 * x + 1
    //     }
    //     obj[x] = val
    //     return fun1(val)
    // }
    let arr = []
    let count = -1
    
    const sobj = {}
    const fun1 = x => {
        while(true){
        count++
        if(sobj[x]){ count+= sobj[x]; return;}
        if(x==1) return 1
        if(obj[x]) {
            x = obj[x]
            continue;
        }
            
            
        let val;
            
        if(x%2==0) val = x / 2
        else val = 3 * x + 1
            
        obj[x] = val
        x = val
        
        
        }
    }
    const fobj = {}
    for(let i= lo; i<= hi; i++ ){
        fun1(i)
        sobj[i] = count;
        fobj[count]? fobj[count].push(i): fobj[count] = [i]
        count = -1
    }
    let newCount = 0;
    
    const keyObjArr = Object.keys(fobj)
    for(let i= 0; i< keyObjArr.length; i++ ){
        for(let j= 0; j< fobj[keyObjArr[i]].length; j++ ){
            newCount++;
            if(newCount === k)
                return fobj[keyObjArr[i]][j]
    }
    }
    
};

