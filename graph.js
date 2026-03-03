function Graph(n, edges) {
  let g = new Map();
  let bi = true; // bi-directional

  edges.forEach((edge) => {
    let [a, b] = edge;

    if (!g.has(a)) {
      g.set(a, [b]);
    } else {
      g.set(a, [...g.get(a), b]);
    }

    if (bi) {
      if (!g.has(b)) {
        g.set(b, [a]);
      } else {
        g.set(b, [...g.get(b), a]);
      }
    }
  });

  const bfs = (s, d) => {
    if (s === d) return true;

    let queue = [s];
    let visited = new Set();
    while (queue.length) {
      let vertex = queue.shift();
      if (!visited.has(vertex) && g.has(vertex)) {
        g.get(vertex).forEach((e) => {
          queue.push(e);
        });
        visited.add(vertex);
        if (vertex === d) return true;
      }
    }

    return false;
  };

  const dfs = (s, seats) => {
    let stack = [s];
    let visited = new Set();
    while (stack.length) {
      let vertex = stack.pop();
      if (!visited.has(vertex) && g.has(vertex)) {
        g.get(vertex).forEach((e) => {
          stack.push(e);
        });
        visited.add(vertex);
      }
    }

    return false;
  };

  const isCircle = (p) => {
    let visited = new Array(n).fill(-1);
    let queue = [p];
    visited[p] = 0;

    while (queue.length) {
      let v = queue.shift();

      if (visited[v] !== 1) {
        for (let c of g[v]) {
          if (visited[c] === 0) {
            return true;
          }
          if (visited[c] === -1) {
            visited[c] = 0;
            queue.push(c);
          }
        }
      }
      visited[v] = 1;
    }

    return false;
  };

  return { bfs, dfs, isCircle };
}

let g = [...new Array(n)].map((_, i) => i);

const find = (a) => {
  return a === g[a] ? a : find(g[a]);
};

const union = (a, b) => {
  let u = find(a);
  let v = find(b);

  if (u > v) {
    g[u] = v;
  } else if (u < v) {
    g[v] = u;
  }
};


let parents = {};

function find(a) {
  if (a !== parents[a]) {
    parents[a] = find(parents[a]);
  }

  return parents[a];
}

function union(a, b) {
  parents[find(a)] = find(b);
}
