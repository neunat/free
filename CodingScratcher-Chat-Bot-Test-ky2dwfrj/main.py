from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
my_bot = ChatBot(name = "Helper", read_only=True,
logic_adapters= ['chatterbot.logic.MathmaticalEvaluation','chatterbot.logic.BestMath'])

small_talk = ['Hi There',
'hi!',
"How are you?",
"How do you do?",
"I\'m cool",
"fine you?"]

list_trainer = ListTrainer(my_bot)

for item in (small_talk):
  list_trainer.train(item)

from chatterbot.trainers import ChatterBotCorpusTrainer

corpus_trainer = ChatterBotCorpusTrainer(my_bot)
corpus_trainer.train('chatterbot.corpus.english')