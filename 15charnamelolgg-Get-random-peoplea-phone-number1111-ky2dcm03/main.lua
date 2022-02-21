print("Phone sniper 4.0\nWARNING: This program is just for entertainment purposes.\n\nCommands:\n\n\nsnipe: Followed by an amount of how many times you want to snipe a number\nexit: Exit the program\n\n\n\n")

local nt = {}

function getugliphone() -- Get a random kid's number
  math.randomseed(os.time()) -- Generate a new seed every second
  areacode = math.random(1, 249)
  N = math.random(2, 9) -- NPA
  P = math.random(0, 9)
  PP2 = math.random(0, 9)

  N2 = math.random(2, 9)
  X1 = math.random(0, 9)
  X2 = math.random(0, 9)

  p3 = math.random(1000, 9999)

  if P == PP2 then
    P = math.random(0, 9)
    PP2 = math.random(0, 9)
    print("regenerated.")
  elseif X1 == X2 then
    X1 = math.random(0, 9)
    X2 = math.random(0, 9)
    print("regenerated.")
  end


  print("+".. areacode .." ".. N .. P .. PP2 .."-".. N2 .. X1 .. X2 .."-".. p3)


end

function wait(seconds) -- omg roblox?????
    local start = os.time()
    repeat until os.time() > start + seconds
end

repeat
  inputw = io.read()

  if string.match(string.lower(inputw), "snipe") then -- If user input equals "snipe"
    for n in string.gfind(inputw, "%d") do -- Find digits and put them into a table
      table.insert(nt, n)
    end
    local maximum = tonumber(table.concat(nt)) -- Concaternates a table into one full string and then converts it into a number
    nt = {}
    for i = 1, maximum do
      getugliphone()
      wait(0.01)
    end
  end

  
until inputw == "exit"