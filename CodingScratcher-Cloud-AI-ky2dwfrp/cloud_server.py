from mltext import classifyText, storeText
from mlmodel import trainModel, checkModel
from better_profanity import profanity
from bs4 import BeautifulSoup
from datetime import datetime
from random import randint
from replit import db
import scratch2py
import time
import os

searchBase = 'https://en.wikipedia.org/wiki/'
soup = None


def makeSoup(website):
    global soup
    soup = BeautifulSoup(website, 'html.parser')


# Clear console function
def clear():
    # for windows
    if os.name == 'nt':
        _ = os.system('cls')
    else:
        _ = os.system('clear')


API_KEY = os.environ['ML_KEY']

s2py = scratch2py.s2py(os.environ["Username"], os.environ["Password"])

# print(s2py.encode('AdditionReady'))
# print(s2py.encode('SubtractionReady'))
# print(s2py.encode('MultiplicationReady'))
# print(s2py.encode('DivisionReady'))

s2py.cloudConnect('556033956')

Input = s2py.readCloudVar('Cloud')
Encoded_Data = s2py.encode(Input)
Cloud = Encoded_Data
Returns = None
UserCloud = s2py.readCloudVar('Username')
Username = s2py.decode(UserCloud)

#print(Username)


def doAiStuff(decodedMessage, Loves, Faves, Remixes, Views):
    global Returns

    # Add word to DB (just making sure they don't use bad words)
    db[Username] = decodedMessage

    d = datetime.now()
    print(s2py.decode(decodedMessage))

    test_text = s2py.decode(decodedMessage)
    days = [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
        "Sunday"
    ]

    idkMessages = [
        "I don't know that", "Could not figure that one out.",
        "I'm having trouble.", "Come back later, the server may be down."
    ]

    demo = classifyText(API_KEY, test_text)

    label = demo["class_name"]
    confidence = demo["confidence"]

    # if 'EquationAddition' in s2py.decode(s2py.readCloudVar('Cloud')):
    #     numbers = s2py.encode(s2py.readCloudVar('Cloud')).split('+')
    #     retur = 0

    #     for number in numbers:
    #         retur += number

    #     s2py.setCloudVar('Cloud', s2py.encode(str(retur)))

    # elif 'EquationSubtraction' in s2py.decode(s2py.readCloudVar('Cloud')):
    #     numbers = s2py.encode(s2py.readCloudVar('Cloud')).split('-')
    #     retur = numbers[0]

    #     for number in numbers:
    #         if number == retur:
    #             pass
    #         else:
    #             retur -= number

    #     s2py.setCloudVar('Cloud', s2py.encode(str(retur)))

    # elif 'EquationMultiplication' in s2py.decode(s2py.readCloudVar('Cloud')):
    #     numbers = s2py.encode(s2py.readCloudVar('Cloud')).split('*')
    #     retur = 1

    #     for number in numbers:
    #         retur *= number

    #     s2py.setCloudVar('Cloud', s2py.encode(str(retur)))

    # elif 'EquationDivision' in s2py.decode(s2py.readCloudVar('Cloud')):
    #     numbers = s2py.encode(s2py.readCloudVar('Cloud')).split('/')
    #     retur = 1

    #     for number in numbers:
    #         retur /= number

    #     s2py.setCloudVar('Cloud', s2py.encode(str(retur)))

    if label == 'Greetings':
        Returns = f'{confidence}%={label}=Hello!'

    elif label == 'System_Version':
        Returns = f'{confidence}%={label}=The version is v1.0.0-beta'

    elif label == 'User_Info':
        s2py.decode
        Returns = f'{confidence}%={label}=You are {Username}'

    elif label == 'Time_Commands':
        Returns = f'{confidence}%={label}=The time is {datetime.now().hour - 16}:{datetime.now().minute}'

    elif label == 'Day_Of_The_Week_Commands':
        Returns = f'{confidence}%={label}=The day is {days[datetime.today().weekday()]}'

    elif label == 'Date_Commands':
        Returns = f'{confidence}%={label}={str(d.day)} / {str(d.month)} / {str(d.year)}'

    elif label == 'Who_Made_You_Commands':
        Returns = f'{confidence}%={label}=I was made by @jvn11 & @ScratchTheCoder12345 (check out their Github accounts!).'

    elif label == 'System_Info':
        Returns = f'{confidence}%={label}=I am Cloud AI. Made by @jvn11 & ScratchTheCoder12345.'

    elif label == 'Bye_Commands':
        Returns = f'{confidence}%={label}=Bye, See you soon!'

    elif label == 'Project_Info':
        Returns = f'{confidence}%={label}=This project has {Loves} Loves, {Faves} Faves,\n {Views} Views, and {Remixes} Remixes.'

    elif label == 'Loves':
        Returns = f'{confidence}%={label}=This project has {Loves} Loves.'

    elif label == 'Remix':
        Returns = f'{confidence}%={label}=This project has {Remixes} Remixes.'

    elif label == 'Faves':
        Returns = f'{confidence}%={label}=This project has {Faves} Faves.'

    elif label == 'Views':
        Returns = f'{confidence}%={label}=This project has {Views} Views.'

    # elif label == 'Math':
    #     s2py.setCloudVar('Cloud', s2py.encode('MathReady'))

    # #elif label == 'Add':
    #     s2py.setCloudVar('Cloud', s2py.encode('AdditionReady'))

    # elif label == 'Sub':
    #     s2py.setCloudVar('Cloud', s2py.encode('SubtractionReady'))

    # elif label == 'Mul':
    #     s2py.setCloudVar('Cloud', s2py.encode('MultiplicationReady'))

    # elif label == 'Div':
    #     s2py.setCloudVar('Cloud', s2py.encode('DivisionReady'))

    elif label == 'Google' and 'googlesearch' in s2py.decode(s2py.readCloudVar('Cloud')):
        Returns = f'{confidence}%={label}=What do you want to search?'
        encode_google = s2py.encode('google_ready')
        s2py.setCloudVar('Cloud', encode_google)

    elif 'googlesearch' in s2py.decode(s2py.readCloudVar('Cloud')):
        cloudsplitted = s2py.decode(s2py.readCloudVar('Cloud')).split('=')[1]

        makeSoup(f'https://www.google.com/search?q={cloudsplitted}')

        print(soup.title)

    else:
        Returns = f'100%=Error={idkMessages[randint(0, len(idkMessages) - 1)]}'


def startServer(Love, Fave, Remixes, Views):
    while True:
        print('googlesearch' in s2py.decode(s2py.readCloudVar('Cloud')))
        doAiStuff(s2py.decode(Cloud), Love, Fave, Remixes, Views)
        print(Returns)

        if Returns != None:
            test = s2py.encode(Returns)
            s2py.setCloudVar('Cloud', test)

        time.sleep(0.15)
        # if it less than 11 miliseconds it will not work bc the cloud updates every 11 miliseconds.
