found = false
1.upto(332) do |a|
	(a+1).upto(1000-a-1) do |b|
		c = 1000 - a - b
		if a ** 2 + b ** 2 == c ** 2
			puts a*b*c
			found = true
			break
		end
	end
	break if found
end