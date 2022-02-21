def combinations(n, k)
  return 1 if k == 0 or k == n
  (k + 1 .. n).reduce(:*) / (1 .. n - k).reduce(:*)
end

puts combinations(40, 20)