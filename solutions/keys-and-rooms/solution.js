// Problem: Keys and Rooms
// LeetCode: https://leetcode.com/problems/keys-and-rooms/
// Language: javascript
// Runtime: 88 ms
// Memory: 41.1 MB
// Submitted: 2021-07-23

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    
    let visited = {};
    let dfs = (i) => {
        // console.log(i in visited)
        if(i in visited) return;
        
        visited[i] =  true;
        rooms[i].forEach(item => {
            dfs(item);
        })
    }
    dfs(0)
    console.log(visited)
    return Object.keys(visited).length === rooms.length;
};


var canVisitAllRooms1 = function(rooms) {
    let edges = []
     rooms.forEach((items, i) => {
         edges.push([i, i])
        items.forEach(item =>{
            edges.push([i, item])
        })
    })
     let parsed = new Set();
    let counter = 0;
    let g = new Graph(edges, true);
    
        let parseGraph = (key) => {
         if(!parsed.has(key)){
            parsed.add(key);
             
        
        [...g.G.get(key)||[]].forEach(item => {
            // console.log({key, item});
            parseGraph(item);
            parsed.add(item);
        }) 
             
    }    
    
    }
        
    // console.log(g.G);
    
        for(let [key, values] of g.G){
        
        if(!parsed.has(key)){
            counter++;
            parsed.add(key);
        [...values].forEach(item => {
            parseGraph(item)
        }) 
    }

    }
    // console.log(counter)
    return counter === 1;
    
};

class Graph {
   
    constructor(edges, directed){
        this.edges =  edges;
         this.G = new Map();
        this.directed = directed
        this.constructGraph()
    }
    addConnM=(u, v) =>{
             if(!this.G.has(u)){
                this.G.set(u, new Set())
            }
            let node = this.G.get(u);
            if(!node.has(v)){
                node.add(v)
            }
        }
    constructGraph = () => {
        for(let [u,v] of this.edges){
            if(this.directed){
                this.addConnM(u,v);
            }else{
                
           this.addConnM(u,v);
            this.addConnM(v, u);
            }
            // console.log({node, u, v})
        }
    }
}

