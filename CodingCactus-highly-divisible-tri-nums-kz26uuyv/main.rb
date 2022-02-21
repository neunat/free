n = 0
d = 0

loop do
	d += 1
	n += d

	break if (1..(n**0.5)).reduce(0) { |count, div| n % div == 0 ? count + 2 : count } > 500
end
puts n