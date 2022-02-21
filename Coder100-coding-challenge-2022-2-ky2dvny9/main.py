# coding-challenge-2022-2

from flask import Flask, request

import os
import re

def clear():
    os.system("clear")

app = Flask("app")

def piglatin(lines):
    out = []
    for line in lines:
        words = line.split()

        for i, word in enumerate(words):
            
            '''
            if first letter is a vowel
            '''
            if word[0] in 'aeiou':
                words[i] = words[i] + "ay"
            else:
                '''
                else get vowel position and postfix all the consonants 
                present before that vowel to the end of the word along with "ay"
                '''
                has_vowel = False
                
                for j, letter in enumerate(word):
                    if letter in 'aeiou':
                        words[i] = word[j:] + word[:j] + "ay"
                        has_vowel = True
                        break

                # if the word doesn't have any vowel then simply postfix "ay"
                if (has_vowel == False):
                    words[i] = words[i] + "ay"

        out.append(' '.join(words))
    
    return '\n'.join(out)


@app.route("/")
def lol():
    return piglatin(["hi there lol \"x\""])

@app.route("/challenge1")
def challenge1():
    data = request.get_data().decode()

    # print(request.get_data().decode())
    return "okay"

app.run("0.0.0.0", 8080)
clear()