sum_squares = 0
sum_squared = 0

(1..100).each do |n|
	sum_squares += n**2
	sum_squared += n
end

puts sum_squared ** 2 - sum_squares