from gtts import gTTS

x = input()
tts = gTTS(x)
tts.save('audio.mp3')
