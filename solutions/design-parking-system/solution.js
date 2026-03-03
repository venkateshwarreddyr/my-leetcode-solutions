// Problem: Design Parking System
// LeetCode: https://leetcode.com/problems/design-parking-system/
// Language: javascript
// Runtime: 16 ms
// Memory: 65.5 MB
// Submitted: 2025-07-26

class ParkingSystem {
    a;
    constructor(big, medium, small) {
        this.a = [0, big, medium, small]
    }
    addCar(carType) {
        if (this.a[carType]) {
            this.a[carType]--;
            return true
        }
        return false
    }
};

