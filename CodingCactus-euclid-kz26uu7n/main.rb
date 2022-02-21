def bcd(a, b)
	a, b = [[a, b].max, [a, b].min]
	return b if a % b == 0
	bcd(b, a % b)
end

puts bcd(172, 20)