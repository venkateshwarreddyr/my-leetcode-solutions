// Problem: Find All Possible Recipes from Given Supplies
// LeetCode: https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/
// Language: javascript
// Runtime: 2712 ms
// Memory: 54.4 MB
// Submitted: 2023-06-21

/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function (recipes, ingredients, supplies) {
    cl = console.log

    let visited = new Set()
    function dfs(recipe) {
        if (supplies.includes(recipe)) return true;
        if (visited.has(recipe)) return false
        visited.add(recipe)
        let ind = recipes.indexOf(recipe);
        if (ind > -1) {
            let an = true
            for (let ingredient of ingredients[ind]) {
                an = an && dfs(ingredient)
            }
            return an;
        }
        return false
    }

    for (let recipe of recipes) {
        visited = new Set()
        if (dfs(recipe))
            supplies.push(recipe)
    }
    return recipes.filter((e, i) => {
        return supplies.includes(e)
    })
};
