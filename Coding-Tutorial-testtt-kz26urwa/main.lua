local http = require("socket.http")
ltn12 = require("ltn12")

local payload = [[ {"username":"NAME","avatar_url":"","content":"MESSAGE"} ]]

http.request
{
    url = "https://discordapp.com/api/webhooks/909506924670771220/O5NM255EaNX-Pxox50VIaGt2nSxkkLFl9vt8vZs_kCAQ_JEri9BXYi4VdwQq0g3bluN5",
    method = "POST",
    headers =
    {
        ["Content-Type"] = "application/json",
        ["Content-Length"] = payload:len()
    },
    source = ltn12.source.string(payload),
}