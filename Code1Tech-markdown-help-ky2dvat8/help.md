# Well, hello there!
This is a test document!  
# _**Just a reminder to get started on markdown.**_

Codeblocks:  
use three backquotes (`)   
then the lang name after  

^ = three backquotes

example:  
^js  
(code)  
^ (to tell md to stop)

```js
/* test program */
class TestSubject {
  constructor(name) {
    this.name = name;
  }
  helloToYou() {
    console.log(`Hello, ${this.name}!`);
  }
}
testsub1 = new TestSubject("Code1Tech");
testsub1.helloToYou();
//////////////////
```
To add spaces, press the space bar 2 times then press enter.  
It works!  

Without:  
Hello
World  
(I added a space but it didn't show up.)