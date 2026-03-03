// Problem: Unique Email Addresses
// LeetCode: https://leetcode.com/problems/unique-email-addresses/
// Language: javascript
// Runtime: 90 ms
// Memory: 46.3 MB
// Submitted: 2023-05-25

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
    let an = new Set()
    for (let email of emails) {
        let [name, domain] = email.split('@')
        name = name.split('+')[0]
        name = name.replaceAll('.', '')
        an.add([name, domain].join('@'))
    }

    return (an).size;
};
