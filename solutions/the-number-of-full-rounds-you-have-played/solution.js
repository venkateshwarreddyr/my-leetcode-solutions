// Problem: The Number of Full Rounds You Have Played
// LeetCode: https://leetcode.com/problems/the-number-of-full-rounds-you-have-played/
// Language: javascript
// Runtime: 72 ms
// Memory: 38.7 MB
// Submitted: 2021-06-25

/**
 * @param {string} startTime
 * @param {string} finishTime
 * @return {number}
 */
var numberOfRounds = function(startTime, finishTime) {
    let sta = startTime.split(':').map(e => parseInt(e));
    let fta = finishTime.split(':').map(e => parseInt(e));
    let st = sta[0]*60+sta[1];
    let ft = fta[0]*60+fta[1];
    let counter = 0;
    if(st<ft){
        while(st<=ft){
            let x = st%15;
            if(x===0){
                st+=15;
                counter++;
            }else{
                st+=(15-x)
            }
        }
    }else 
        if(st>ft){
        let tempft = ft
        ft = 24*60;
        while(st<=ft){
            let x = st%15;
            if(x===0){
                st+=15;
                counter++;
            }else{
                st+=(15-x)
            }
        }
            counter--
        ft = tempft;
         
        st = 0
          while(st<=ft){
            let x = st%15;
            if(x===0){
                st+=15;
                counter++;
            }else{
                st+=(15-x)
            }
        }
    }
    
    return counter-1>=0?counter-1:0;
};
