from collections import deque

n = int(input('nxn: '))

startx, starty = [int(x) for x in input('start: ').split(', ')]
endx, endy = [int(x) for x in input('end: ').split(', ')]


class Pos:
    # mv: the movements used
    def __init__(self, x, y, mv = 0):
        self.x = x
        self.y = y
        self.mv = mv
    
    def __hash__(self):
        return hash((self.x, self.y, self.dist))

    def __eq__(self, other):
        return (self.x, self.y, self.dist) == (other.x, other.y, other.dist)
    
    def valid(pos):
        x, y = pos.x, pos.y
        return x >= 0 and y >= 0 and x < n and y < n

movements = [(2, -1), (2, 1), (-2, 1), (-2, -1), (1, 2), (1, -2), (-1, 2), (-1, -2)]

'''
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
'''
dest = Pos(endx, endy)
visited = set()
q = deque()
q.append(Pos(startx, starty))

# not empty
while q:
    v = q.popleft()

    x, y, mv = v.x, v.y, v.mv
    
    if x == dest.x and y == dest.y:
        print("Shortest moves:", mv)
        break
    
    for ox, oy in movements:
        np = Pos(x + ox, y + oy, mv + 1)
        if not Pos.valid(np): continue
        q.append(np)
else:
    # must be impossible
    print("impossible!")