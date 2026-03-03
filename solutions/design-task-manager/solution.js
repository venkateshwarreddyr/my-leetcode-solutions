// Problem: Design Task Manager
// LeetCode: https://leetcode.com/problems/design-task-manager/
// Language: javascript
// Runtime: 371 ms
// Memory: 136 MB
// Submitted: 2026-01-10

class TaskManager {
    constructor(tasks) {
        this.map = new Map();
        this.pq = new PriorityQueue((a, b) => b[0] - a[0] || b[1] - a[1]);
        for (const [userId, taskId, priority] of tasks) {
            this.add(userId, taskId, priority);
        }
    }

    add(userId, taskId, priority) {
        this.map.set(taskId, [userId, priority]);
        this.pq.enqueue([priority, taskId]);
    }

    edit(taskId, newPriority) {
        if (!this.map.has(taskId)) return
        const [userId, priority] = this.map.get(taskId);
        this.map.set(taskId, [userId, newPriority]);
        this.pq.enqueue([newPriority, taskId]);
    }

    rmv(taskId) {
        this.map.delete(taskId);
    }

    execTop() {
        while (!this.pq.isEmpty()) {
            const [priority, taskId] = this.pq.dequeue();
            if (!this.map.has(taskId)) continue
            let [userId, priorityFromMap] = this.map.get(taskId);
            if (priorityFromMap === priority) {
                this.map.delete(taskId);
                return userId;
            }
        }
        return -1;
    }
}

