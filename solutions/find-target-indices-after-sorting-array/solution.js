// Problem: Find Target Indices After Sorting Array
// LeetCode: https://leetcode.com/problems/find-target-indices-after-sorting-array/
// Language: javascript
// Runtime: 97 ms
// Memory: 45.9 MB
// Submitted: 2023-06-28

// lo                mid                  hi
// 1 2 34   56   77   88  99
//               lo   mid hi
//                    found               88
//               lo/hi                    77
//               lo/hi                    77
//                        lo/hi           99
// 1 2 34   56   77   88  99
//                        lo/hi           100
//                        hi   lo         100

//   lo           mid           hi
//   1    2  34   56   77   88  99
//   lo      hi                             0
//   lo/hi                                  0
//hi lo                                     0
//   lo      hi                             1
//   lo/hi                                  1
function bins_ori(a, tar, lo = 0, hi = a.length - 1) {
    while (lo <= hi) {
        let mid = Math.trunc(lo / 2 + hi / 2)
        // if (mid === tar) {   // a is not there
        if (a[mid] === tar) {  // a is there
            // if (a[mid] === a[mid-1]) {  // tar is there
            return mid //           found
            // } else if (mid < tar) {
        } else if (a[mid] < tar) {
            lo = mid + 1 //         tar on right
        } else {
            hi = mid    //     mid-1    tar on left
        }
    }
    return -1 //                    not found
}

// lo                mid                  hi
// 1 2 34   56 56 56 56 56 56    77   88  99
// l   mid                                hi
//                               l    m   hi
// 1 2 34                        77   88  99
//  target 56
// 1 2 34                        77   88  99
function lower_bound_fe_or_fg(a, tar, lo = 0, hi = a.length - 1) {
    while (lo <= hi) {
        let mid = Math.trunc(lo / 2 + hi / 2)
        // if (mid === tar) {   // a is not there
        // if (a[mid] === a[mid-1]) {  // tar is there
        if (a[mid] === tar) {  // a is there
            hi = mid - 1    //       tar on left/current
            // return mid //           found
            // } else if (mid < tar) {
        } else if (a[mid] < tar) {
            lo = mid + 1 //         tar on right
        } else {
            hi = mid  -1    //     mid-1    tar on left
        }
    }
    return lo //                     found
}
//                   target=56
//                         hi    lo
// 1 2 34   56 56 56 56 56 56    77      88  99
function upper_bound_fg(a, tar, lo = 0, hi = a.length - 1) {
    while (lo <= hi) {
        let mid = Math.trunc(lo / 2 + hi / 2)
        // if (mid === tar) {   // a is not there
        // if (a[mid] === a[mid-1]) {  // tar is there
        if (a[mid] === tar) {  // a is there
            lo = mid + 1    //       real tar on right
            // return mid //           found
            // } else if (mid < tar) {
        } else if (a[mid] < tar) {
            lo = mid + 1 //         tar on right
        } else {
            hi = mid - 1   //     mid-1    tar on left
        }
    }
    return lo //                     found
}

var targetIndices = function (a, t) {
    let cl = console.log

    a.sort((a, b) => a - b)
    cl(a, t)

    cl('1111')
    let i = lower_bound_fe_or_fg(a, t)
    cl('2222')
    let j = upper_bound_fg(a, t)
    cl('333')
    let an = []
    for (let x = i; x < j; x++) {
        an.push(x)
    }
    return an
};

