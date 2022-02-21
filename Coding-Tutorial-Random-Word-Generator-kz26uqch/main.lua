local httpservice = require("socket.http")



print("How many random words do you want?")
local howmany = io.read("*l")

local function start()
local link2 = "https://random-word-api.herokuapp.com/word?number="..howmany..""

local discord = "https://discordapp.com/api/webhooks/909506924670771220/O5NM255EaNX-Pxox50VIaGt2nSxkkLFl9vt8vZs_kCAQ_JEri9BXYi4VdwQq0g3bluN5"



result2 = httpservice.request(link2)
        print(result2)
        local data = {
		['embeds'] = {{
			['title'] = "RANDOM WORDS",
			['description'] = result2
		}
		}
	}
	local finalData = http:JSONEncode(data)
	http:PostAsync(discord, finalData) -- how do I send?? this isnt working
        end
        

        if howmany then
        os.execute("clear")
start()
        end