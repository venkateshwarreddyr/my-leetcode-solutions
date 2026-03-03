// Problem: Employee Importance
// LeetCode: https://leetcode.com/problems/employee-importance/
// Language: javascript
// Runtime: 92 ms
// Memory: 42.5 MB
// Submitted: 2021-05-29

/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    let counter = 0;
//     let root = null;
//             console.log({employees})
//     const parseTree = (emp) => {
        
//         if(emp.id == id){
//             root = emp;
//         }else if(root){
//             return;
//         }else{
//             console.log(emp)
//             for(let child of emp.subordinates)
//                 if(!root) parseTree(child);  
//         }
        
//     }
//     const parseTree2 = (emp) => {
        
//         if(emp == null){
//             return;
//         }else{
//             counter+=emp.importance;
//             for(let child of emp.subordinates)
//                 if(!root) parseTree(child);  
//         }
        
//     }
//     parseTree(employees);
    
//     parseTree2(root);
    
//     return counter;
    const cache = {};
    employees.forEach(({id, importance, subordinates}) => {
        cache[id] = {importance, subordinates}
    })
    const parseTree = (id) => {
       
        const {importance, subordinates} = cache[id]
        counter += importance;
        subordinates.forEach((child) => {
            parseTree(child);
        })               
        
    }
    parseTree(id);
    return counter;
};
