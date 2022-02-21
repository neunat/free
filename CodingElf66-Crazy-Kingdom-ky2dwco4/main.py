from flask import Flask, render_template, request
import random

app = Flask('app')

class Player:
  def __init__(self, materials, people, popuarlity, gold):
    self.materials = materials
    self.people = people
    self.popuarlity = popuarlity
    self.gold = gold

  def add_reaction(self, reaction):
    for index, attr_reaction in enumerate(reaction):
      if index == 0:
        self.materials += attr_reaction

      elif index == 1:
        self.people += attr_reaction

      elif index == 2:
        self.popuarlity += attr_reaction

      else:
        self.gold += attr_reaction

class Creature:
  def __init__(self, name, question, yes_response, no_response, yes_reaction, no_reaction):
    self.name = name

    self.question = question

    self.yes_response = yes_response
    self.no_response = no_response

    self.yes_reaction = yes_reaction
    self.no_reaction = no_reaction

player = Player(0, 0, 0, 0)

with open('data.txt') as file:
  all = []

  yes_start_index = None
  no_start_index = None

  done = False

  for index, data in enumerate(file):
    data = data[:-1]

    if '?' in data:
      stop = data.find(':')

      name = data[:stop]

      question = data[stop+2:]

    if 'Yes:' in data:
      yes_start_index = index + 1

      yes_response = data.replace('Yes: ', '')

    if 'No:' in data:
      no_start_index = index + 1

      no_response = data.replace('No: ', '')

    yes_reaction = [0,0,0,0]
    no_reaction = [0,0,0,0]

    if yes_start_index == index:
      seperation = data.find(' ')

      reaction = int(data[:seperation])

      attribute = data[seperation:]

      if attribute == "Materials":
        yes_reaction[0] = reaction
      
      elif attribute == "People":
        yes_reaction[1] = reaction

      elif attribute == "Popularity":
        yes_reaction[2] = reaction

      elif attribute == "Happiness":
        yes_reaction[3] = reaction

    elif no_start_index == index:
      seperation = data.find(' ')

      reaction = int(data[:seperation])

      attribute = data[seperation:]

      if attribute == "Materials":
        no_reaction[0] = reaction
      
      elif attribute == "People":
        no_reaction[1] = reaction

      elif attribute == "Popularity":
        no_reaction[2] = reaction

      elif attribute == "Happiness":
        no_reaction[3] = reaction

    if data == "":
      done = True

    if done:
      name_stats = Creature(name, question, yes_response, no_response, yes_reaction, no_reaction)

      all.append(name_stats)

# random_name = random.choice(all)

# print(f"Name: {random_name.name}")
# print(f"Question: {random_name.question}")
# print(f"Yes: {random_name.yes_response}")
# print(f"No: {random_name.no_response}")

@app.route('/')
def home():  
  return render_template('home.html')

@app.route('/play')
def play():
  random_name = random.choice(all)

  name = random_name.name
  
  question = random_name.question

  name = name.lower()

  name = name.replace(' ', '')

  src = f"/static/img/{name}.svg"

  return render_template('play.html', src=src, question=question, answered=answered)

app.run(host='0.0.0.0', port=8080)