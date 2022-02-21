longest = 0
num = nil
(1...1_000_000).each do |n|
	start = n
	length = 1
	until n == 1
		n = n % 2 == 0 ? n/2 : 3*n + 1
		length += 1
	end

	if length > longest
		longest = length
		num = start
	end
end
puts num, longest