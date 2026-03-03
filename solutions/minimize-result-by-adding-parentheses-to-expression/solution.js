// Problem: Minimize Result by Adding Parentheses to Expression
// LeetCode: https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/
// Language: javascript
// Runtime: 0 ms
// Memory: 54.3 MB
// Submitted: 2025-10-29

function minimizeResult(expression) {
    let minValue = Infinity;
    let minValueEles = [];

    const [left, right] = expression.split('+');
    for (let i = 0; i < left.length; ++i) {
        // position of '('
        const a = left.slice(0, i); // could be ''
        const b = left.slice(i); // non-empty

        for (let j = 1; j <= right.length; ++j) {
            // position of ')'
            const c = right.slice(0, j); // non-empty
            const d = right.slice(j); // could be ''

            let val = Number(b) + Number(c);
            if (a !== '') val *= Number(a);
            if (d !== '') val *= Number(d);

            if (val < minValue) {
                minValue = val;
                minValueEles = [a, b, c, d];
            }
        }
    }

    const [a, b, c, d] = minValueEles;
    return `${a}(${b}+${c})${d}`;
}

