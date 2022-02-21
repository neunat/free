n = 1

10_001.times do
	n += 1
	until (2..(n**0.5)).none? { |d| n % d == 0 }
		n += 1
	end
end
puts n