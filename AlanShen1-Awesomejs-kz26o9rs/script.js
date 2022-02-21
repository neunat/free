const $ = {
  get: function (tag) {
    let parse = tag.split("")
    let selector = parse[0]
    let name = ""
    for (var i = 1; i < parse.length; i++) {
      name += parse[i]
    }
    switch (selector) {
      case "#":
        return document.getElementById(name)
      case ".":
        return document.getElementsByClassName(name)[0]
      default:
        return document.getElementsByTagName(tag)[0]
    }
  },
  filter: function (tag) {
    let parse = tag.split("")
    let selector = parse[0]
    let name = ""
    for (var i = 1; i < parse.length; i++) {
      name += parse[i]
    }
    switch (selector) {
      case "#":
        return document.querySelectorAll(tag)
      case ".":
        return document.getElementsByClassName(name)[0]
      default:
        return document.getElementsByTagName(tag)[0]
    }
  },
  win: {
    href: function () {
      return window.location.href
    },
    origin: function () {
      return window.location.origin
    },
    protocol: function(){
      return window.location.protocol
    },
    host: function(){
      return window.location.host
    },
    pathname: function(){
      return window.location.pathname
    },
    port: function () {
      return window.location.port
    },
    redirect: function (href) {
      window.location.href = href
    }
  },
  log: function(str){
    console.log(str)
  },
  warn: function(str){
    console.warn(str)
  },
  error: function(str){
    console.error(str)
  },
  sort: function(array){
    for(var i = 0; i < array.length; i++){
      for(var j = 0; j < array.length - i - 1; j++){
        if(array[j] > array[j + 1]){
          let temp = array[j]
          array[j] = array[j + 1]
          array[j + 1] = temp
        }
      }
    }
    return array
  },
  random: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  encode: function(str) {
    str = str.split("")
    let res = ""
    let length = str.length;
    let chars = "~!@#$%^&*()_+`1234567890-=QWERTYUIOP{}|ASDFGHJKL:ZXCVBNM<>?qwertyuiop[]\asdfghjkl;zxcvbnm,./"
    let reschars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`1234567890-=~!@#$%^&*()_+[]\;,./{}|:<>?"
    for(var i = 0; i < str.length; i++){
      let index = 0;
      for(var j = 0; j < reschars.length; j++){
        if(reschars[j] == str[i]) {
          index = j
        }
      }
      
    }
  }
}