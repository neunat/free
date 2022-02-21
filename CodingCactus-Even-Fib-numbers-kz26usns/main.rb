n1 = 0
n2 = 1
sum = 0

until n2 > 4_000_000
	n3 = n1 + n2
	sum += n3 if n3 % 2 == 0
	n1, n2 = n2, n3
end
puts sum