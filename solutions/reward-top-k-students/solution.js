// Problem: Reward Top K Students
// LeetCode: https://leetcode.com/problems/reward-top-k-students/
// Language: javascript
// Runtime: 273 ms
// Memory: 69.7 MB
// Submitted: 2022-12-27

/**
 * @param {string[]} positive_feedback
 * @param {string[]} negative_feedback
 * @param {string[]} report
 * @param {number[]} student_id
 * @param {number} k
 * @return {number[]}
 */
var topStudents = function(positive_feedback, negative_feedback, report, student_id, k) {
    const report_marks = [];
    let pn = {}
    for(let pf of positive_feedback){
        pn[pf] = 1;
    }

    let nn = {}
    for(let nf of negative_feedback){
        nn[nf] = 1;
    }

    for(let i=0; i<student_id.length; i++){
        let repArr = report[i].split(" ");
        let marks = 0;

        repArr.map(word => {
            if(pn[word]){
                marks+=3;
            } else if(nn[word]){
                marks-=1
            }
        });
        report_marks.push({id: student_id[i], marks});
    }

    return report_marks.sort((a,b) => b.marks-a.marks || a.id-b.id).slice(0, k).map(e => e.id);
};
