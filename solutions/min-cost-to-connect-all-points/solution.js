// Problem: Min Cost to Connect All Points
// LeetCode: https://leetcode.com/problems/min-cost-to-connect-all-points/
// Language: javascript
// Runtime: 7845 ms
// Memory: 153.7 MB
// Submitted: 2023-09-15

const dist = ([x1, y1], [x2, y2]) => Math.abs(x2 - x1) + Math.abs(y2 - y1) // getDist2PointCoord

const minCostConnectPoints = function (a) {
    const n = a.length
    const getKey = ([x, y]) => x + ',' + y

    const q = []
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            q.push([dist(a[i], a[j]), a[i], a[j]])
        }
    }
    q.sort((a, b) => b[0] - a[0])
    let s = 0
    const uf = new UF({ n })
    while (q.length) {
        let [d, p1, p2] = q.pop()
        const rootp1 = uf.find(p1)
        const rootp2 = uf.find(p2)
        if (rootp1 !== rootp2) {
            uf.union(p1, p2)
            s += d
        }
    }
    return s
}

function UF({ n = 0, A = [] }) {
    let start = 0 // 0   1
    let end = n //   n   n + 1
    let oroot = {}
    let osize = {} // weighted - attach smaller to larger
    // const oroot = Array.from({ length: n }, (_, i) => i);
    // const oroot = new Array(n).fill().map((v, i) => i);
    // let osize = new Array(n).fill().map((v, i) => 1);

    init()

    return {
        oroot,
        osize,

        printAll: printElements,
        printElements: printElements,

        union: mergeComponents,
        merge: mergeComponents,
        join: mergeComponents,
        mergeComponents: mergeComponents,
        mergeComponents2: mergeComponents2,

        unmerge: unmergeComponents,
        unmergeComponents: unmergeComponents,

        areConnected: areInSameComponent,
        areInSameComponent: areInSameComponent,

        find: getRoot, // find root
        root: getRoot, // find root
        findRoot: getRoot, // find root
        getRoot: getRoot, // find root
        getRoot2: getRoot2, // find root
        getRoot3: getRoot3, // find root

        getRootSize: getComponentRootSize,
        getRootChildren: getComponentRootChildren,

        getRoots: getAllComponentRoots,
        getRootCount: getAllComponentRootCount,
        getRootSizes: getAllComponentRootSizes,
        getRootsChildren: getAllComponentRootsChildren,
        getMaxRootSize: getMaxComponentRootSize,
    }

    function init() {
        if (A.length === 0) {
            if (end) {
                oroot = new Array(end)
                osize = new Array(end)
                for (let i = start; i < end; i++) {
                    oroot[i] = i // No array given
                    osize[i] = 1
                }
            }
        } else {
            A.forEach((e) => {
                oroot[e] = e
                osize[e] = 1
            })
        }
        // Array.from({ length: n }, (_, i) => i);
        // Array given
    }

    // union
    function mergeComponents(p, q) {
        if (oroot[p] === undefined) (oroot[p] = p), (osize[p] = 1)
        if (oroot[q] === undefined) (oroot[q] = q), (osize[q] = 1)
        let r1 = getRoot(p)
        let r2 = getRoot(q) // cl('===merge', p,q, r1,r2)
        if (r1 === r2) {
            return 0
        }
        if (osize[r1] < osize[r2]) {
            ;[r1, r2] = [r2, r1] // r1 is bigger size
        } else if (osize[r2] === osize[r1]) {
            if (r1 > r2) {
                ;[r1, r2] = [r2, r1] // r1 is smaller
            }
        }
        oroot[r2] = r1 // merge with bigger size  /  small number
        osize[r1] += osize[r2]
        return 1
    }
    function mergeComponents2(p, q) {
        let r1 = getRoot(p)
        let r2 = getRoot(q) // cl('===merge', p,q, r1,r2)
        if (r1 === r2) {
            return 0
        }
        if (r1 > r2) {
            ;[r1, r2] = [r2, r1] // r1 is smaller
        }
        oroot[r2] = r1 // merge with bigger size  /  small number
        return 1
    }

    function unmergeComponents(p, q) {
        // let r1 = getRoot(p);
        // let r2 = getRoot(q);
        // let r;
        // if (r1 !== getRoot(p)) {
        //   r = p
        // } else {
        //   r = q
        // }
    }

    function printElements() {
        return oroot.join(', ')
    }

    // connected
    function areInSameComponent(p, q) {
        return getRoot(p) === getRoot(q)
    }

    // find
    function getRoot(e) {
        if (oroot[e] === undefined) (oroot[e] = e), (osize[e] = 1)
        // cl(e, oroot[e], 'oroot', oroot)
        if (e === oroot[e]) return e

        let i = e
        // while (i !== oroot[oroot[i]]) {
        while (i !== oroot[i]) {
            oroot[i] = oroot[oroot[i]] // path compression - every other node - lg*n
            i = oroot[i]
        }
        return i
    }
    function getRoot2(e) {
        let i = e
        while (i !== oroot[i]) i = oroot[i] // slow
        return i
    }
    function getRoot3(i) {
        if (i == oroot[i]) return i
        return (oroot[i] = getRootRec(oroot[i])) // path compression
    }

    function getComponentRootSize(p) {
        return osize[getRoot(p)]
    }
    function getComponentRootChildren(rr) {
        const a = []
        if (A.length) {
            for (let i = start; i < end; i++) if (rr === getRoot(A[i])) a.push(A[i])
        } else {
            for (let i = start; i < end; i++) if (rr === getRoot(i)) a.push(i)
        }
        return a
    }
    function getAllComponentRoots() {
        const a = []
        if (A.length) {
            for (let i = start; i < end; i++) {
                if (A[i] === getRoot(A[i])) a.push(A[i])
            }
        } else {
            for (let i = start; i < end; i++) {
                if (i === getRoot(i)) a.push(i)
            }
        }
        return a
    }
    function getAllComponentRootsChildren() {
        let a = getAllComponentRoots()
        return a.map((e) => getComponentRootChildren(e))
    }
    function getAllComponentRootCount() {
        let cc = 0
        if (A.length) {
            A.forEach((e) => {
                if (e === getRoot(e)) cc += 1
            })
        } else
            for (let i = start; i < end; i++) {
                if (i === getRoot(i)) cc += 1
            }
        return cc
    }
    function getAllComponentRootSizes() {
        const a = []
        if (A.length) {
            for (let i = start; i < end; i++) {
                if (A[i] === getRoot(A[i])) a.push(osize[A[i]])
            }
        } else {
            for (let i = start; i < end; i++) {
                if (i === getRoot(i)) a.push(osize[i])
            }
        }
        return a
    }
    function getMaxComponentRootSize() {
        const a = getAllComponentRootSizes()
        if (!a.length) return
        return a.reduce((max, e) => Math.max(max, e))
    }

    function test() {
        if (!A.length) return 0 // no elements

        /*
          const uf = new UF({ n, A: a })
          uf.union(p1, p2)
          const rootp1 = uf.find(p1)
        */

        const set = new Set(A)
        const a = [...set]
        {
            let uf = new UF({ n })
        }
        const uf = new UF({ a })

        let max = 0
        for (let i = start; i < end; i++) {
            if (set.has(a[i]) && set.has(a[i] + 1)) {
                uf.union(a[i], a[i] + 1)
                max = Math.max(max, uf.getComponentRootSize(a[i]))
            }
        }

        return max
    }
}
