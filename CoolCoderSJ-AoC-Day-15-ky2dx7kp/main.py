inputFile = open("sample.txt", "r")
parsed = []

for line in inputFile:
	line = line.strip()
	row = []
	for char in line:
		row.append(int(char))
	parsed.append(row)

inputFile.close()


 
def findMinCost(cost):
	(M, N) = (len(cost), len(cost[0]))
	T = [[0 for x in range(N)] for y in range(M)]
	done = []
	for y in range(M):
		for x in range(N):
			T[y][x] = cost[y][x]
			if y == 0 and x > 0:
				T[0][x] += T[0][x - 1]
			elif x == 0 and y > 0:
				T[y][0] += T[y - 1][0]
			elif y > 0 and x > 0:
				adj = []
				try: 
					if (y-1, x) not in done:
						adj.append(T[y - 1][x])
						done.append(y-1, x)
				except: pass

				"""try: 
					if (y+1, x) not in done:
						adj.append(T[y + 1][x])
						done.append(y+1, x)
				except: pass"""

				try: 
					if (y, x-1) not in done:
						adj.append(T[y][x - 1])
						done.append(y, x-1)
				except: pass

				"""try:
					if (y, x+1) not in done:
						adj.append(T[y][x + 1])
						done.append(y, x+1)
				except: pass"""
				
				T[y][x] += min(adj)


	return T[M - 1][N - 1]
		
cost = findMinCost(parsed)-parsed[0][0]
print(cost)


larger_parsed = []

for section in range(5):
	if section == 0:
		for i in parsed:
			xlen = len(i)
			row = []
			for j in i:
				row.append(j)
			for j in range(4):
				for k in range(xlen):
					ind = k+(j*xlen)
					num = row[ind]+1
					if num > 9:
						num = 1
					row.append(num)
			larger_parsed.append(row)
	else:
		xlen = len(parsed[0])
		for l in range(xlen):
			row = []
			for a in range(xlen):
				ind = l+((section-1)*xlen)
				num = larger_parsed[ind][a]+1
				if num > 9:
					num = 1
				row.append(num)

			for j in range(4):
				for k in range(xlen):
					ind = k+(j*xlen)
					num = row[ind]+1
					if num > 9:
						num = 1
					row.append(num)
			larger_parsed.append(row)


cost = findMinCost(larger_parsed)-larger_parsed[0][0]
print(cost)
