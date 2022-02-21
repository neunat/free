n = 1
sum = 0

while n < 2_000_000
	n += 1
	until (2..(n**0.5)).none? { |d| n % d == 0 }
		n += 1
	end
	sum += n if n < 2_000_000
end
puts sum
