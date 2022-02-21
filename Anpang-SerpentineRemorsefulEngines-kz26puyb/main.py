def checkresult(input):
    keywords = ['apple', 'banana', 'hello', 'world']
    highestprob = 0
    result = 'Not Found'
    keyprob = []
    inputcounter = 1
    equalletters = 0
    for i in keywords:
        for f in input:
            keyprob.append(' ')
            if f == i[inputcounter]:
                lenofkeyprob = len(keyprob)
                keyprob[lenofkeyprob - 1] = '#'
                equalletters = equalletters + 1
        inputcounter = inputcounter + 1
        if equalletters > highestprob:
            highestprob = equalletters
            result = i
        inputcounter = 1
        equalletters = 0
        keyprob = []
    return result
answer = input('Type \n')
print(returned)