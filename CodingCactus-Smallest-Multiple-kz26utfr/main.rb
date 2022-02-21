n = 1

until (1..20).all? { |d| n % d == 0 }
	n += 1
end

puts n