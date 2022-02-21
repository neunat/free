class Thingy
	def initialize(data)
		@data = data
	end

	def [](key)
		p key
		@data.each { |keys, value| return value if keys.include?(key) }
		nil
	end
end

$lengths = Thingy.new({
	[0] => 0,
	[1, 2, 6, 10] => 3,
	[4, 5, 9] => 4,
	[3, 7, 8, 40, 50, 60] => 5,
	[11, 12, 20, 30, 80, 90] => 6,
	[15, 16, 70, 100] => 7,
	[13, 14, 18, 19, 1000] => 8,
	[17] => 9
})

def num_length(num)
	return $lengths[num] if num <= 20

	len = num.to_s.split("").map(&:to_i).each_with_index.reduce(0) do |sum, (n, i)|
		sum + (i == num.to_s.length-1 ? $lengths[n] : (n == 0 ? 0 : $lengths[n] + $lengths[10 ** (num.to_s.length-1 - i)]))
	end
	len += 3 if num.to_s.length > 2 && num.to_s.split("")[-2..-1].any? { |n| n != "0" }
	len
end

#puts (1..1000).reduce(0) { |count, num| count + num_length(num) }

p num_length(342)