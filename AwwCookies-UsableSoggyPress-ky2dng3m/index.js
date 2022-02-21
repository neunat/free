const arr = [
  ["Twenty", 20],
  ["Thirty", 30],
  ["Forty", 40],
  ["Fifty", 50],
  ["Sixty", 60],
  ["Seventy", 70],
  ["Eighty", 80],
  ["Ninty", 90],
  ["OneHundred", 100]
]

arr.forEach((ar) => {
  console.log(`achievements.push(new Level${ar[0]}Achievement(events))`)
})