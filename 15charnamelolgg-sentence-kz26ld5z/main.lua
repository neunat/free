words = {"I", "We"}
ad = {"may", "can", "cannot", "may not"}
others = {
  "affect",
  "traumatize",
  "kill",
  "poo",
  "eat",
  "drive",
  "teach",
  "assasinate",
  "cook",
  "give money to",
  "clean",
  "house",
  "like",
  "hate",
  "despise",
  "delete",
  "add",
  "drug",
  "shoot",
  "aim my gun at"
}

people = {
  "people",
  "bo",
  "",
  "kids",
  "administration",
  "minorities",
  "adults",
  "elders",
  "seniors",
  "taxi drivers",
  "teens",
  "students",
  "government officials"
}


set1 = ""
set2 = ""
set3 = ""

math.randomseed(os.time())

for i = 1, #words do
  set1 = words[math.random(1, i)]
  for k = 1, #others do
    set2 = others[math.random(1, k)]
    for l = 1, #people do
      set3 = people[math.random(1, l)]
    end
  end
end

print(set1 .. " " .. set2 .. " " .. set3)