**NOTES FOR JUDGES**
> Sometimes the repl has trouble running, try forking the repl. Best played with other players, share with your friends!
Don't forget to also turn on embeds so you can use repl authentication.

![pompkin](sprites/pompkinio.png)

# How to play
This is you
![you](sprites/pumpkin2.png)

This is them
![other](sprites/otherpumpkin2.png)

Mouse to move
![mouse](sprites/mouse.png)

Eat water, Eat others, but don't get eaten!
![gameplay](sprites/gameplay.png)

# Sprites Comparison
I updated the sprites to have better graphics, here's a comparison

|old|new|
|--|--|
|![old](sprites/background.png)|![new](sprites/bg2.png)|
|![old](sprites/farbg.png)|![new](sprites/farbg2.png)|
|![old](sprites/otherpumpkin.png)|![new](sprites/otherpumpkin2.png)|
|![old](sprites/pumpkin.png)|![new](sprites/pumpkin2.png)|
|![old](sprites/water.png)|![new](sprites/water2.png)|

## What I would do if I had more time
I want to add shooting to slow down players, and splitting pumpkins for more interesting agar gameplay. I didn't implement them because I had homework to do, and I had already invested so much time into this. It might have also made the lag worse, which is one thing I do not want.

## Learning
This game used to be sooo laggy, it's slightly laggy now I think. I learned how to use a better setInterval that drifted less, so you would have more stable performance. Also, I learned how to use quadtrees, and how to make bot users, even if these bots kinda suck. The kaboom template is absolutely amazing, but it still has a few things that need to be changed. First, it is terrible for multiplayer, when a new player joins, the log clears. Second, you can't exactly build it for production, as the minifying option doesn't exist. All of these things had to be hacked in, which is cool, but adds unecessary time and pain. I also (hopefully) got better at graphics design, and you can see the comparisons above.

## Kaboom Multiplayer
Websockets is definitely an interesting api, but personally I'd rather wait until kaboom launches multiplayer, I don't think anyone truly wants to use websockets xd