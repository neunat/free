from twilio.rest import Client

account_sid = "AC7b29862c686c131d2983b09cb7b28a9f"
auth_token = "3516b737025462cce7b6c463939ee3ac"
twilio_number = "+18506053657"

# Numbers to report to

Lucas = "+46793138799"
Erik = "+46708457572"
Victor = "+46708583830"
Ella = "+46708573371"
Ester = "0793366846"
August = "+46724487362"

client = Client(account_sid, auth_token)

while True:
  message = client.messages.create(
    body="God morgon!",
    from_=twilio_number,
    to=Lucas
  )
  
  print(message.body)