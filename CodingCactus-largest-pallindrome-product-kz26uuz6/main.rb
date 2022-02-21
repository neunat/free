largest = 0

999.downto(100) do |num1|
	999.downto(100) do |num2|
		prod = num1 * num2
		largest = prod if prod.to_s.reverse == prod.to_s && prod > largest
	end
end

puts largest