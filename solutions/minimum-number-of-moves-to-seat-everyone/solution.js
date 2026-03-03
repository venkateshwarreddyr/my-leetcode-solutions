// Problem: Minimum Number of Moves to Seat Everyone
// LeetCode: https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/
// Language: javascript
// Runtime: 68 ms
// Memory: 50.7 MB
// Submitted: 2024-06-13

/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    let n = seats.length
    seats = seats.sort((a,b) => (a-b))
    students = students.sort((a,b) => (a-b))
    let an = 0;
    
    for(let i = 0; i<n; i++){
        an+=(Math.abs(seats[i]-students[i]))
    }
    
    return an;
};
