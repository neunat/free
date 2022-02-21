import static  java.lang.Math.random;
class MagicEightBall{
  
  public static String shake(){
  String response = "";
   int magicNumber =  (int)((Math.random()*9)+1);
    switch(magicNumber){
      case 1:
        response =  ("Yes-Definetly");
        break;
      case 2:
        response = ("You may rely on it");
        break;
      case 3:
        response = ("Most Likely");
        break;
      case 4:
        response = ("Outlook good");
        break;
      case 5:
        response = ("Signs point to yes");
        break;
      case 6:
        response = ("Better not tell you now");
        break;
      case 7:
        response = ("Cannot predict now");
        break;
      case 8:
        response = ("Concentrate and ask again");
        break;
      case 9:
        response = ("Dont count on it");
        break;
      case 10:
        response = ("No- absolutely not");
        break;
    }
    return response;
    
    }
  }

