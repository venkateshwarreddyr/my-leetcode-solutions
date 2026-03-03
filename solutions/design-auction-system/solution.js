// Problem: Design Auction System
// LeetCode: https://leetcode.com/problems/design-auction-system/
// Language: javascript
// Runtime: 260 ms
// Memory: 114.3 MB
// Submitted: 2026-01-18

var AuctionSystem = function () {
    // itemId -> PriorityQueue([bid, userId])
    let pqMap = {};
    // itemId -> Map(userId -> latestBid)
    let bidMap = {};
    // itemId -> Set(removed userId)
    let deleted = {};

    const cmp = (a, b) => {
        return b[0] - a[0] || b[1] - a[1]; // higher userId tie-break
    };

    AuctionSystem.prototype.addBid = function (userId, itemId, bidAmount) {
        pqMap[itemId] ??= new PriorityQueue(cmp);
        bidMap[itemId] ??= new Map();
        deleted[itemId] ??= new Set();

        bidMap[itemId].set(userId, bidAmount);
        deleted[itemId].delete(userId);
        pqMap[itemId].enqueue([bidAmount, userId]);
    };

    AuctionSystem.prototype.updateBid = function (userId, itemId, newAmount) {
        if (!bidMap[itemId] || !bidMap[itemId].has(userId)) return;

        bidMap[itemId].set(userId, newAmount);
        pqMap[itemId].enqueue([newAmount, userId]); // lazy update
    };

    AuctionSystem.prototype.removeBid = function (userId, itemId) {
        if (!deleted[itemId]) return;
        deleted[itemId].add(userId);
    };

    AuctionSystem.prototype.getHighestBidder = function (itemId) {
        let pq = pqMap[itemId];
        if (!pq) return -1;

        while (!pq.isEmpty()) {
            let [bid, userId] = pq.front();

            // removed
            if (deleted[itemId].has(userId)) {
                pq.dequeue();
                continue;
            }

            // outdated bid
            if (bidMap[itemId].get(userId) !== bid) {
                pq.dequeue();
                continue;
            }

            return userId;
        }
        return -1;
    };
};

