// Problem: Max Consecutive Ones III
// LeetCode: https://leetcode.com/problems/max-consecutive-ones-iii/
// Language: cpp
// Runtime: 134 ms
// Memory: 57.8 MB
// Submitted: 2023-07-01

class Solution {
public:
    int longestOnes(vector<int>& arr, int k) {
        int n = arr.size();

        vector<int> prefix(n , 0);
        prefix[0] = (arr[0]==0);

        for(int i=1 ; i<n ; i++){
            prefix[i] = prefix[i-1] + (arr[i]==0);
        }

        int maxx = 0;

        if(prefix[n-1]<=k) return n;

        for(int i=0 ; i<n ; i++){
            int x = prefix[i];
            auto it = upper_bound(prefix.begin() , prefix.end() , x+k);
            int j = it-prefix.begin();
            maxx = max(maxx , j-i-1);
        }


        return maxx;
    }
};
