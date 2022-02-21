grid = []
File.foreach("input.txt") { |line| grid << line.strip.split.map(&:to_i) }

highest = 0
grid.each_with_index do |row, y|
	row.each_index do |x|		
		h = 0

		if x >= 0 && x+3 < row.length
			prod = 1
			(x..(x+3)).each do |x_coord|
				prod *= grid[y][x_coord]
			end
		
			h = [h, prod].max
		end

		if y >= 0 && y+3 < grid.length
			prod = 1
			(y..(y+3)).each do |y_coord|
				prod *= grid[y_coord][x]
			end
		
			h = [h, prod].max
		end

		if x >= 0 && x+3 < row.length && y >= 0 && y+3 < grid.length	
			prod = 1
			(0..3).each do |diff|
				prod *= grid[y+diff][x+diff]
			end
		
			h = [h, prod].max
		end

		if x-3 >= 0 && x < row.length && y >= 0 && y+3 < grid.length	
			prod = 1
			(0..3).each do |diff|
				prod *= grid[y+diff][x-diff]
			end
		
			h = [h, prod].max
		end

		highest = [highest, h].max
	end
end

puts highest