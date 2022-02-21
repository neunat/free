print "Enter number: "
num = gets.chomp

loop_type = :count_digits
count_index = sum = 0

loop do
	if loop_type == :count_digits
		sum += num[count_index].to_i
		
		if sum == 10 && (count_index+1) == num.length
			break
		elsif sum > 10 || (count_index+1) == num.length
			loop_type = :decrement
		else		
			count_index += 1
		end
	else
		diff = sum - 10

		if diff > 0
			num[count_index] = (num[count_index].to_i - diff).to_s
		else
			prev_length = num.length
			diff = num[count_index-1].to_i - 1
			if diff > 0
				num[count_index-1] = diff.to_s
			else			
				num = (num.to_i + diff * 10 ** (num.length - count_index)).to_s
				num = "0" * (prev_length - num.length) + num
			end
			num[count_index] = "9"
		end	
		num[(count_index+1)..-1] = "0" * num[(count_index+1)..-1].length unless count_index+1 == num.length

		count_index = sum = 0
		loop_type = :count_digits
	end
end

puts num.to_i