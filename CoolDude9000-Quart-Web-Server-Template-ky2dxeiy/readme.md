# Replit Quart Template:

A nice template for Quart.
Docs: [Click Here] (https://pgjones.gitlab.io/quart/)

skip to part 3 for the actual good stuff.

## Table of contents:

1. Tntroduction
2. Quart Vs. Flask
3. Setup
   5. The import(s)
   5. app
   5. page(s)
   5. run
   5. addons
      1. render html

## introductions:
Hi replit! I once make a [post] (https://replit.com/talk/ask/How-to-use-quart/133673) asking why my quart isn't working and disovered that it defults to localhost or 127.0.0.1. 

Thanks to [@Coder100] (https://replit.com/@Coder100) for the help.

And so I desided to make a simple template to help out to the people making a discord.py bot dashboard with Quart.

## Quart Vs. Flask:
If anyone didn't know Discord.py is an asynchronous library and Flask is not. 

![Synchronous Vs. asynchronous](https://miro.medium.com/max/540/1*t_oCyHBstMnF8WpZ67pKTg.jpeg)

###### credits: [medium.com] (https://medium.com/velotio-perspectives/an-introduction-to-asynchronous-programming-in-python-af0189a88bbb)

Hold Up!!! What does asynchronous mean? For the python newbies out there (like me) asynchronous means that python will run something (this is why discord.py wants you to await things) and check for other things to do.

I think this is what I think it is. Please correct me in the comments if its wrong. Don't froget to ping me if you correct me.

Well this is the part where Quart comes in. Quart is basically asynchronous flask. so basically...

> If you understand Flask you understand Quart.


## Setup: 

Okay. So lets fork the [template] (https://replit.com/@CoolDude9000/Quart-Web-Server-Template?v=1). The thumbnail took 3 tries for anyone wondering. I'm a image design n00b.

You will see the main.py file with everything we will need. Unless you wanna get to the addons.

Docs are at the top page btw.

Lets break it down so even n00bs like me can learn this stuff.

#### The import(s):

```python
from quart import Quart
```
This your basic import. It gets quart. pip installion is below:
#
```pip
pip install Quart
```
#
#### App:

On line 3 we see this thing.
```python
app = Quart('') 
```
In the ``''`` you can add whatever name you want.
This defines ``app`` as a part of quart and the ``''`` basically are like a function that also take the name.
#
#### Page(s):
#

```python
@app.route('/')
async def home():
  return ''
```
This code comes from line ``9`` to ``11``. This will define the page. In the ``''`` at the bottom you can also add what you want the page to show. If you want to run html wait for the addons part.
#
The define line does not matter so it can be whatever as long as it isn't the same as something else. Just remember since Quart is asynchronous we use ```anync```.
#
On the top we can see ``@app.route('/')``. From my testing ``/`` is the home page and if you make a new app route and change the app route ``''`` to ``/[whatever you wanna it to be]`` and set the url to ``[website]/hello`` you will see the return text. 

It even works as ``[website]/[whatever you wanna it to be]/[whatever you wanna it to be]``.

That was kinda confusing so just comment if you need more help.
#
#### run:
#
On line 13 to 18 you will see this. 

```python
def run():
  app.run(
    host='0.0.0.0',
    port=8000,
    debug=True
  )
```
#
```python
host=0.0.0.0
``` 
You can't change this. If you do then might not work.
#
```python
port=8000
``` 
The port can be anything think but I usually keep it in between 3000 and 9000. 
#
```python
debug=True
``` 
This can be changed to ``True`` or ``False``. You can figure out how it works as its self-explanatory.
#

#### Addons:

##### Render HTML:

On line 6 add...
```python
def render(file):
  with open(file) as html_data:
    return ''.join(html_data.readlines())
```


Wait... why not use quart's render template? 
```
Because it requires a templates folder and I want to be able to name whatever folders I want.
```
#
#### Syntax:
```python
render('[your html file]')
```

You can add your html files in the ``[your html file]`` slot. Lets say I have a file in ``dashboard/commands/commands.html``

And yes, seperate the folders with ``/``. This just converts the file to a string that can be rendered and returns it.
#
Usage:

```python
return render('[your html file]')
```

So if you remember this is the part in ``@app.route('/')``

#

# The end:

I hope you enjoyed this. Please comment if i missed comething.