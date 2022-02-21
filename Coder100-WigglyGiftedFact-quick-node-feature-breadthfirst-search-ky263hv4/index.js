/*
procedure BFS(G, root) is
    let Q be a queue
    label root as explored
    Q.enqueue(root)
    while Q is not empty do
        v := Q.dequeue()
        if v is the goal then
            return v
        for all edges from v to w in G.adjacentEdges(v) do
            if w is not labeled as explored then
                label w as explored
                Q.enqueue(w)
*/

// class Node {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }

//     eq(other) {
//         return this.x == other.x && this.y == other.y;
//     }
// }

// function bfs(goal, src) {
//     let q = [];
//     q.push(src);
//     while (q.length > 0) {
//         let value = q.pop();
//         if (value.eq(goal)) {
//             return value;
//         }

//         for ()
//     }
// }

console.log("lets gooo");