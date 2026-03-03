// Problem: Number of Ways to Paint N × 3 Grid
// LeetCode: https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/
// Language: javascript
// Runtime: 1 ms
// Memory: 55.6 MB
// Submitted: 2026-01-12

/*
    For n = 1
        ABA (isosceles kind ... 6)
        ABC (different kind ... 6)
    --------------
            n = 1
                            from isoscelesKind, we get 6 ios
                            from scaleneKind, we get 6 scaleneKind
    --------------
    For n=2
        A   B   A
        B/C C/A B/C
            B A/C B/C
            C C/A B/C
                B A B/C
                B C B/C
                C C B/C x
                C A B/C
                    B A B           A B A kind
                    B A C           ABC kind
                    B C B           A B A kind
                    B C C x
                    C A B           ABC kind
                    C A C           A B A kind
                            ABA => 3ABA + 2ABC
        A   B   C
        B/C C/A A/B
            B C/A A/B
            C C/A A/B
                B C A/B
                B A A/B
                C C A/B x
                C A A/B
                    B C A           ABC kind
                    B C B           A B A kind
                    B A A x
                    B A B           A B A kind
                    C A A x
                    C A B           ABC kind
                            ABC => 2ABA + 2ABC
    --------------
        so
                            ABA => 3ABA + 2ABC
                            ABC => 2ABA + 2ABC
    --------------
            n = 2
                            from isoscelesKind, we get 3 new isoscelesKind, and 2 new scaleneKind
                            from scaleneKind, we get 2 new isoscelesKind, and 2 new scaleneKind
    --------------
*/
var numOfWays = function (n) {
    let isoscelesKind = 6; // n = 1 // ABA kind
    let scaleneKind = 6; // n = 1 // ABC kind
    if (n === 1) return isoscelesKind + scaleneKind;

    const MOD = 10 ** 9 + 7;
    for (let i = 2; i <= n; i++) {
        let newIsos_fromIsos = 3 * isoscelesKind;
        let newScalene_fromIsos = 2 * isoscelesKind;

        let newIsos_fromScalene = 2 * scaleneKind;
        let newScalene_fromScalene = 2 * scaleneKind;

        let totalIsos = newIsos_fromIsos + newIsos_fromScalene;
        let totalScalene = newScalene_fromIsos + newScalene_fromScalene;

        isoscelesKind = totalIsos % MOD;
        scaleneKind = totalScalene % MOD;
    }

    return (isoscelesKind + scaleneKind) % MOD;
};

