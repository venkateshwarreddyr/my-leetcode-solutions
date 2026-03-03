// Problem: Make Array Empty
// LeetCode: https://leetcode.com/problems/make-array-empty/
// Language: cpp
// Runtime: 242 ms
// Memory: 80.6 MB
// Submitted: 2023-06-13

class Solution {
public:
    
    typedef long long ll;
    
    long long countOperationsToEmptyArray(vector<int>& nums) {
        int N = nums.size();
        ll n = (ll)N;
        vector<pair<int,int>>vec;
        for(int i=0;i<n;i++){
            vec.push_back({nums[i],i});
        }
        sort(vec.begin(),vec.end());
        ll sum = n;
        ll cnt = 1LL;
        for(int i=1;i<N;i++){
            if(vec[i].second <= vec[i-1].second){
                sum += (ll)(n-cnt);
            }
            cnt++;
        }
        return sum;
    }
};
