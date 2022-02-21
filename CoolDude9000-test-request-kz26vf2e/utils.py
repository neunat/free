import json, requests

report_url = "https://cov19.cc/report.json"
report = requests.get(report_url).json()

class InvalidCountry(Exception):
  pass

class InvalidState(Exception):
  pass

def request(url):
  return requests.get(url)

def pretty_print(file):
  return json.dumps(file, indent=2)

def country(country, totals=False):
  try:
    r = report["regions"][country]
  except:
    try:
      r = report["regions"]["world"]["list"][country]
    except:
      raise InvalidCountry("Huh, Something went wrong. Either you fed me nonsence, I'm bad at my job or the json doesn't have your country. Sorry :)")
  if totals == True:
    return r["totals"]
  else:
    return r["list"]
  
def state(country, state):
  try:
    for i in range(0, len(country)):
      if state.title() == country[i]["state"]:
        return country[i]
    return None
  except:
    raise InvalidCountry("The variable \"Country\" is Invalid.")