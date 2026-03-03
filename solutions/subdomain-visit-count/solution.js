// Problem: Subdomain Visit Count
// LeetCode: https://leetcode.com/problems/subdomain-visit-count/
// Language: javascript
// Runtime: 96 ms
// Memory: 45.1 MB
// Submitted: 2021-07-20

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits1 = function(cp) {
    let obj = {}
    for(let i = 0; i< cp.length; i++){
        let [value, key] = cp[i].split(' ');
        value = Number(value)
        obj[key] = obj[key]?obj[key]+value:value;
        
        while(key.includes('.')){            
        [, key] = key.replace('.', ' ').split(' ')
        obj[key] = obj[key]?obj[key]+value:value;
        }
    }
    let arr = [];
    for(let [key, value] of Object.entries(obj)){
        arr.push(`${value} ${key}`)
    }
    return arr;
};
var subdomainVisits = function(cp) {
    const obj = {};
    let domain;
    let domains;
    let key, value;
    let arr;
    for(let i = 0; i< cp.length; i++){
        arr = cp[i].split(' ');
        value = Number(arr[0])
        domains = arr[1].split('.');
        for(let j = 0; j< domains.length; j++){
            domain = domains.slice(j).join('.');
            obj[domain] = obj[domain]?obj[domain]+value:value;
        }
    }
    arr = [];
    for(let [key, value] of Object.entries(obj)){
        arr.push(`${value} ${key}`)
    }
    return arr;
};
