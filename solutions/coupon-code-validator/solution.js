// Problem: Coupon Code Validator
// LeetCode: https://leetcode.com/problems/coupon-code-validator/
// Language: javascript
// Runtime: 8 ms
// Memory: 61.3 MB
// Submitted: 2025-12-13

/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function (codes, businessLine, isActive) {
    const isValidCouponCode = code => /^[a-zA-Z0-9_]+$/.test(code) && code !== '';

    const businessLinesOrder = ['electronics', 'grocery', 'pharmacy', 'restaurant'];

    const localeCompareCustom = (a, b) => {
        for (let i = 0; i < Math.min(a.length, b.length); i++) {
            const charCodeA = a[i].charCodeAt(0);
            const charCodeB = b[i].charCodeAt(0);
            if (charCodeA === charCodeB) continue;
            return charCodeA - charCodeB; // 1st non-equal
        }
        return a.length - b.length; // based on length
    };

    return codes
        .reduce((validCoupons, _, index) => {
            if (
                isValidCouponCode(codes[index]) &&
                businessLinesOrder.includes(businessLine[index]) &&
                isActive[index]
            ) {
                validCoupons.push({ code: codes[index], businessLine: businessLine[index] });
            }
            return validCoupons;
        }, [])
        .sort((a, b) => {
            return (
                businessLinesOrder.indexOf(a.businessLine) - businessLinesOrder.indexOf(b.businessLine) ||
                localeCompareCustom(a.code, b.code)
            );
        })
        .map(coupon => coupon.code);
};
